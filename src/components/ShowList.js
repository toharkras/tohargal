import { useState, useEffect } from 'react';
import ShowItem from './ShowItem';

function ShowList() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const response = await fetch('https://api.tvmaze.com/shows');
                const data = await response.json();
                setShows(data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        };

        fetchShows();
    }, []);

    return (
        <div>

            {shows.map((show) => (
                <ShowItem
                    key={show.id}
                    name={show.name}
                    type={show.type}
                    language={show.language}
                    genres={show.genres}
                    url={show.url}
                    image={show.image ? show.image.medium : ''}
                    premiered={show.premiered}
                />
            ))}
        </div>
    );
}

export default ShowList;
