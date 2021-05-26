import React, {useState} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";
import LA from "../Cities/LA"


const PUBLIC_KEY = "pk_test_19lKLey0BnXSxv35hMNmN3sj00PuMqjbWm";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  /*
  user_id = reference to user
  _id
  City = string
  tickets amount = number
  otherCity = number
  price = sum of all tickets and (price for flight) = ticketAmount * otherCity (number)
  */
  const [count, setCount] = useState(0);
  const name = 'los angeles'
  const price = 1.01
  const totalPrice = price * count

  const handleChange = (change) => {
    setCount(change)
  }

  return (
    <Elements stripe={stripeTestPromise}>
      <LA count={count} handleChange={handleChange} price={price} totalPrice={totalPrice}/>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;