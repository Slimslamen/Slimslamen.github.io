import About from "./AboutPage/About";
import Landing from "./LandingPage/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarComp } from "./NavbarComp";
import Contact from "./ContactPage/Contact";
import Project from "./ProjectPage/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
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
