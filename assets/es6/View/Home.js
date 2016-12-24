/**
 * Created by Benjamin on 19-12-2016.
 */
import Calculator from "../Calculator";

export default class Home {

    constructor(app) {
        this.app = app;

        this.app.viewhandler.setView(`<div class="home-view">
        <div class="p15">
            <p>Med denne side kan du beregne hvad de individulle gæster skylder eller har tilgode ved et sammenskudsgilde</p>
            <p>Som standard betaler et barn det halve af en voksen
                <button class="material-button material-ink material-ripple action" style="margin-left: 10px;" id="ret_mulighedder">Ret / Tilføj fordeling</button>
            </p>
            <p><b>!!MEGET VIGTIG!! Udbetal ikke differance FØR oplysniger fra ALLE DELTAGER er indtastet</b></p>
        </div>
        <div id="sidescroll">
            <div id="sidescroll_inner" class="p15">
                <div id="labels"></div>
                <div id="rowholder"></div></div>
            </div>
        </div>
        <div id="more_priceinfomation" class="p15">
            <p>Penge brugt i alt: <span id="total">0</span></p>
            <div id="paymentdistributions"></div>
        </div>
        <div class="p15">
            <button class="material-button material-ink material-ripple" id="reset" style="    padding: 7px;
            background: #d4d4d4;
    font-size: 0.95em;
    border-radius: 2px;">Nulstil</button>
        </div>
        <p style="color: #666666; margin: 0 15px">Psst. kan du ikke resultatet kan du rulle til siden i tabellen</p>
        
        <div class="calcbutton material-z1">=</div>
        
`);

        this.columnWidths = [];
        this.displayedRows = [];


        this.retTilfoejMulighedder = document.querySelector("#ret_mulighedder");
        this.resetButton = document.querySelector("#reset");
        this.calcButton = document.querySelector(".calcbutton");
        this.rowholder = document.querySelector("#rowholder");
        this.paymentdistributions = document.querySelector("#paymentdistributions");
        this.total = document.querySelector("#total");
        this.view = document.querySelector(".home-view");

        this.addEventListeners();


        this.renderLabels();
        this.getColumnsWidth();
        this.customlabels = [];
        for (let label of this.app.data.paymentDistribution) {
            this.customlabels.push(label.name);
            this.paymentdistributions.innerHTML += `<p><span class="count-of-type">0</span> ${label.name} á <span class="price-of-type">0</span></p>`
        }

        this.showList();
        this.calculate();
        this.addRow();

    }

    remove() {

    }

    addEventListeners() {
        this.retTilfoejMulighedder.addEventListener("click", _ => this.app.viewhandler.editPaymentDistribution());

        let focusedElement = false;

        $(this.rowholder).on("change", ".material-checkbox", _ => {
            this.calculate(true);
        });
        $(this.rowholder).on("blur", ".indskud", e => {
            $(e.target).val($(e.target).val());
            this.calcButton.style.display = "none";
            this.calculate()
        });
        $(this.rowholder).on("focus", ".indskud", e => {
            this.calcButton.style.display = "flex";
            focusedElement = new Date().getTime();
            $(e.target).attr("data-ref", focusedElement);
        });
        this.calcButton.addEventListener("mousedown", e => {
            Calculator.calculate($("[data-ref="+focusedElement+"]").val() ).then(value => {
                $("[data-ref="+focusedElement+"]").val(value)
            }).catch(()=>{});

        });

        this.view.addEventListener("keyup", _ => this.keuUp());

        this.resetButton.addEventListener("click", _ => {
            let deletedGuests = this.app.data.guests.slice(0);

            this.app.data.guests = [];
            this.app.data.saveGuests();

            this.app.viewhandler.home();

            materialFramework.tools.new_notification({
                text: 'Gæsteliste nulstillet', time: 15000, actiontext: 'fortryd', action: () => {
                    this.app.data.guests = deletedGuests;
                    this.app.data.saveGuests();
                    this.app.viewhandler.home();
                }
            })

        })

    }


    renderLabels() {
        let labels = "";
        labels += "<span>Deltager navne</span>";
        labels += "<span>Indskud</span>";

        for (let paymentDistribution of this.app.data.paymentDistribution) {
            labels += `<span class="dynamic">${paymentDistribution.name}</span>`;
        }

        labels += "<span>Skylder / tilgode</span>";

        document.querySelector("#labels").innerHTML = labels;

    }

    getColumnsWidth() {
        let labels = document.querySelectorAll("#labels .dynamic");
        for (let label of labels) {
            this.columnWidths.push(label.offsetWidth + 20);
        }
    }

    keuUp() {
        if (!this.displayedRows[this.displayedRows.length - 1].isEmpty()) {
            this.addRow();
        }
        this.calculate()
    }

    showList() {
        for (let participant of this.app.data.guests) {
            let row = new Row(this.customlabels, this.columnWidths, this.app);
            row.setInputs(participant);

            this.displayedRows.push(row);
            this.rowholder.appendChild(row.row);

        }
    }

    addRow() {
        let nextRow = new Row(this.customlabels, this.columnWidths, this.app);
        this.displayedRows.push(nextRow);
        this.rowholder.appendChild(nextRow.row);

    }

    calculate(onlySave) {
        let validParticipantFillings = [];
        let sumContribution = 0;
        let sumParticipantPoints = 0;
        let participantCount = this.emptyArray(this.app.data.paymentDistribution.length);
        this.app.data.guests = [];

        for (let participant of this.displayedRows) {
            let input = participant.getInputs();
            if (input == false) {
                participant.setOutput(false);
                continue;
            }
            let participantPoints = 0;
            for (let paymentDistributionIndex = 0; paymentDistributionIndex < input.participants.length; paymentDistributionIndex++) {
                participantPoints +=
                    this.app.data.paymentDistribution[paymentDistributionIndex].value *
                    input.participants[paymentDistributionIndex];
                participantCount[paymentDistributionIndex] += input.participants[paymentDistributionIndex];
            }
            validParticipantFillings.push({
                participant, input, participantPoints
            });
            sumContribution += input.contribution;
            sumParticipantPoints += participantPoints;

            if (
                input.saveableData.contribution != 0 ||
                input.saveableData.participantName != "" ||
                input.saveableData.participants.length > 0
            ) {
                this.app.data.guests.push(input.saveableData)
            }

        }
        this.app.data.saveGuests();

        if (onlySave === true) {
            return;
        }

        for (let participantInfo of validParticipantFillings) {
            participantInfo.participant.setOutput(
                (
                    (
                        (participantInfo.participantPoints / sumParticipantPoints) *
                        sumContribution
                    )
                    - participantInfo.input.contribution
                ) * -1
            )
        }


        this.total.innerHTML = sumContribution;
        let round = (number) => Math.round(number * 100) / 100;

        for (let i = 0; i < participantCount.length; i++) {
            $(this.paymentdistributions).find("p").eq(i).find(".count-of-type").html(participantCount[i]);
            $(this.paymentdistributions).find("p").eq(i).find(".price-of-type").html(
                round((this.app.data.paymentDistribution[i].value / sumParticipantPoints) * sumContribution)
            );
        }

    }

    emptyArray(length) {
        let array = [];
        while (length > 0) {
            length--;
            array.push(0);
        }
        return array;
    }
}

class Row {
    constructor(labels, labelsWidth, app) {
        this.row = document.createElement("div");
        this.labels = labels;
        this.app = app;


        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.className = "material-checkbox";
        this.row.appendChild(checkbox);


        let participantName = document.createElement("input");
        participantName.setAttribute("type", "text");
        participantName.setAttribute("placeholder", "Deltager");
        this.row.appendChild(participantName);

        let contribution = document.createElement("input");
        contribution.setAttribute("type", "number");
        contribution.setAttribute("placeholder", "Indskud ");
        contribution.setAttribute("min", "0");
        contribution.className = "indskud";

        this.row.appendChild(contribution);

        for (let i = 0; i < labels.length; i++) {
            let labelName = labels[i];
            let labelWidth = labelsWidth[i];

            let inputElement = document.createElement("input");
            inputElement.setAttribute("type", "number");
            inputElement.setAttribute("min", "0");
            inputElement.setAttribute("placeholder", labelName);
            inputElement.style.width = labelWidth + "px";
            inputElement.setAttribute("data-id", this.app.data.paymentDistribution[i].id);
            inputElement.className = "variable";

            this.row.appendChild(inputElement);
        }

        let status = document.createElement("span");
        status.style.width = 115;
        this.row.appendChild(status);

    }

    getInputs() {
        let inputs = $(this.row).find("input[type=text],input[type=number]");
        let participants = [];
        let participantsWithId = [];

        let contribution = inputs.eq(1).val().replace(",", ".");
        if (contribution == "") {
            contribution = 0;
        }
        if (parseFloat(contribution) != contribution) {
            return false;
        }
        contribution = parseFloat(contribution);

        for (let i = 0; i < this.labels.length; i++) {
            let input = inputs.eq(2 + i);
            let count = input.val().replace(",", ".");
            if (count == "") {
                participants.push(0);
                continue
            }
            if (parseFloat(count) != count) {
                return false;
            }
            participants.push(
                parseFloat(count)
            );

            participantsWithId.push({
                id: parseInt(input.attr("data-id")),
                count: parseFloat(count)
            });
        }


        return {
            contribution,
            participants,
            saveableData: {
                participants: participantsWithId,
                contribution,
                participantName: inputs.eq(0).val(),
                checked: $(this.row).find(":checkbox").is(":checked")
            }
        }
    }

    setOutput(value) {
        let round = (number) => Math.round(number * 100) / 100;

        if (value === false || isNaN(value)) {
            $(this.row).find("span").text("Kunne ikke beregnes").css("color", "#da4437");
        } else {
            if (value >= 0) {
                $(this.row).find("span").text(round(value) + " tilgode").css("color", "#0f9d58");
            } else {
                $(this.row).find("span").text(round(value) + " skylder").css("color", "#da4437");
            }
        }
    }

    isEmpty() {
        let allEmpty = true;
        $(this.row).find("input[type=text],input[type=number]").each(function () {
            if ($(this).val() != "")
                allEmpty = false;
        });
        return allEmpty;
    }

    setInputs(participant) {
        let inputs = $(this.row).find("input");

        if (participant.checked) {
            inputs[0].checked = true;
        }
        inputs.eq(1).val(participant.participantName);
        inputs.eq(2).val(participant.contribution);

        for (let participantCount of participant.participants) {
            $(this.row).find("input[data-id=" + participantCount.id + "]").val(participantCount.count)
        }
    }
}