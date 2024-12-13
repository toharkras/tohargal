import { useEffect, useState } from "react";
import ShowList from "./components/ShowList";

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error("Failed to fetch shows:", error);
      }
    };

    fetchShows();
  }, []);

  return (
      <div>
        <header className="App-header">
          <h1>TV SHOWS</h1>
        </header>
        <div className="container">
          <ShowList shows={shows} />
        </div>
      </div>
  );
}

export default App;
