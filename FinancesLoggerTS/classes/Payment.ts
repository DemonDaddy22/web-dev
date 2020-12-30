import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        readonly amount: number
    ) { }

    format = () => `${this.recipient} is owed £${this.amount} for ${this.details}`;
}