import { render } from "react-dom";
import SearchParams from "./SearchParams";
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
  
  return (
    <div id="my-app">
      <h1>Adopt Me!</h1>
      <SearchParams/>
    </div>
  );
};
// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
