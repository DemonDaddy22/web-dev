"use strict";
export const __esModule = true;
var Invoice = /** @class */ (function () {
    // works only when we have specified access modifiers
    class Invoice {
        constructor(client, details, amount) {
            var _this = this;
            this.client = client;
            this.details = details;
            this.amount = amount;
            this.format = function () { return _this.client + " owes \u00A3" + _this.amount + " for " + _this.details; };
        }
    }
    return Invoice;
}());
const _Invoice = Invoice;
export { _Invoice as Invoice };
// private client: string;
// private details: string;
// private amount: number;
// constructor(client: string, details: string, amount: number) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
// }
