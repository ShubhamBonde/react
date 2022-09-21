import { useState } from "react";
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  
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
          {location}
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
