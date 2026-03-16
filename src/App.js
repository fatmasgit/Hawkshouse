import { jsx as _jsx } from "react/jsx-runtime";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nutrition from "./pages/Nutrients";
import Home from "./pages/Home";
import Pesticides from "./pages/Pesticides";
import Seeds from "./pages/Seeds";
import Product from "./pages/Product"; // 👈 renamed
import Cart from "./pages/Cart"; // 👈
import AppNavigation from "./layouts/appNavigation";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Account from "./pages/Account";
import OrderPlacement from "./pages/OrderPlacement";
function App() {
    const router = createBrowserRouter([
        {
            element: _jsx(AppNavigation, {}),
            children: [
                { path: "/", element: _jsx(Home, {}) },
                { path: "/nutrients", element: _jsx(Nutrition, {}) },
                { path: "/seeds", element: _jsx(Seeds, {}) },
                { path: "/pesticides", element: _jsx(Pesticides, {}) },
                { path: "/cart", element: _jsx(Cart, {}) },
                { path: "/order-placed", element: _jsx(OrderPlacement, {}) },
                { path: "/signup", element: _jsx(SignUp, {}) },
                { path: "/login", element: _jsx(LogIn, {}) },
                { path: "/account", element: _jsx(Account, {}) },
                // ✅ Dynamic Product Route
                { path: "/product/:id", element: _jsx(Product, {}) },
            ],
        },
    ]);
    return _jsx(RouterProvider, { router: router });
}
export default App;
