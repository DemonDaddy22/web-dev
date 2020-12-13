const form = document.querySelector('#searchForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const query = form.elements.query.value;
    console.log(query);
});