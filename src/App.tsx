import About from "./AboutPage/About";
import Landing from "./LandingPage/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NavbarComp } from "./NavbarComp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/About",
    element: <About />,
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
