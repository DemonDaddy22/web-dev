// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

class Invoice {
    // private client: string;
    // private details: string;
    // private amount: number;

    // constructor(client: string, details: string, amount: number) {
    //     this.client = client;
    //     this.details = details;
    //     this.amount = amount;
    // }

    // works only when we have specified access modifiers
    constructor(
        readonly client: string,
        private details: string,
        readonly amount: number
    ) { }

    format = () => `${this.client} owes £${this.amount} for ${this.details}`;
}

const invoiceOne = new Invoice('Mario', 'Work on Mario website', 250);
const invoiceTwo = new Invoice('Luigi', 'Work on Luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach(invoice => console.log(invoice.format()));

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
});