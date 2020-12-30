export class Invoice {
    // works only when we have specified access modifiers
    constructor(
        readonly client: string,
        private details: string,
        readonly amount: number
    ) { }

    format = () => `${this.client} owes £${this.amount} for ${this.details}`;
}

// private client: string;
// private details: string;
// private amount: number;

// constructor(client: string, details: string, amount: number) {
//     this.client = client;
//     this.details = details;
//     this.amount = amount;
// }