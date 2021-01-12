const handleClick = (button, index) => {
    const img = images[index];
    const imgClone = document.createElement('img');
    const offsets = img.getBoundingClientRect();

    imgClone.src = img.src;
    imgClone.classList.add('zoom');
    imgClone.style.top = `${offsets.top + offsets.height/2}px`;
    imgClone.style.left = `${offsets.left}px`;

    document.body.appendChild(imgClone);

    setTimeout(() => document.body.removeChild(imgClone), 1500);
}

const buttons = document.querySelectorAll('button');
const images = document.querySelectorAll('li img');
buttons.forEach((button, index) => button.addEventListener('click', () => handleClick(button, index)));