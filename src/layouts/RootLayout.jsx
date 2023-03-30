import styles from "./RootLayout.module.css";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <h2 className={styles.nav}>Nav</h2>

        <div className={styles.navButtons}>
          <NavLink to="/">
            <Button variant="outlined" color="error">
              Home
            </Button>
          </NavLink>
          <NavLink to="/page-1">
            <Button variant="outlined" color="success">
              Page One
            </Button>
          </NavLink>
          <NavLink to="/page-2">
            <Button variant="outlined">Page Two</Button>
          </NavLink>
          <NavLink to="/page-3">
            <Button variant="outlined">Page Three</Button>
          </NavLink>
        </div>
      </div>

      <Outlet />
    </div>
  );
};

export default RootLayout;
