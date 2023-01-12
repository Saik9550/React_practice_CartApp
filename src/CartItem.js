import React from "react";


class CartItem extends React.Component{

    render(){
        return (
            // below className cart-item and left-block are defined in index.css file

          <div className="cart-item">
            <div className="left-block">

                {/* below is one way to declare style (like inline style) */}
                {/* styles.image: styles is a object  declared below and image is one of the field  */}
              <img style={styles.image} />
            </div>

            <div className="right-block">

                {/* if we want to declare styles in the tag directly without creating any object we delare them in {{ }} */}
              <div style={{ fontSize: 25 }}>Phone</div>
              <div style={{ color: "#777" }}>Rs 999</div>
              <div style={{ color: "#777" }}>Qty: 1</div>
              <div className="cart-item-actions">{/* Buttons */}</div>
            </div>
          </div>
        )
    }
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

export default CartItem;