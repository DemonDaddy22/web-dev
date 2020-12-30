"use strict";
export const __esModule = true;
var Payment = /** @class */ (function () {
    function Payment(recipient, details, amount) {
        var _this = this;
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        this.format = function () { return _this.recipient + " is owed \u00A3" + _this.amount + " for " + _this.details; };
    }
    return Payment;
}());
const _Payment = Payment;
export { _Payment as Payment };
