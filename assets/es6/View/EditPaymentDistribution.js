/**
 * Created by Benjamin on 19-12-2016.
 */
import PaymentDistribution from "../DataObjects/PaymentDistribution";
import DataHandler from "../DataHandler";

export default class EditPaymentDistribution {
    constructor(app) {
        this.app = app;

        this.app.viewhandler.setView(`
        <div class="ret-view p15">            
            <div class="table-labels"> 
                <div style="width: 70%;">Etikette</div> 
                <div style="width: 30%;">% af en voksen</div> 
            </div>
            <div class="clear"></div>
            <div id="ret_container"></div>
            <p>Hvis du fjerner en mulighed der er deltager på, bliver deltageren flyttet over i voksen kategorien</p>
            <button class="material-button material-ink material-ripple action" style="margin-top: 10px;" id="ret_gem">Gem</button>
        </div>`);

        this.view = document.querySelector(".ret-view");


        this.ret_container = document.querySelector("#ret_container");

        this.addEventListeners();

        this.showList();
        this.initListExpander();
    }

    remove() {

    }

    addEventListeners() {
        this.view.addEventListener("keyup", _ => this.keuUp());

        document.querySelector("#ret_gem").addEventListener('click', _ => this.gem());

        this.app.elements.useBackButton().then(_ => this.goBack());

    }

    goBack() {
        this.app.viewhandler.home();
    }

    parseInputs() {
        let lines = this.ret_container.querySelectorAll(".dynline"),
            errors = [],
            paymentDistributionLines = [];


        for (let line of lines) {
            let label = line.querySelector('[type="text"]').value,
                value = line.querySelector('[type="number"]').value;
            const id = parseInt(line.getAttribute("data-id"));

            if (label == "" && value == "") {
                continue;
            }
            if (label == "") {
                errors.push(`${value} har ikke fået en etikette tildelt`);
                continue;
            }
            if (value == "") {
                errors.push(`${label} har ikke fået en procent andel tildelt`);
                continue;
            }

            if (value != parseInt(value)) {
                errors.push(`${label}'s procentandel er ikke et heltal`);
                continue;
            }
            value = parseInt(value);
            if (value < 0) {
                errors.push(`${label}'s procentandel er ikke positiv`);
                continue;
            }
            paymentDistributionLines.push(
                new PaymentDistribution(label, value, true, id)
            )
        }

        return {
            errors, paymentDistributionLines
        }
    }

    gem() {
        let {errors, paymentDistributionLines} = this.parseInputs();

        if (errors.length > 0) {
            materialFramework.tools.confirm(
                "Formular udfyldt forkert", errors.join("<br>"), "Prøv igen", "Fortryd ændringer", () => {

                }, () => {
                    this.goBack();
                });

            return;
        }
        let newPaymentDistributionLines = [];
        for (let oldPaymentDistributionLine of this.app.data.paymentDistribution) {
            if (!oldPaymentDistributionLine.editable)
                newPaymentDistributionLines.push(oldPaymentDistributionLine);
        }
        for (let paymentDistributionLine of paymentDistributionLines) {
            newPaymentDistributionLines.push(paymentDistributionLine);
        }


        this.app.data.paymentDistribution = newPaymentDistributionLines;
        this.app.data.savePaymentDistributionLines();
        this.app.data.updateRemovedPaymentDistributionOptions();
        this.goBack();
    }


    showList() {
        for (let option of this.app.data.paymentDistribution) {
            if (option.editable) {

                this.ret_container.innerHTML += `
                <div class="dynline" data-id="${option.id}">
                    <div style="width: 70%;"><input type="text" value="${option.name}"></div> 
                    <div style="width: 30%;"><input type="number" min="1" value="${option.value}"></div> 
                
                </div>
                <div class="clear"></div>`;
            } else {

                this.ret_container.innerHTML += `
                <div data-id="${option.id}">
                    <div style="width: 70%;">${option.name}</div> 
                    <div style="width: 30%;">${option.value}</div> 
                
                </div>
                <div class="clear"></div>`;
            }
        }
    }

    addEmptyLine() {
        let line = document.createElement("div");
        line.className = "dynline";
        line.setAttribute("data-id", DataHandler.generatePaymentDistributionId());
        let label = document.createElement("div");
        label.style.width = "70%";
        let labelInput = document.createElement("input");
        labelInput.setAttribute("type", "text");
        label.appendChild(labelInput);
        line.appendChild(label);

        let value = document.createElement("div");
        value.style.width = "30%";
        let valueInput = document.createElement("input");
        valueInput.setAttribute("type", "number");
        valueInput.setAttribute("mim", "1");
        value.appendChild(valueInput);
        line.appendChild(value);

        let clear = document.createElement("div");
        clear.className = "clear";

        this.ret_container.appendChild(line);
        this.ret_container.appendChild(clear)
    }

    initListExpander() {
        this.addEmptyLine();
    }

    keuUp() {
        let inputs = this.ret_container.querySelectorAll("input");

        if (inputs[inputs.length - 1].value != "" && inputs[inputs.length - 2].value != "") {
            this.addEmptyLine();
        }
    }
};