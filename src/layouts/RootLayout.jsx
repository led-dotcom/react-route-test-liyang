import styles from "./RootLayout.module.css";
import Button from "@mui/material/Button";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const RootLayout = () => {
  // // when component mounts, apply the defined functions
  // useEffect(() => {
  //   // active navlink indicators style
  //   const activeNavLink = document.querySelector(".active");
  //   activeNavLink.style.background = "#0e1d47";
  //   activeNavLink.style["border-radius"] = "5px";
  // });

  return (
    <div>
      <div className={styles.navbar}>
        <h2 className={styles.nav}>Nav Bar</h2>

        <div className={styles.navButtons}>
          <NavLink to="/">
            <Button variant="outlined" color="warning">
              Home
            </Button>
          </NavLink>
          <NavLink to="/page-1">
            <Button variant="outlined" color="warning">
              Page 1
            </Button>
          </NavLink>
          <NavLink to="/page-2">
            <Button variant="outlined" color="warning">
              Page 2
            </Button>
          </NavLink>
          <NavLink to="/page-3">
            <Button variant="outlined" color="warning">
              Page 3
            </Button>
          </NavLink>
        </div>
      </div>
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default RootLayout;
