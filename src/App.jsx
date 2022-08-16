import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./Components/CardResident";
import LocationInfo from "./Components/LocationInfo";

function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let numberLocation;
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocation = searchInput;
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [searchInput]);

  //Busqueda por input

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchInput(e.target.search.value);
  };

  console.log(searchInput);

  return (
    <div className="App">
      <div className="img-header"></div>
      <h1></h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          id="search"
          placeholder="Search World 1 to 126"
          type="text"
          className="input"
          required=""
        />
        <button className="btn">Search</button>
      </form>
      <LocationInfo location={location} />
      <div>
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
