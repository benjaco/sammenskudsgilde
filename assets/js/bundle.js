/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _ElementHandler = __webpack_require__(1);
	
	var _ElementHandler2 = _interopRequireDefault(_ElementHandler);
	
	var _ViewHandler = __webpack_require__(2);
	
	var _ViewHandler2 = _interopRequireDefault(_ViewHandler);
	
	var _DataHandler = __webpack_require__(7);
	
	var _DataHandler2 = _interopRequireDefault(_DataHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Created by Benjamin on 19-12-2016.
	                                                                                                                                                           */
	
	var App = function App() {
	    _classCallCheck(this, App);
	
	    this.data = new _DataHandler2.default(this);
	
	    this.elements = new _ElementHandler2.default(this);
	    this.viewhandler = new _ViewHandler2.default(this);
	
	    this.viewhandler.home();
	};
	
	var app = new App();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Benjamin on 19-12-2016.
	 */
	
	var ElementHandler = function () {
	    function ElementHandler(app) {
	        _classCallCheck(this, ElementHandler);
	
	        this.app = app;
	
	        this.back = document.querySelector(".back");
	
	        this.view = document.querySelector(".view-container");
	    }
	
	    _createClass(ElementHandler, [{
	        key: "useBackButton",
	        value: function useBackButton() {
	            var _this = this;
	
	            this.back.style.display = "block";
	            return new Promise(function (resolve, reject) {
	
	                _this.back.addEventListener('click', function () {
	                    return resolve();
	                });
	            });
	        }
	    }]);
	
	    return ElementHandler;
	}();
	
	exports.default = ElementHandler;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Benjamin on 19-12-2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	var _Home = __webpack_require__(3);
	
	var _Home2 = _interopRequireDefault(_Home);
	
	var _EditPaymentDistribution = __webpack_require__(5);
	
	var _EditPaymentDistribution2 = _interopRequireDefault(_EditPaymentDistribution);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ViewHandler = function () {
	    function ViewHandler(app) {
	        _classCallCheck(this, ViewHandler);
	
	        this.app = app;
	
	        this.currentView = {
	            remove: function remove() {}
	        };
	    }
	
	    _createClass(ViewHandler, [{
	        key: "setView",
	        value: function setView(markup) {
	            this.app.elements.view.innerHTML = markup;
	        }
	    }, {
	        key: "removeOldView",
	        value: function removeOldView() {
	            this.app.elements.back.style.display = "none";
	            this.currentView.remove();
	        }
	    }, {
	        key: "editPaymentDistribution",
	        value: function editPaymentDistribution() {
	            this.removeOldView();
	            this.currentView = new _EditPaymentDistribution2.default(this.app);
	        }
	    }, {
	        key: "home",
	        value: function home() {
	            this.removeOldView();
	            this.currentView = new _Home2.default(this.app);
	        }
	    }]);
	
	    return ViewHandler;
	}();
	
	exports.default = ViewHandler;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Benjamin on 19-12-2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _Calculator = __webpack_require__(4);
	
	var _Calculator2 = _interopRequireDefault(_Calculator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Home = function () {
	    function Home(app) {
	        _classCallCheck(this, Home);
	
	        this.app = app;
	
	        this.app.viewhandler.setView("<div class=\"home-view\">\n        <div class=\"p15\">\n            <p>Med denne side kan du beregne hvad de individulle g\xE6ster skylder eller har tilgode ved et sammenskudsgilde</p>\n            <p>Som standard betaler et barn det halve af en voksen\n                <button class=\"material-button material-ink material-ripple action\" style=\"margin-left: 10px;\" id=\"ret_mulighedder\">Ret / Tilf\xF8j fordeling</button>\n            </p>\n            <p><b>!!MEGET VIGTIG!! Udbetal ikke differance F\xD8R oplysniger fra ALLE DELTAGER er indtastet</b></p>\n        </div>\n        <div id=\"sidescroll\">\n            <div id=\"sidescroll_inner\" class=\"p15\">\n                <div id=\"labels\"></div>\n                <div id=\"rowholder\"></div></div>\n            </div>\n        </div>\n        <div id=\"more_priceinfomation\" class=\"p15\">\n            <p>Penge brugt i alt: <span id=\"total\">0</span></p>\n            <div id=\"paymentdistributions\"></div>\n        </div>\n        <div class=\"p15\">\n            <button class=\"material-button material-ink material-ripple\" id=\"reset\" style=\"    padding: 7px;\n            background: #d4d4d4;\n    font-size: 0.95em;\n    border-radius: 2px;\">Nulstil</button>\n        </div>\n        <p style=\"color: #666666; margin: 0 15px\">Psst. kan du ikke resultatet kan du rulle til siden i tabellen <br> lommeregner virker til nyt\xE5r</p>\n        \n        <div class=\"calcbutton material-z1\">=</div>\n        \n");
	
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
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = this.app.data.paymentDistribution[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var label = _step.value;
	
	                this.customlabels.push(label.name);
	                this.paymentdistributions.innerHTML += "<p><span class=\"count-of-type\">0</span> " + label.name + " \xE1 <span class=\"price-of-type\">0</span></p>";
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        this.showList();
	        this.calculate();
	        this.addRow();
	    }
	
	    _createClass(Home, [{
	        key: "remove",
	        value: function remove() {}
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            var _this = this;
	
	            this.retTilfoejMulighedder.addEventListener("click", function (_) {
	                return _this.app.viewhandler.editPaymentDistribution();
	            });
	
	            var focusedElement = false;
	
	            $(this.rowholder).on("change", ".material-checkbox", function (_) {
	                _this.calculate(true);
	            });
	            $(this.rowholder).on("blur", ".indskud", function (e) {
	                $(e.target).val($(e.target).val());
	                // _this.calcButton.style.display = "none";
	                _this.calculate();
	            });
	            $(this.rowholder).on("focus", ".indskud", function (e) {
	                _this.calcButton.style.display = "flex";
	                focusedElement = new Date().getTime();
	                $(e.target).attr("data-ref", focusedElement);
	            });
	            this.calcButton.addEventListener("mousedown", function (e) {
	                _Calculator2.default.calculate($("[data-ref=" + focusedElement + "]").val()).then(function (value) {
	                    $("[data-ref=" + focusedElement + "]").val(value);
	                }).catch(function () {});
	            });
	
	            this.view.addEventListener("keyup", function (_) {
	                return _this.keuUp();
	            });
	
	            this.resetButton.addEventListener("click", function (_) {
	                var deletedGuests = _this.app.data.guests.slice(0);
	
	                _this.app.data.guests = [];
	                _this.app.data.saveGuests();
	
	                _this.app.viewhandler.home();
	
	                materialFramework.tools.new_notification({
	                    text: 'Gæsteliste nulstillet', time: 15000, actiontext: 'fortryd', action: function action() {
	                        _this.app.data.guests = deletedGuests;
	                        _this.app.data.saveGuests();
	                        _this.app.viewhandler.home();
	                    }
	                });
	            });
	        }
	    }, {
	        key: "renderLabels",
	        value: function renderLabels() {
	            var labels = "";
	            labels += "<span>Deltager navne</span>";
	            labels += "<span>Indskud</span>";
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = this.app.data.paymentDistribution[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var paymentDistribution = _step2.value;
	
	                    labels += "<span class=\"dynamic\">" + paymentDistribution.name + "</span>";
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            labels += "<span>Skylder / tilgode</span>";
	
	            document.querySelector("#labels").innerHTML = labels;
	        }
	    }, {
	        key: "getColumnsWidth",
	        value: function getColumnsWidth() {
	            var labels = document.querySelectorAll("#labels .dynamic");
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = labels[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var label = _step3.value;
	
	                    this.columnWidths.push(label.offsetWidth + 20);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "keuUp",
	        value: function keuUp() {
	            if (!this.displayedRows[this.displayedRows.length - 1].isEmpty()) {
	                this.addRow();
	            }
	            this.calculate();
	        }
	    }, {
	        key: "showList",
	        value: function showList() {
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = this.app.data.guests[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var participant = _step4.value;
	
	                    var row = new Row(this.customlabels, this.columnWidths, this.app);
	                    row.setInputs(participant);
	
	                    this.displayedRows.push(row);
	                    this.rowholder.appendChild(row.row);
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "addRow",
	        value: function addRow() {
	            var nextRow = new Row(this.customlabels, this.columnWidths, this.app);
	            this.displayedRows.push(nextRow);
	            this.rowholder.appendChild(nextRow.row);
	        }
	    }, {
	        key: "calculate",
	        value: function calculate(onlySave) {
	            var validParticipantFillings = [];
	            var sumContribution = 0;
	            var sumParticipantPoints = 0;
	            var participantCount = this.emptyArray(this.app.data.paymentDistribution.length);
	            this.app.data.guests = [];
	
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = this.displayedRows[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var participant = _step5.value;
	
	                    var input = participant.getInputs();
	                    if (input == false) {
	                        participant.setOutput(false);
	                        continue;
	                    }
	                    var participantPoints = 0;
	                    for (var paymentDistributionIndex = 0; paymentDistributionIndex < input.participants.length; paymentDistributionIndex++) {
	                        participantPoints += this.app.data.paymentDistribution[paymentDistributionIndex].value * input.participants[paymentDistributionIndex];
	                        participantCount[paymentDistributionIndex] += input.participants[paymentDistributionIndex];
	                    }
	                    validParticipantFillings.push({
	                        participant: participant, input: input, participantPoints: participantPoints
	                    });
	                    sumContribution += input.contribution;
	                    sumParticipantPoints += participantPoints;
	
	                    if (input.saveableData.contribution != 0 || input.saveableData.participantName != "" || input.saveableData.participants.length > 0) {
	                        this.app.data.guests.push(input.saveableData);
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	
	            this.app.data.saveGuests();
	
	            if (onlySave === true) {
	                return;
	            }
	
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = validParticipantFillings[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var participantInfo = _step6.value;
	
	                    participantInfo.participant.setOutput((participantInfo.participantPoints / sumParticipantPoints * sumContribution - participantInfo.input.contribution) * -1);
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
	                        _iterator6.return();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	
	            this.total.innerHTML = sumContribution;
	            var round = function round(number) {
	                return Math.round(number * 100) / 100;
	            };
	
	            for (var i = 0; i < participantCount.length; i++) {
	                $(this.paymentdistributions).find("p").eq(i).find(".count-of-type").html(participantCount[i]);
	                $(this.paymentdistributions).find("p").eq(i).find(".price-of-type").html(round(this.app.data.paymentDistribution[i].value / sumParticipantPoints * sumContribution));
	            }
	        }
	    }, {
	        key: "emptyArray",
	        value: function emptyArray(length) {
	            var array = [];
	            while (length > 0) {
	                length--;
	                array.push(0);
	            }
	            return array;
	        }
	    }]);
	
	    return Home;
	}();
	
	exports.default = Home;
	
	var Row = function () {
	    function Row(labels, labelsWidth, app) {
	        _classCallCheck(this, Row);
	
	        this.row = document.createElement("div");
	        this.labels = labels;
	        this.app = app;
	
	        var checkbox = document.createElement("input");
	        checkbox.setAttribute("type", "checkbox");
	        checkbox.className = "material-checkbox";
	        this.row.appendChild(checkbox);
	
	        var participantName = document.createElement("input");
	        participantName.setAttribute("type", "text");
	        participantName.setAttribute("placeholder", "Deltager");
	        this.row.appendChild(participantName);
	
	        var contribution = document.createElement("input");
	        contribution.setAttribute("type", "number");
	        contribution.setAttribute("placeholder", "Indskud ");
	        contribution.setAttribute("min", "0");
	        contribution.className = "indskud";
	
	        this.row.appendChild(contribution);
	
	        for (var i = 0; i < labels.length; i++) {
	            var labelName = labels[i];
	            var labelWidth = labelsWidth[i];
	
	            var inputElement = document.createElement("input");
	            inputElement.setAttribute("type", "number");
	            inputElement.setAttribute("min", "0");
	            inputElement.setAttribute("placeholder", labelName);
	            inputElement.style.width = labelWidth + "px";
	            inputElement.setAttribute("data-id", this.app.data.paymentDistribution[i].id);
	            inputElement.className = "variable";
	
	            this.row.appendChild(inputElement);
	        }
	
	        var status = document.createElement("span");
	        status.style.width = 115;
	        this.row.appendChild(status);
	    }
	
	    _createClass(Row, [{
	        key: "getInputs",
	        value: function getInputs() {
	            var inputs = $(this.row).find("input[type=text],input[type=number]");
	            var participants = [];
	            var participantsWithId = [];
	
	            var contribution = inputs.eq(1).val().replace(",", ".");
	            if (contribution == "") {
	                contribution = 0;
	            }
	            if (parseFloat(contribution) != contribution) {
	                return false;
	            }
	            contribution = parseFloat(contribution);
	
	            for (var i = 0; i < this.labels.length; i++) {
	                var input = inputs.eq(2 + i);
	                var count = input.val().replace(",", ".");
	                if (count == "") {
	                    participants.push(0);
	                    continue;
	                }
	                if (parseFloat(count) != count) {
	                    return false;
	                }
	                participants.push(parseFloat(count));
	
	                participantsWithId.push({
	                    id: parseInt(input.attr("data-id")),
	                    count: parseFloat(count)
	                });
	            }
	
	            return {
	                contribution: contribution,
	                participants: participants,
	                saveableData: {
	                    participants: participantsWithId,
	                    contribution: contribution,
	                    participantName: inputs.eq(0).val(),
	                    checked: $(this.row).find(":checkbox").is(":checked")
	                }
	            };
	        }
	    }, {
	        key: "setOutput",
	        value: function setOutput(value) {
	            var round = function round(number) {
	                return Math.round(number * 100) / 100;
	            };
	
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
	    }, {
	        key: "isEmpty",
	        value: function isEmpty() {
	            var allEmpty = true;
	            $(this.row).find("input[type=text],input[type=number]").each(function () {
	                if ($(this).val() != "") allEmpty = false;
	            });
	            return allEmpty;
	        }
	    }, {
	        key: "setInputs",
	        value: function setInputs(participant) {
	            var inputs = $(this.row).find("input");
	
	            if (participant.checked) {
	                inputs[0].checked = true;
	            }
	            inputs.eq(1).val(participant.participantName);
	            inputs.eq(2).val(participant.contribution);
	
	            var _iteratorNormalCompletion7 = true;
	            var _didIteratorError7 = false;
	            var _iteratorError7 = undefined;
	
	            try {
	                for (var _iterator7 = participant.participants[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                    var participantCount = _step7.value;
	
	                    $(this.row).find("input[data-id=" + participantCount.id + "]").val(participantCount.count);
	                }
	            } catch (err) {
	                _didIteratorError7 = true;
	                _iteratorError7 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
	                        _iterator7.return();
	                    }
	                } finally {
	                    if (_didIteratorError7) {
	                        throw _iteratorError7;
	                    }
	                }
	            }
	        }
	    }]);

	    return Row;
	}();

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Benjamin on 24-12-2016.
	 */
	String.prototype.toDOM = function () {
	    var d = document,
	        i = void 0,
	        a = d.createElement("div"),
	        b = d.createDocumentFragment();
	    a.innerHTML = this;
	    while (i = a.firstChild) {
	        b.appendChild(i);
	    }return b;
	};
	
	var Calculator = function () {
	    function Calculator(defaultValue) {
	        _classCallCheck(this, Calculator);
	
	        this.defaultValue = defaultValue;
	
	        this.value = defaultValue;
	
	        this.result = defaultValue;
	
	        this.onclose = function () {};
	        this.ondone = function () {};
	
	        this.view = this.makeView();
	
	        document.body.appendChild(this.view.toDOM());
	
	        this.calculaterElement = document.querySelector(".calculator");
	
	        this.inputEl = this.calculaterElement.querySelector(".input");
	        this.resultEl = this.calculaterElement.querySelector(".result");
	
	        this.inputEl.innerHTML = this.value;
	        this.resultEl.innerHTML = this.value;
	
	        this.addEventListeners();
	    }
	
	    _createClass(Calculator, [{
	        key: "makeView",
	        value: function makeView() {
	            return "\n            <div class=\"calculator\">\n                <div class=\"top\">\n                    <div class=\"luk material-z1\">Luk og fortryd</div>\n                    <div class=\"input\"></div>\n                    <div class=\"result\"></div>\n                </div>\n                <div class=\"controls\">\n                    <div class=\"numbers\">\n                        <div class=\"number material-ink\" data-nr=\"7\">7</div>\n                        <div class=\"number material-ink\" data-nr=\"8\">8</div>\n                        <div class=\"number material-ink\" data-nr=\"9\">9</div>\n                        <div class=\"clear\"></div>\n                        \n                        <div class=\"number material-ink\" data-nr=\"4\">4</div>\n                        <div class=\"number material-ink\" data-nr=\"5\">5</div>\n                        <div class=\"number material-ink\" data-nr=\"6\">6</div>\n                        <div class=\"clear\"></div>\n                        \n                        <div class=\"number material-ink\" data-nr=\"1\">1</div>\n                        <div class=\"number material-ink\" data-nr=\"2\">2</div>\n                        <div class=\"number material-ink\" data-nr=\"3\">3</div>\n                        <div class=\"clear\"></div>\n                        \n                        <div class=\"number material-ink\" data-nr=\",\">,</div>\n                        <div class=\"number material-ink\" data-nr=\"0\">0</div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"actions\">\n                        <div class=\"calc-action material-ink\" data-action=\"del\">DEL</div>\n                        <div class=\"calc-action material-ink\" data-action=\"+\">+</div>\n                        <div class=\"calc-action material-ink\" data-action=\"-\">-</div>\n                    </div>\n                    <div class=\"ok material-z1 action\">Ok</div>\n                </div>\n            </div>\n        ";
	        }
	    }, {
	        key: "plus",
	        value: function plus() {
	            if (this.value.toString().length > 0) {
	                this.value = this.cleanEnd(this.value);
	                if (this.value.toString().length > 0) {
	                    this.value += "+";
	                }
	            }
	            this.showAndCalc();
	        }
	    }, {
	        key: "minues",
	        value: function minues() {
	            if (this.value.toString().length > 0) {
	                this.value = this.cleanEnd(this.value);
	                if (this.value.toString().length > 0) {
	                    this.value += "-";
	                }
	            }
	            this.showAndCalc();
	        }
	    }, {
	        key: "del",
	        value: function del() {
	            if (this.value.toString().length > 0) {
	                this.value = this.value.toString().substr(0, this.value.length - 1);
	            }
	            this.showAndCalc();
	        }
	    }, {
	        key: "number",
	        value: function number(_number) {
	            if (_number == ",") {
	                if (this.value.toString().length == 0) {
	                    return;
	                }
	                var lastvalue = this.value.toString().substr(this.value.length - 1, 1);
	                if (lastvalue == "," || lastvalue == "+" || lastvalue == "-") {
	                    return;
	                }
	                var numarray = this.value.toString().split(/(\+|-)/g);
	                var lastnr = numarray[numarray.length - 1];
	
	                if (lastnr.indexOf(",") > -1) {
	                    return;
	                }
	            }
	
	            this.value += "" + _number;
	            this.showAndCalc();
	        }
	    }, {
	        key: "showAndCalc",
	        value: function showAndCalc() {
	            this.inputEl.innerHTML = this.value;
	
	            var calcvar = this.value.toString();
	
	            calcvar = calcvar.replace(/,/g, ".");
	
	            if (calcvar.length == 0) {
	                this.result = "";
	                this.resultEl.innerHTML = "";
	            } else {
	                calcvar = this.cleanEnd(calcvar);
	
	                if (calcvar.length > 0) {
	                    try {
	                        var resultInt = eval(calcvar);
	                        var result = resultInt.toString();
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
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            var _this = this;
	
	            var object = this;
	
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
	            this.calculaterElement.querySelector(".luk").addEventListener("click", function () {
	                $(_this.calculaterElement).remove();
	                _this.onclose();
	            });
	            this.calculaterElement.querySelector(".ok").addEventListener("click", function () {
	                $(_this.calculaterElement).remove();
	                _this.ondone(_this.result);
	            });
	        }
	    }, {
	        key: "cleanEnd",
	        value: function cleanEnd(value) {
	            value = value.toString();
	            while (true) {
	                var lastvalue = value.substr(value.length - 1, 1);
	
	                if (lastvalue == "+" || lastvalue == "-" || lastvalue == ",") {
	                    value = value.substr(0, value.length - 1);
	                } else {
	                    break;
	                }
	            }
	            return value;
	        }
	    }], [{
	        key: "calculate",
	        value: function calculate(defaultValue) {
	            var calculator = new Calculator(defaultValue);
	
	            return new Promise(function (succes, fail) {
	                calculator.onclose = function () {
	                    fail();
	                };
	                calculator.ondone = function (value) {
	                    succes(value);
	                };
	            });
	        }
	    }]);
	
	    return Calculator;
	}();
	
	exports.default = Calculator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Benjamin on 19-12-2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _PaymentDistribution = __webpack_require__(6);
	
	var _PaymentDistribution2 = _interopRequireDefault(_PaymentDistribution);
	
	var _DataHandler = __webpack_require__(7);
	
	var _DataHandler2 = _interopRequireDefault(_DataHandler);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EditPaymentDistribution = function () {
	    function EditPaymentDistribution(app) {
	        _classCallCheck(this, EditPaymentDistribution);
	
	        this.app = app;
	
	        this.app.viewhandler.setView("\n        <div class=\"ret-view p15\">            \n            <div class=\"table-labels\"> \n                <div style=\"width: 70%;\">Etikette</div> \n                <div style=\"width: 30%;\">% af en voksen</div> \n            </div>\n            <div class=\"clear\"></div>\n            <div id=\"ret_container\"></div>\n            <p>Hvis du fjerner en mulighed der er deltager p\xE5, bliver deltageren flyttet over i voksen kategorien</p>\n            <button class=\"material-button material-ink material-ripple action\" style=\"margin-top: 10px;\" id=\"ret_gem\">Gem</button>\n        \n        <br>\n            <button class=\"material-button material-ink material-ripple\" id=\"reset\" style=\"    padding: 7px;\n            background: #d4d4d4;\n    font-size: 0.95em;\n    border-radius: 2px; margin-top: 30px;\">Nulstil</button>\n    \n        </div>");
	
	        this.view = document.querySelector(".ret-view");
	        this.resetButton = document.querySelector("#reset");
	
	        this.ret_container = document.querySelector("#ret_container");
	
	        this.addEventListeners();
	
	        this.showList();
	        this.initListExpander();
	    }
	
	    _createClass(EditPaymentDistribution, [{
	        key: "remove",
	        value: function remove() {}
	    }, {
	        key: "addEventListeners",
	        value: function addEventListeners() {
	            var _this = this;
	
	            this.view.addEventListener("keyup", function (_) {
	                return _this.keuUp();
	            });
	
	            document.querySelector("#ret_gem").addEventListener('click', function (_) {
	                return _this.gem();
	            });
	
	            this.app.elements.useBackButton().then(function (_) {
	                return _this.goBack();
	            });
	
	            this.resetButton.addEventListener("click", function (_) {
	                var deletedPaymentDistribution = JSON.parse(JSON.stringify(_this.app.data.paymentDistribution));
	                var deletedGuests = JSON.parse(JSON.stringify(_this.app.data.guests));
	
	                _this.app.data.standardPaymentDistributions();
	                _this.app.data.savePaymentDistributionLines();
	                _this.app.data.updateRemovedPaymentDistributionOptions();
	
	                _this.app.viewhandler.editPaymentDistribution();
	
	                materialFramework.tools.new_notification({ text: 'Betalings fordeling nulstillet', time: 15000, actiontext: 'fortryd', action: function action() {
	                        _this.app.data.paymentDistribution = [];
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;
	
	                        try {
	                            for (var _iterator = deletedPaymentDistribution[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var paymentDistribution = _step.value;
	
	                                _this.app.data.paymentDistribution.push(new _PaymentDistribution2.default(paymentDistribution.name, paymentDistribution.value, paymentDistribution.editable, paymentDistribution.id));
	                            }
	                        } catch (err) {
	                            _didIteratorError = true;
	                            _iteratorError = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion && _iterator.return) {
	                                    _iterator.return();
	                                }
	                            } finally {
	                                if (_didIteratorError) {
	                                    throw _iteratorError;
	                                }
	                            }
	                        }
	
	                        _this.app.data.guests = deletedGuests;
	
	                        _this.app.data.savePaymentDistributionLines();
	                        _this.app.data.saveGuests();
	
	                        _this.app.viewhandler.editPaymentDistribution();
	                    } });
	            });
	        }
	    }, {
	        key: "goBack",
	        value: function goBack() {
	            this.app.viewhandler.home();
	        }
	    }, {
	        key: "parseInputs",
	        value: function parseInputs() {
	            var lines = this.ret_container.querySelectorAll(".dynline"),
	                errors = [],
	                paymentDistributionLines = [];
	
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;
	
	            try {
	                for (var _iterator2 = lines[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var line = _step2.value;
	
	                    var label = line.querySelector('[type="text"]').value,
	                        value = line.querySelector('[type="number"]').value;
	                    var id = parseInt(line.getAttribute("data-id"));
	
	                    if (label == "" && value == "") {
	                        continue;
	                    }
	                    if (label == "") {
	                        errors.push(value + " har ikke f\xE5et en etikette tildelt");
	                        continue;
	                    }
	                    if (value == "") {
	                        errors.push(label + " har ikke f\xE5et en procent andel tildelt");
	                        continue;
	                    }
	
	                    if (value != parseInt(value)) {
	                        errors.push(label + "'s procentandel er ikke et heltal");
	                        continue;
	                    }
	                    value = parseInt(value);
	                    if (value < 0) {
	                        errors.push(label + "'s procentandel er ikke positiv");
	                        continue;
	                    }
	                    paymentDistributionLines.push(new _PaymentDistribution2.default(label, value, true, id));
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }
	
	            return {
	                errors: errors, paymentDistributionLines: paymentDistributionLines
	            };
	        }
	    }, {
	        key: "gem",
	        value: function gem() {
	            var _this2 = this;
	
	            var _parseInputs = this.parseInputs(),
	                errors = _parseInputs.errors,
	                paymentDistributionLines = _parseInputs.paymentDistributionLines;
	
	            if (errors.length > 0) {
	                materialFramework.tools.confirm("Formular udfyldt forkert", errors.join("<br>"), "Prøv igen", "Fortryd ændringer", function () {}, function () {
	                    _this2.goBack();
	                });
	
	                return;
	            }
	            var newPaymentDistributionLines = [];
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = this.app.data.paymentDistribution[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var oldPaymentDistributionLine = _step3.value;
	
	                    if (!oldPaymentDistributionLine.editable) newPaymentDistributionLines.push(oldPaymentDistributionLine);
	                }
	            } catch (err) {
	                _didIteratorError3 = true;
	                _iteratorError3 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                        _iterator3.return();
	                    }
	                } finally {
	                    if (_didIteratorError3) {
	                        throw _iteratorError3;
	                    }
	                }
	            }
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = paymentDistributionLines[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var paymentDistributionLine = _step4.value;
	
	                    newPaymentDistributionLines.push(paymentDistributionLine);
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            this.app.data.paymentDistribution = newPaymentDistributionLines;
	            this.app.data.savePaymentDistributionLines();
	            this.app.data.updateRemovedPaymentDistributionOptions();
	            this.goBack();
	        }
	    }, {
	        key: "showList",
	        value: function showList() {
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = this.app.data.paymentDistribution[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var option = _step5.value;
	
	                    if (option.editable) {
	
	                        this.ret_container.innerHTML += "\n                <div class=\"dynline\" data-id=\"" + option.id + "\">\n                    <div style=\"width: 70%;\"><input type=\"text\" value=\"" + option.name + "\"></div> \n                    <div style=\"width: 30%;\"><input type=\"number\" min=\"1\" value=\"" + option.value + "\"></div> \n                \n                </div>\n                <div class=\"clear\"></div>";
	                    } else {
	
	                        this.ret_container.innerHTML += "\n                <div data-id=\"" + option.id + "\">\n                    <div style=\"width: 70%;\">" + option.name + "</div> \n                    <div style=\"width: 30%;\">" + option.value + "</div> \n                \n                </div>\n                <div class=\"clear\"></div>";
	                    }
	                }
	            } catch (err) {
	                _didIteratorError5 = true;
	                _iteratorError5 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                        _iterator5.return();
	                    }
	                } finally {
	                    if (_didIteratorError5) {
	                        throw _iteratorError5;
	                    }
	                }
	            }
	        }
	    }, {
	        key: "addEmptyLine",
	        value: function addEmptyLine() {
	            var line = document.createElement("div");
	            line.className = "dynline";
	            line.setAttribute("data-id", _DataHandler2.default.generatePaymentDistributionId());
	            var label = document.createElement("div");
	            label.style.width = "70%";
	            var labelInput = document.createElement("input");
	            labelInput.setAttribute("type", "text");
	            label.appendChild(labelInput);
	            line.appendChild(label);
	
	            var value = document.createElement("div");
	            value.style.width = "30%";
	            var valueInput = document.createElement("input");
	            valueInput.setAttribute("type", "number");
	            valueInput.setAttribute("mim", "1");
	            value.appendChild(valueInput);
	            line.appendChild(value);
	
	            var clear = document.createElement("div");
	            clear.className = "clear";
	
	            this.ret_container.appendChild(line);
	            this.ret_container.appendChild(clear);
	        }
	    }, {
	        key: "initListExpander",
	        value: function initListExpander() {
	            this.addEmptyLine();
	        }
	    }, {
	        key: "keuUp",
	        value: function keuUp() {
	            var inputs = this.ret_container.querySelectorAll("input");
	
	            if (inputs[inputs.length - 1].value != "" && inputs[inputs.length - 2].value != "") {
	                this.addEmptyLine();
	            }
	        }
	    }]);
	
	    return EditPaymentDistribution;
	}();
	
	exports.default = EditPaymentDistribution;
	;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Benjamin on 20-12-2016.
	 */
	var PaymentDistribution = function PaymentDistribution(name, value, editable, id) {
	    _classCallCheck(this, PaymentDistribution);
	
	    this.name = name;
	    this.value = value;
	    this.editable = editable;
	    this.id = id;
	};
	
	exports.default = PaymentDistribution;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Benjamin on 20-12-2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _PaymentDistribution = __webpack_require__(6);
	
	var _PaymentDistribution2 = _interopRequireDefault(_PaymentDistribution);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DataHandler = function () {
	    function DataHandler() {
	        _classCallCheck(this, DataHandler);
	
	        this.paymentDistribution = [];
	
	        this.guests = [];
	
	        try {
	            var storedData = localStorage.getItem("paymentDistribution");
	            var storedObject = JSON.parse(storedData);
	            if (storedObject == null) {
	                throw new Exception();
	            }
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = storedObject[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var paymentDistribution = _step.value;
	
	                    this.paymentDistribution.push(new _PaymentDistribution2.default(paymentDistribution.name, paymentDistribution.value, paymentDistribution.editable, paymentDistribution.id));
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator.return) {
	                        _iterator.return();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	        } catch (e) {
	            this.standardPaymentDistributions();
	        }
	
	        try {
	            var _storedData = localStorage.getItem("guests");
	            var _storedObject = JSON.parse(_storedData);
	            if (_storedObject == null) {
	                throw new Exception();
	            }
	            this.guests = _storedObject;
	        } catch (e) {}
	    }
	
	    _createClass(DataHandler, [{
	        key: "standardPaymentDistributions",
	        value: function standardPaymentDistributions() {
	            this.paymentDistribution = [new _PaymentDistribution2.default("Voksen", 100, false, 0), new _PaymentDistribution2.default("Barn", 50, true, 1)];
	        }
	    }, {
	        key: "savePaymentDistributionLines",
	        value: function savePaymentDistributionLines() {
	            try {
	                localStorage.setItem("paymentDistribution", JSON.stringify(this.paymentDistribution));
	            } catch (e) {}
	        }
	    }, {
	        key: "saveGuests",
	        value: function saveGuests() {
	            try {
	                localStorage.setItem("guests", JSON.stringify(this.guests));
	            } catch (e) {}
	        }
	    }, {
	        key: "updateRemovedPaymentDistributionOptions",
	        value: function updateRemovedPaymentDistributionOptions() {
	            var _this = this;
	
	            var validPaymentDistributionId = function validPaymentDistributionId(id) {
	                var _iteratorNormalCompletion2 = true;
	                var _didIteratorError2 = false;
	                var _iteratorError2 = undefined;
	
	                try {
	                    for (var _iterator2 = _this.paymentDistribution[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                        var dist = _step2.value;
	
	                        if (dist.id == id) {
	                            return true;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError2 = true;
	                    _iteratorError2 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                            _iterator2.return();
	                        }
	                    } finally {
	                        if (_didIteratorError2) {
	                            throw _iteratorError2;
	                        }
	                    }
	                }
	
	                return false;
	            };
	            var hasAdultParticipantGroup = function hasAdultParticipantGroup(groups) {
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;
	
	                try {
	                    for (var _iterator3 = groups[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var group = _step3.value;
	
	                        if (group.id == 0) {
	                            return true;
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError3 = true;
	                    _iteratorError3 = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	                            _iterator3.return();
	                        }
	                    } finally {
	                        if (_didIteratorError3) {
	                            throw _iteratorError3;
	                        }
	                    }
	                }
	
	                return false;
	            };
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = this.guests[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var guest = _step4.value;
	
	                    var addToAdult = 0,
	                        removeIds = [];
	
	                    var _iteratorNormalCompletion5 = true;
	                    var _didIteratorError5 = false;
	                    var _iteratorError5 = undefined;
	
	                    try {
	                        for (var _iterator5 = guest.participants[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                            var participantOption = _step5.value;
	
	                            if (!validPaymentDistributionId(participantOption.id)) {
	                                addToAdult += participantOption.count;
	                                removeIds.push(participantOption.id);
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError5 = true;
	                        _iteratorError5 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion5 && _iterator5.return) {
	                                _iterator5.return();
	                            }
	                        } finally {
	                            if (_didIteratorError5) {
	                                throw _iteratorError5;
	                            }
	                        }
	                    }
	
	                    if (addToAdult != 0) {
	
	                        if (hasAdultParticipantGroup(guest.participants)) {
	                            guest.participants[0].count += addToAdult;
	                        } else {
	                            guest.participants.unshift({
	                                id: 0,
	                                count: addToAdult
	                            });
	                        }
	                    }
	
	                    for (var i = guest.participants.length - 1; i >= 0; i--) {
	                        if (removeIds.indexOf(guest.participants[i].id) != -1) {
	                            guest.participants.splice(i, 1);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
	                        _iterator4.return();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            this.saveGuests();
	        }
	    }], [{
	        key: "generatePaymentDistributionId",
	        value: function generatePaymentDistributionId() {
	            return new Date().getTime();
	        }
	    }]);
	
	    return DataHandler;
	}();
	
	exports.default = DataHandler;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
