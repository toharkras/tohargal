import { useState } from 'react';

function ShowForm(props) {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [language, setLanguage] = useState('');
    const [genres, setGenres] = useState('');
    const [url, setUrl] = useState('');

    const nameHandler = (event) => {
        setName(event.target.value);
    };

    const typeHandler = (event) => {
        setType(event.target.value);
    };

    const languageHandler = (event) => {
        setLanguage(event.target.value);
    };

    const genresHandler = (event) => {
        setGenres(event.target.value);
    };

    const urlHandler = (event) => {
        setUrl(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const newShow = {
            name,
            type,
            language,
            genres: genres.split(',').map((genre) => genre.trim()),
            url,
        };

        props.onAddShow(newShow);

        setName('');
        setType('');
        setLanguage('');
        setGenres('');
        setUrl('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={nameHandler} placeholder="Enter Show Name" />
            </div>
            <div>
                <label>Type</label>
                <input type="text" value={type} onChange={typeHandler} placeholder="Enter Show Type" />
            </div>
            <div>
                <label>Language</label>
                <input type="text" value={language} onChange={languageHandler} placeholder="Enter Language" />
            </div>
            <div>
                <label>Genres (comma separated)</label>
                <input type="text" value={genres} onChange={genresHandler} placeholder="Enter Genres" />
            </div>
            <div>
                <label>URL</label>
                <input type="text" value={url} onChange={urlHandler} placeholder="Enter Show URL" />
            </div>
            <button type="submit">Add Show</button>
        </form>
    );
}

export default ShowForm;
