import React from 'react';

export default class BookList extends React.Component {

    render = () => <div className='book-list'>
        <ul>
            <li>The Way of Kings</li>
            <li>The Name of the Wind</li>
            <li>The Final Empire</li>
        </ul>
    </div>;
}