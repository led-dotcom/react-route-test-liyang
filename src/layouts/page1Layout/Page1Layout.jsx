import { NavLink, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";

const Page1Layout = () => {
  return (
    <div>
      <h1>Nested Routes</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nemo
        fugit non accusantium quaerat accusamus veniam. Sint dolore voluptas
        nemo architecto voluptate nihil corporis laborum ratione. Nam
        necessitatibus exercitationem ratione odio nisi officiis facere vitae ex
        consequuntur quam laborum excepturi tempora eos expedita eius voluptate
        numquam temporibus nulla vero accusamus ab, aut doloremque doloribus
        deserunt! Sint animi rem aliquam labore, dicta temporibus officia
        obcaecati, ipsum magnam natus consequuntur nisi beatae quisquam. Vel
        distinctio necessitatibus quisquam voluptate labore. Quidem et ea illum
        esse unde perspiciatis, impedit nemo. Dolorum labore dolore similique ab
        deserunt nihil voluptas repellat facere, ipsam atque, voluptatem magnam.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <NavLink to="/page-1/section-1">
          <Button variant="outlined" color="warning">
            Section 1
          </Button>
        </NavLink>
        <NavLink to="/page-1/section-2">
          <Button variant="outlined" color="warning">
            Section 2
          </Button>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default Page1Layout;
