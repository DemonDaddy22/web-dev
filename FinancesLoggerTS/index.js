"use strict";
export const __esModule = true;
import { Invoice } from "./classes/Invoice.js";
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
