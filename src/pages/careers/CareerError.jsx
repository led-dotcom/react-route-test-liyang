import { useRouteError, Link } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Error</h2>
      <p>{error.message}</p>
      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default CareerError;
