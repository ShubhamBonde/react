/* import React from "react";
    you won't need it because jsx will internally convert 
    jsx into React.createElement() 
    React.createElement() is an API
*/
const Pet = (props) => {
  return    (
    // This is JSX
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};


// this translates into

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1",{}, props.name),
//         React.createElement("h2",{}, props.animal),
//         React.createElement("h2",{}, props.breed)
//     ]);
// };

export default Pet;
