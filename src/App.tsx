import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Nutrition from "./pages/Nutrients";
import Home from "./pages/Home";
import Pesticides from "./pages/Pesticides";
import Seeds from "./pages/Seeds";
import Product from "./pages/Product"; // 👈 renamed
import Cart from "./pages/cart"; // 👈
import AppNavigation from "./layouts/appNavigation";
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import Account from "./pages/Account"
import OrderPlacement from "./pages/OrderPlacement"


function App() {
  const router = createBrowserRouter([
    {
      element: <AppNavigation />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/nutrients", element: <Nutrition /> },
        { path: "/seeds", element: <Seeds /> },
        { path: "/pesticides", element: <Pesticides /> },
        { path: "/cart", element: <Cart /> },
        { path: "/order-placed", element: <OrderPlacement /> },
              { path: "/signup", element: <SignUp /> },
                  { path: "/login", element: <LogIn /> },
                     { path: "/account", element: <Account /> },

        // ✅ Dynamic Product Route
        { path: "/product/:id", element: <Product /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;