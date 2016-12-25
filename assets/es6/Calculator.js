/**
 * Created by Benjamin on 24-12-2016.
 */
String.prototype.toDOM=function(){
    let d=document
        ,i
        ,a=d.createElement("div")
        ,b=d.createDocumentFragment();
    a.innerHTML=this;
    while(i=a.firstChild)b.appendChild(i);
    return b;
};

export default class Calculator {

    constructor(defaultValue) {
        this.defaultValue = defaultValue;

        this.value = defaultValue;

        this.result = defaultValue;

        this.onclose = () => {
        };
        this.ondone = () => {
        };

        this.view = this.makeView();

        document.body.appendChild(this.view.toDOM());

        this.calculaterElement = document.querySelector(".calculator");

        this.inputEl = this.calculaterElement.querySelector(".input");
        this.resultEl = this.calculaterElement.querySelector(".result");

        this.inputEl.innerHTML = this.value;
        this.resultEl.innerHTML = this.value;

        this.addEventListeners();


    }

    static calculate(defaultValue) {
        const calculator = new Calculator(defaultValue);

        return new Promise((succes, fail) => {
            calculator.onclose = () => {
                fail();
            };
            calculator.ondone = (value) => {
                succes(value);
            }
        })

    }

    makeView() {
        return `
            <div class="calculator">
                <div class="top">
                    <div class="luk material-z1">Luk og fortryd</div>
                    <div class="input"></div>
                    <div class="result"></div>
                </div>
                <div class="controls">
                    <div class="numbers">
                        <div class="number material-ink" data-nr="7">7</div>
                        <div class="number material-ink" data-nr="8">8</div>
                        <div class="number material-ink" data-nr="9">9</div>
                        <div class="clear"></div>
                        
                        <div class="number material-ink" data-nr="4">4</div>
                        <div class="number material-ink" data-nr="5">5</div>
                        <div class="number material-ink" data-nr="6">6</div>
                        <div class="clear"></div>
                        
                        <div class="number material-ink" data-nr="1">1</div>
                        <div class="number material-ink" data-nr="2">2</div>
                        <div class="number material-ink" data-nr="3">3</div>
                        <div class="clear"></div>
                        
                        <div class="number material-ink" data-nr=",">,</div>
                        <div class="number material-ink" data-nr="0">0</div>
                        <div class="clear"></div>
                    </div>
                    <div class="actions">
                        <div class="calc-action material-ink" data-action="del">DEL</div>
                        <div class="calc-action material-ink" data-action="+">+</div>
                        <div class="calc-action material-ink" data-action="-">-</div>
                    </div>
                    <div class="ok material-z1 action">Ok</div>
                </div>
            </div>
        `;
    }

    plus() {
        if (this.value.toString().length > 0) {
            this.value = this.cleanEnd(this.value);
            if (this.value.toString().length > 0) {
                this.value += "+";
            }
        }
        this.showAndCalc();
    }

    minues() {
        if (this.value.toString().length > 0) {
            this.value = this.cleanEnd(this.value);
            if (this.value.toString().length > 0) {
                this.value += "-";
            }
        }
        this.showAndCalc();
    }

    del() {
        if (this.value.toString().length > 0) {
            this.value = this.value.toString().substr(0, this.value.length - 1);
        }
        this.showAndCalc();
    }

    number(number) {
        if (number == ",") {
            if (this.value.toString().length == 0) {
                return;
            }
            let lastvalue = this.value.toString().substr(this.value.length - 1, 1);
            if (lastvalue == "," || lastvalue == "+" || lastvalue == "-") {
                return;
            }
            let numarray = this.value.toString().split(/(\+|-)/g);
            let lastnr = numarray[numarray.length - 1];

            if (lastnr.indexOf(",") > -1) {
                return;
            }

        }

        this.value += "" + number;
        this.showAndCalc();
    }

    showAndCalc() {
        this.inputEl.innerHTML = this.value;

        let calcvar = this.value.toString();

        calcvar = calcvar.replace(/,/g, ".");

        if (calcvar.length == 0) {
            this.result = "";
            this.resultEl.innerHTML = "";
        } else {
            calcvar = this.cleanEnd(calcvar);

            if (calcvar.length > 0) {
                try {
                    let resultInt = eval(calcvar);
                    let result = resultInt.toString();
                    this.result = resultInt;
                    this.resultEl.innerHTML = result.replace(/\./g, ",");
                } catch (e) {
                    this.result = "";
                    this.resultEl.innerHTML = "FEJL";
                }
            } else {
                this.result = "";
                this.resultEl.innerHTML = "";
            }
        }

    }

    addEventListeners() {
        const object = this;

        $(this.calculaterElement).find("[data-nr]").click(function () {
            object.number($(this).attr("data-nr"));
        });
        $(this.calculaterElement).find("[data-action]").click(function () {
            switch ($(this).attr("data-action")) {
                case "del":
                    object.del();
                    break;
                case "+":
                    object.plus();
                    break;
                case "-":
                    object.minues();
            }
        });
        this.calculaterElement.querySelector(".luk").addEventListener("click", () => {
            $(this.calculaterElement).remove();
            this.onclose();
        });
        this.calculaterElement.querySelector(".ok").addEventListener("click", () => {
            $(this.calculaterElement).remove();
            this.ondone(this.result);
        })
    }

    cleanEnd(value) {
        value = value.toString();
        while (true) {
            let lastvalue = value.substr(value.length - 1, 1);

            if (lastvalue == "+" || lastvalue == "-" || lastvalue == ",") {
                value = value.substr(0, value.length - 1);
            } else {
                break;
            }
        }
        return value;
    }
}