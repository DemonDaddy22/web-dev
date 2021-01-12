"use strict";

var handleClick = function handleClick(button, index) {
  var img = images[index];
  var imgClone = document.createElement('img');
  var offsets = img.getBoundingClientRect();
  imgClone.src = img.src;
  imgClone.classList.add('zoom');
  imgClone.style.top = "".concat(offsets.top + offsets.height / 2, "px");
  imgClone.style.left = "".concat(offsets.left, "px");
  document.body.appendChild(imgClone);
  setTimeout(function () {
    return document.body.removeChild(imgClone);
  }, 1500);
};

var buttons = document.querySelectorAll('button');
var images = document.querySelectorAll('li img');
buttons.forEach(function (button, index) {
  return button.addEventListener('click', function () {
    return handleClick(button, index);
  });
});