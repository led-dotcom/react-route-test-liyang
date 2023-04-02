import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Page3 from "./pages/Page3";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Page1Section1 from "./section/Page1Section1";
import Page1Section2 from "./section/Page1Section2";
import NotFound from "./pages/NotFound";
import Page1Layout from "./layouts/page1Layout/Page1Layout";
import Page2Layout from "./layouts/page2Layout/Page2Layout";
import Careers, { careerLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
import CareerError from "./pages/careers/CareerError";

// if the input route cannot match any of the routes written, it go to "*"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="page-1" element={<Page1Layout />}>
        <Route path="section-1" element={<Page1Section1 />} />
        <Route path="section-2" element={<Page1Section2 />} />
      </Route>
      <Route
        path="page-2"
        element={<Page2Layout />}
        errorElement={<CareerError />}
      >
        <Route index element={<Careers />} loader={careerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="page-3" element={<Page3 />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      {/* <h1>title</h1> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
