import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import Page1Section1 from "./section/Page1Section1";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/page-1" element={<Page1 />} />
      <Route path="/page-2" element={<Page2 />} />
      <Route path="/page-3" element={<Page3 />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <h1>title</h1>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
