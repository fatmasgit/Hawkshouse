import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav";
import Footer from "../components/footer";
function AppNavigation() {
    return (_jsxs(_Fragment, { children: [_jsx(Nav, {}), _jsx("main", { className: "min-h-screen bg-no-repeat bg-cover bg-center w-full pb-20", style: { backgroundImage: `url(/images/background.png)` }, children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
}
export default AppNavigation;
