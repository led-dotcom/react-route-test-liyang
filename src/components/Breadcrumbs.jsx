import styles from "./Breadcrumbs.module.css";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  //   console.log("location from useLocation", location);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink += `/${crumb}`;

      return (
        <div className={styles.crumb} key={index}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className={styles.breadcrumbs}>{crumbs}</div>;
};

export default Breadcrumbs;
