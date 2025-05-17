import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import SSLPayment from "./SSLPayment";
import { useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
// console.log("Stripe Key:", import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [method, handleMethod] = useState("stripe");

  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Pay to Eat"></SectionTitle>

      <div className="mb-4">
        <button
          className="btn"
          popoverTarget="popover-1"
          style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
        >
          Select Payment Method
        </button>
        <ul
          className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
          popover="auto"
          id="popover-1"
          style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}
        >
          <li onClick={() => handleMethod("stripe")}>
            <a>Stripe</a>
          </li>
          <li onClick={() => handleMethod("sslcommerz")}>
            <a>SSL Commerz</a>
          </li>
        </ul>
      </div>

      {method === "stripe" && (
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      )}

      {method === "sslcommerz" && <SSLPayment></SSLPayment>}
    </div>
  );
};

export default Payment;
