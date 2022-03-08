import "../Css/app.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";




function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate()
  const totalPrice = basket?.reduce((acc,curr)=>{
    return acc + curr.price
},0)


  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState('');
  const [succeeded, setSucceeded] = useState(false)


  
   
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (
          <Link to="/checkout" className="payment__link">
            {basket?.length} items
          </Link>
          )
        </h1>
        {/* Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>Email: {user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe go here */}
            <form >
             
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={totalPrice}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                    <span>{processing? <p>Processing</p>:"Buy Now"}</span>
                </button>
              </div>
              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
