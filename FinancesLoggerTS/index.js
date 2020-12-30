"use strict";
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
    var doc;
    doc = type.value === 'invoice' ?
        new Invoice(toFrom.value, details.value, amount.valueAsNumber) :
        new Payment(toFrom.value, details.value, amount.valueAsNumber);
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
