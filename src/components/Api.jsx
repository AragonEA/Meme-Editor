import React, { useState, useEffect } from 'react';
import { handleClick } from './Selector';

const Api = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(data => data.json())
            .then(json => setTemplates(json.data.memes))
    }, []);

    const memeItems = templates.map(meme =>
        <li onClick={handleClick} data-img-src={meme.url} className='templates-li' key={meme.id}>
            {meme.name}
            <img
                data-img-src={meme.url}
                className='meme-template'
                src={meme.url}
                alt={meme.name}
            />
        </li>
    );
    return <ul id='templates-grid'>{memeItems}</ul>;
}

export default Api;