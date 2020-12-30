// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
var Invoice = /** @class */ (function () {
    // private client: string;
    // private details: string;
    // private amount: number;
    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // }
    // works only when we have specified access modifiers
    function Invoice(client, details, amount) {
        var _this = this;
        this.client = client;
        this.details = details;
        this.amount = amount;
        this.format = function () { return _this.client + " owes \u00A3" + _this.amount + " for " + _this.details; };
    }
    return Invoice;
}());
var invoiceOne = new Invoice('Mario', 'Work on Mario website', 250);
var invoiceTwo = new Invoice('Luigi', 'Work on Luigi website', 300);
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(function (invoice) { return console.log(invoice.format()); });
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
