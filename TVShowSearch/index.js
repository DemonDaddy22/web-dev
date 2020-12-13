const form = document.querySelector('#searchForm');
const shows = document.querySelector('.shows');

form.addEventListener('submit', async e => {
    e.preventDefault();

    const query = form.elements.search.value;
    const fetchedShows = await fetchShows(query) || [];
    console.log(fetchedShows);

    shows.innerHTML = '';
    fetchedShows.forEach(show => shows.append(getShowContent(show)));
});

const fetchShows = async query => {
    if (isEmptyString(query)) return null;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${query}`);
    return res.data;
}

const getShowContent = show => {
    const showContainer = document.createElement('div');
    showContainer.classList.add('showContainer');

    const col1 = document.createElement('div');
    col1.classList.add('col-1');
    
    const image = document.createElement('img');
    image.src = show.show.image.original || '';
    image.alt = show.show.name || 'show-posters';
    image.classList.add('poster');

    col1.append(image);
    showContainer.append(col1);

    const col2 = document.createElement('div');
    col2.classList.add('col-2');
    
    const h2 = document.createElement('h2');
    h2.classList.add('showTitle');
    h2.innerText = show.show.name || '';

    const genres = document.createElement('div');
    genres.classList.add('genres');
    let genresText = '';
    if (show.show.genres) show.show.genres.forEach((genre, index) => {
        genresText += genre;
        if (index !== show.show.genres.length - 1) genresText += ', ';
    });
    genres.innerText = genresText;

    const ratings = document.createElement('div');
    ratings.classList.add('rating');
    ratings.innerText = show.show.rating.average ? `${show.show.rating.average} ⭐` : '';

    const premiered = document.createElement('div');
    premiered.classList.add('premiered');
    premiered.innerHTML = show.show.premiered || '';

    const description = document.createElement('div');
    description.classList.add('description');
    description.innerHTML = show.show.summary || '';

    col2.append(h2);
    col2.append(genres);
    col2.append(ratings);
    col2.append(premiered);
    col2.append(description);
    showContainer.append(col2);

    return showContainer;
}

const isEmptyString = data => typeof data !== 'string' || !data || data.length === 0;