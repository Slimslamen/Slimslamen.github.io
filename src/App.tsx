import About from "./AboutPage/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarComp } from "./NavbarComp";
import Contact from "./ContactPage/Contact";
import Project from "./ProjectPage/Project";
import { WholePage } from "./WholePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WholePage />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Projects",
    element: <Project />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);
function App() {
  return (
    <>
      <NavbarComp />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
