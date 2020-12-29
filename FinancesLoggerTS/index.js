// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var type = document.querySelector('#type');
var toFrom = document.querySelector('#toFrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
