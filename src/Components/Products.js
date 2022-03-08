import React from 'react'
import '../Css/app.css'
import ReactStars from "react-rating-stars-component";
import { useStateValue } from './StateProvider';


function Products({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue()
    const ratingChanged = (newRating) => {
        console.log(newRating);
      };
      const handleAdd = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id: id,
                title:title,
                image: image,
                price: price,
                rating: rating
            }
        })
      }
    return (
        <div className={id === 4 ? 'product product1' :'product'}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div id ='star'className="product__ratings">
                <ReactStars
                    value={rating}
                    count={5}
                    onChange={ratingChanged}
                    size={20}
                    activeColor="#ffd700" />
                </div>
            </div>
            <img src={image} alt="Book" />
            <button
                onClick={handleAdd}            
            >Add to Cart</button>
        </div>
    )
}

export default Products
