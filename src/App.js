// import logo from './logo.svg';
import "./App.css";
import About_me from "./Components/About_me";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Home from "./Home";
import Contact from "./contact";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About_me/>,
  },
  {
    path: "/projects",
    element: <Projects/>,
  },
  {
    path: "/services",
    element: <Services/>,
  },
 
]);

function App() {
  return (
    <>
    <div className="app">
      <RouterProvider router={router} />

    </div>
    </>
  );
}

export default App;

