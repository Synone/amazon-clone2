import React from 'react'
import '../Css/app.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import {useNavigate} from 'react-router-dom';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();

    const navigate = useNavigate();

    const totalPrice = basket?.reduce((acc,curr)=>{
        return acc + curr.price
    },0)
    
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} {basket.length > 1 ? 'items' : 'item'}): 
                            <strong className='total__price'> {value} </strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <button
                        onClick={e => navigate('/payment')}    
                        className='subtotal__checkout-btn a-button-primary'>Proceed to checkout</button>
                    </>
                )}
                decimalScale = {2}
                value = {totalPrice}
                displayType = {'text'}
                thousandSeparator = {true}
                prefix= {'$'}
            />
       

        </div>
    )
}

export default Subtotal
