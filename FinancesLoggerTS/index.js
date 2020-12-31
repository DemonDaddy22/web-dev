"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export const __esModule = true;
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var values = [toFrom.value, details.value, amount.valueAsNumber];
    var doc;
    doc = type.value === 'invoice' ? new (Invoice.bind.apply(Invoice, __spreadArrays([void 0], values)))() : new (Payment.bind.apply(Payment, __spreadArrays([void 0], values)))();
    list.render(doc, type.value, 'end');
});
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// interface Person {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const person: Person = {
//     name: 'Mario',
//     age: 25,
//     speak: (text: string): void => console.log(text),
//     spend: (amount: number): number => {
//         console.log(amount);
//         return amount;
//     }
// };
// console.log(person);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Mario', 'Repairing', 250);
// docTwo = new Payment('Luigi', 'Maintenance', 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// docs.forEach(doc => console.log(doc.format()));
// const invoiceOne = new Invoice('Mario', 'Work on Mario website', 250);
// const invoiceTwo = new Invoice('Luigi', 'Work on Luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
// invoices.forEach(invoice => console.log(invoice.format()));
