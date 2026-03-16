
import OrderCard from "../../components/OrderCard";

function CartOrder({ dir = "rtl" }) {

  // Example array of order cards
  const orders = [1, 2]; // replace with your actual order data

  return (
    <div
      dir={dir}
      className="flex flex-col w-[90%] me-auto"
    >
      {orders.map((index) => (
        <div key={index} className="flex flex-col gap-6">
          <OrderCard />
          {/* Divider except after the last card */}
          {index !== orders.length - 1 && (
            <div className="border-b border-gray-300 my-6"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CartOrder;