import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function BreadCrumb() {
    let title = "";
    if (location.pathname === "/seeds") {
        title = "بذور";
    }
    else if (location.pathname === "/nutrients") {
        title = "مغذيات";
    }
    else if (location.pathname === "/pesticides") {
        title = "مبيدات";
    }
    else {
        title = "منتجاتنا"; // optional default
    }
    return (_jsxs("div", { dir: "ltr", className: "w-[85%] mx-auto my-15 relative rounded-lg overflow-hidden shadow-lg h-[291px]", children: [_jsx("div", { className: "w-full h-full bg-cover bg-center", style: {
                    backgroundImage: "url('https://www.shutterstock.com/image-photo/test-word-made-wood-background-260nw-1779376307.jpg')",
                } }), _jsx("div", { className: "absolute inset-0 bg-[#11110E] opacity-60 mix-blend-multiply" }), _jsx("div", { className: "absolute top-[30%] right-[5%] ", children: _jsx("p", { className: "text-white font-bold text-[30px] text-center", children: title }) })] }));
}
export default BreadCrumb;
