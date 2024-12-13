function ShowItem(props) {
    return (
        <div className="show-item">
            <img
                className="show-item_image"
                src={props.image}
                alt={props.name}
                style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h2 className="show-item_title">{props.name}</h2>
            <div className="show-item_type">Type: {props.type}</div>
            <div className="show-item_language">Language: {props.language}</div>
            <div className="show-item_genres">Genres: {props.genres.join(', ')}</div>
            <div className="show-item_date">Premiered: {props.premiered}</div>
            <a className="show-item_link" href={props.url} target="_blank" rel="noreferrer">More Info</a>
        </div>
    );
}

export default ShowItem;
