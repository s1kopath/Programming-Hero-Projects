import React from 'react';
import {useEffect, useState} from 'react';
import {getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems';
import Cart from '../../components/Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () =>{
        // setCart([]);
        // setOrderPlaced(true);
        // processOrder();
        history.push('/shipment');

    }

    const removeProduct = (productKey) =>{
        console.log('removed product', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find( pd =>pd.key === key);
            product.quantity = savedCart[key];
            return product;

        });
        //console.log(cartProducts);
        setCart(cartProducts);

    }, []);
    let thankyou;
    if (orderPlaced){
        thankyou  = <img src={happyImage} alt=""/>
    }
    
    
    return (
        <div className="twin-container">
            {/* <h1>Cart Items: {cart.length}</h1> */}
            <div className="product-container">
            {
                cart.map(pd => <ReviewItems 
                    key={pd.key}
                    removeProduct = {removeProduct}
                    product={pd}></ReviewItems>)
            }
            {
                thankyou 
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;