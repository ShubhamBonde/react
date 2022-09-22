// import { useParams } from "react-router-dom";

// const Details = () => {
//   const { id } = useParams();
//   return <h1>Details will be loaded soon</h1>;
// };

// export default Details;

import { Component } from "react";
import {useParams} from "react-router-dom";

class Details extends Component {
    constructor(props) {
        super(props); // Give the props to parent class i.e. Component
        this.state = {loading:true}
    }
    render() {
        if (this.state.loading) {
            return <h2>loading...</h2>
        }

        const {name, animal, breed, state, city, description, id} = this.state;

        return (
            <div className="details">
                <div>
                    <h1>{name}</h1>
                    <h2>{animal}-{breed}-{city}, {state}</h2>
                </div>
                <button>Adopt {name}</button>
                <p>{description}</p>

            </div>
        )
    }
}