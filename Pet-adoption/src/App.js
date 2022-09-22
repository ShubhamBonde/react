import { StrictMode } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";
// global React and ReactDOM

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", { id: "brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Labrador Retriever",
//     }),
//     React.createElement(Pet, {
//       name: "Billy",
//       animal: "Rat",
//       breed: "Hamsters",
//     }),
//     React.createElement(Pet, {
//       name: "Ted",
//       animal: "Snake",
//       breed: "Python snake",
//     })
//   );
// };

const App = () => {
  // <StrictMode> strictMode gives you additional warnings when using legacy and soon to be depricated
  // code.
  return (
    <StrictMode>
      <BrowserRouter>
        <header>
          <Link to="/" className="header">
            Adopt Me!
          </Link>
        </header>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
