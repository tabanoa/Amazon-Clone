import moment from 'moment';
import React from 'react';
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from './CheckoutProduct';
import './Order.css'

function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>      {/* //timeStamp */}
            <p className='order_id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item =>(
                <CheckoutProduct
                      id={item.id}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      hideButton
                  />
            ))}
            <CurrencyFormat
            renderText={(value) => (
                <h3 className="Order_total">Order Total: {value}</h3>
            )}
            decimalScale = {2}
            value={order.data.amount /100}
            displayType={"text"}
            thousandSeperator={true}
            prefix={'$'}
         />
        </div>
    )
}
export default Order
