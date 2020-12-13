const form = document.querySelector('#searchForm');
const shows = document.querySelector('.shows');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = form.elements.search.value;
    const fetchedShows = await fetchShows(query) || [];
    console.log(fetchedShows);

    shows.innerHTML = '';
    fetchedShows.forEach(show => {
        // TODO - getShowContent for each show
        shows.append(getShowContent(show));
    });
});

const fetchShows = async query => {
    if (isEmptyString(query)) return null;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    return res.data;
}

const getShowContent = show => {
    const showContainer = document.createElement('div');
    showContainer.classList.add('showContainer');

    // TODO - add column for image
    const col1 = document.createElement('div');
    col1.classList.add('col-1');
    const image = document.createElement('img');
    image.src = show.show.image.original || '';
    image.alt = show.show.name || 'show-posters';
    image.classList.add('poster');
    col1.append(image);
    showContainer.append(col1);

    // TODO - add column for content

    return showContainer;
}

const isEmptyString = data => typeof data !== 'string' || !data || data.length === 0;