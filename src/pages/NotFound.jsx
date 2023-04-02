import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h2>Page not found.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia ad animi
        ut eligendi vero unde in illum aliquam similique. Autem blanditiis, quae
        quo labore quis itaque repudiandae nemo voluptatem laborum.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;
