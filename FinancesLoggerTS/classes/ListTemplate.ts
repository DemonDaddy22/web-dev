import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate {
    constructor(private container: HTMLUListElement){}

    render = (item: HasFormatter, heading: string, position: 'start' | 'end') => {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        
        h4.innerText = heading;
        p.innerText = item.format();

        li.append(h4);
        li.append(p);

        position === 'start' ? this.container.prepend(li) : this.container.append(li);
    }
}