import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import OrderCard from "../../components/OrderCard";
function CartOrder({ dir = "rtl" }) {
    const payments = ["الدفع نقدا عند الاستلام"];
    const [activePayment, setActivePayment] = useState(payments[0]);
    // Example array of order cards
    const orders = [1, 2]; // replace with your actual order data
    return (_jsx("div", { dir: dir, className: "flex flex-col w-[90%] me-auto", children: orders.map((order, index) => (_jsxs("div", { className: "flex flex-col gap-6", children: [_jsx(OrderCard, {}), index !== orders.length - 1 && (_jsx("div", { className: "border-b border-gray-300 my-6" }))] }, index))) }));
}
export default CartOrder;
