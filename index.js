"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcExtension_1 = require("./CalcExtension");
var calc = new CalcExtension_1.CalcExtension();
calc.calculate(1, "+", 2);
calc.showValue();
calc.calculate(10, "-", 5);
calc.showValue();
calc.calculate(2, "x", 5);
calc.showValue();
calc.calculate(10, "/", 5);
calc.showValue();
