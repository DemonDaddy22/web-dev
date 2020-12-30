"use strict";
export const __esModule = true;
var ListTemplate = /** @class */ (function () {
    function ListTemplate(container) {
        var _this = this;
        this.container = container;
        this.render = function (item, heading, position) {
            var li = document.createElement('li');
            var h4 = document.createElement('h4');
            var p = document.createElement('p');
            h4.innerText = heading;
            p.innerText = item.format();
            li.append(h4);
            li.append(p);
            position === 'start' ? _this.container.prepend(li) : _this.container.append(li);
        };
    }
    return ListTemplate;
}());
const _ListTemplate = ListTemplate;
export { _ListTemplate as ListTemplate };
