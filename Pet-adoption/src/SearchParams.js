import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const[breed, setBreed] = useState("");
  const breeds = ["poodle", "pug", "labrador"]

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            type="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal-dropdown">Animal</label>
        <select
          id="animal-dropdown"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
          onBlur={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
        </select>
        

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          value={breed}
          onChange={(e) => {
            // setAnimal(e.target.value);
            setBreed(e.target.value);
          }}
          onBlur={(e) => {
            // setAnimal(e.target.value);
            setBreed(e.target.value);
          }}
        >
          <option />
          {breeds.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
