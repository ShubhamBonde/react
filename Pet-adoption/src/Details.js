import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  return <h1>Details will be loaded soon</h1>;
};

export default Details;
