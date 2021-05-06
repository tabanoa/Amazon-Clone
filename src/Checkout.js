import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="checkout">
          <div className="checkout_left">
            <img 
                className="checkout_ad"
                src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423491668_.jpg"
                alt=""
            />
            <div>
                <h2 className="checkout_title">Your shopping basket</h2>

                {basket.map(item =>(
                  <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                  />
                ))}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
                {/* CheckoutProduct */}
            </div>
         </div> 
         <div className="checkout_right"></div>
          <Subtotal />
        </div>
    );
}

export default Checkout;
