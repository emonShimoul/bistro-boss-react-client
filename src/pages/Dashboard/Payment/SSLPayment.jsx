import React from "react";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const SSLPayment = () => {
  const [cart, refetch] = useCart();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleCreatePayment = async () => {
    const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: "",
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };

    const response = await axios.post(
      "http://localhost:5000/create-ssl-payment",
      payment
    );
    console.log("response", response);
  };

  return (
    <div>
      <h2 className="mb-2 text-lg font-bold">Payment Details</h2>
      <p className="mb-4 text-gray-600">
        Complete your order by providing your payment details
      </p>
      <p className="font-bold">Email</p>
      <input
        type="text"
        placeholder="Type here"
        className="input w-full mb-2"
        value={user.email}
      />
      <button
        onClick={handleCreatePayment}
        className="btn btn-block bg-black text-white"
      >
        Place Order
      </button>
    </div>
  );
};

export default SSLPayment;
