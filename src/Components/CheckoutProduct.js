import React from 'react';
import '../Css/app.css';
import ReactStars from "react-rating-stars-component";
import { useStateValue } from './StateProvider';



function CheckoutProduct({id,title,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  const handleRemove = () =>{
    dispatch({
      type: 'DELETE_FROM_BASKET',
      id:id
    })
  }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="products" className='checkoutProduct__image'/>
        <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
                <div id ='star'className="product__ratings">
                <ReactStars
                    value={rating}
                    count={5}
                    size={20}
                    activeColor="#ffd700"
                    edit={false} 
                    />
                </div>
                <button
                  onClick={handleRemove}
                >Delete</button>
        </div>
        <div className="checkoutProduct__price">
              <span>${price}</span> 
        </div>
    </div>
  
  );
}

export default CheckoutProduct;
