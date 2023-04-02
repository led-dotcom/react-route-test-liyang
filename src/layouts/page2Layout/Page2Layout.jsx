import { Outlet } from "react-router-dom";

const Page2Layout = () => {
  return (
    <div>
      <h1>Careers - Route Parameter</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet labore
        odio ipsa cum fugiat sunt!
      </p>
      <Outlet />
    </div>
  );
};

export default Page2Layout;
