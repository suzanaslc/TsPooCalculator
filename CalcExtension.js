"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcExtension = void 0;
var CalcExtension = /** @class */ (function () {
    function CalcExtension() {
        this.value = 0;
    }
    CalcExtension.prototype.calcLogic = function (first, operation, last) {
        switch (operation) {
            case "+":
                return this.sum(first, last);
            case "-":
                return this.substract(first, last);
            case "x":
                return this.multiply(first, last);
            case "/":
                return this.divide(first, last);
            default:
                break;
        }
        return 0;
    };
    CalcExtension.prototype.calculate = function (first, operation, last) {
        var result = this.calcLogic(first, operation, last);
        this.value = result;
    };
    CalcExtension.prototype.sum = function (first, last) {
        return first + last;
    };
    CalcExtension.prototype.substract = function (first, last) {
        return first - last;
    };
    CalcExtension.prototype.multiply = function (first, last) {
        return first * last;
    };
    CalcExtension.prototype.divide = function (first, last) {
        return first / last;
    };
    CalcExtension.prototype.showValue = function () {
        console.log(this.value);
    };
    return CalcExtension;
}());
exports.CalcExtension = CalcExtension;
