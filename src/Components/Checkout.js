import '../Css/app.css'

import React, {useEffect} from 'react'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
function Checkout() {
    const [{basket, user},dispatch] = useStateValue();
    useEffect(()=>{
        document.title = 'Amazon Shopping Cart';
    },[])
    return (
        <div className='checkout'>
           <div className="checkout__left">
               <div>
                  <div className="checkout__heading">
                      <h3>Hello, {user ? user?.displayName : 'guest'}</h3>
                  <h2 className='checkout__title'>Shopping Cart</h2>
                   <span className='checkout__deselect'><a href="\">Deselect all items</a></span>
                  </div>
                    {/* Basket item */}
                {basket.map((item,index)=>(
                    <CheckoutProduct
                        key={index}
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                    />

                )
                )}



               </div>
           </div>
           <div className="checkout__right">
                <Subtotal/>
           </div>
        </div>
    )
}

export default Checkout
