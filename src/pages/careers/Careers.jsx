import styles from "./Careers.module.css";
import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();

  return (
    <div className={styles.careers}>
      {careers ? (
        careers.map((career) => (
          <Link to={`/page-2/${career.id}`} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        ))
      ) : (
        <h3>Data not found.</h3>
      )}
    </div>
  );
};

export default Careers;

export const careerLoader = async () => {
  const res = await fetch("http://localhost:8000/careers");

  if (!res.ok) {
    throw Error("Could not fetch careers data.");
  }

  return res.json();
};
