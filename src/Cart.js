import React from 'react';

import CartItem2 from './CartItem2';



// Component to understand props and props are used in cartitem2
// props are nothing but like parameters of a function

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
          products: [
            {
              price: 99,
              title: 'Watch',
              qty: 1,
              img: '',
              id: 1
            },
            {
              price: 999,
              title: 'Mobile Phone',
              qty: 10,
              img: '',
              id: 2
            },
            {
              price: 999,
              title: 'Laptop',
              qty: 4,
              img: '',
              id: 3
            }
          ]
    }

}

render(){
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem2
              product={product} //way of passing props
              key={product.id}
            />
          )
        })}
      </div>
    );
}

}

export default Cart;