import { useState } from "react";
const ANIMALS = ["bird", "dog", "cat", "rabbit", "reptile"];
const BREEDS = [];

function SearchParams() {
  // Search for pets up for adoption in specific location.
  const [location, setLocation] = useState("");
  // FYI only breaking down above structure; const locationHook = useState("");
  // const location = locationHook[0]
  // const setLocation = locationHook[1]
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
            value={animal}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={BREEDS.length === 0}
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
          >
            <option />
            {BREEDS.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SearchParams;
