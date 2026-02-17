import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Nutrition from "./pages/Nutrients";
import Home from "./pages/Home";
import Pesticides from "./pages/Pesticides";
import Seeds from "./pages/Seeds";
//import Pesticides from "./pages/Pesticides";

import AppNavigation from "./layouts/appNavigation";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppNavigation />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/nutrients",
          element: <Nutrition />,
        }
        ,
       
        {
          path: "/seeds",
          element: <Seeds />,
        },
        {
          path: "/pesticides",
          element: <Pesticides />,
        },
         
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
