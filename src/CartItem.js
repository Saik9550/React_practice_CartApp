import React from "react"

class CartItem extends React.Component {
  constructor() {
    super()
    this.state = {
      price: 99,
      title: "phone",
      qty: 1,
      img: "",
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);(bind needs to be added to reference or we need to use arrow function as brlow)
  }

  increaseQuantity=()=>{
    // console.log(this.state.qty);
    // writiting just the below code will change the value of the quantity but the react will not render our component after the state is changed
    // to overcome this we use set state

    // this.state.qty=this.state.qty+1;

    //setState method 1 of using
    // this.setState({
    //   qty:this.state.qty+1
    // })

    //setState method 2---if previous state required
    this.setState((prevState)=>{
      console.log(prevState);
      return {

      qty:prevState.qty+1
      }
    })
  }

  decreaseQuantity =()=>{
    this.setState((prevState)=>{
      if(prevState.qty>0){
      return {
        qty:prevState.qty-1
      }
    }
    })
  }

  render() {
    const { price, title, qty, img } = this.state
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
          {/* <div style={{ fontSize: 25 }}>{this.state.title}</div>
              <div style={{ color: "#777" }}>{this.state.price}</div>
              <div style={{ color: "#777" }}>Qty:{this.state.qty}</div> */}

          {/* instead of using this.state always as abobe we can declare a constructor and assig the state values as above declared */}

          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>Qty:{qty}</div>

          <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="increase"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/9364/9364304.png"
              onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/992/992683.png"
              onClick={this.decreaseQuantity}
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            />
          </div>
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
    background: "#ccc",
  },
}

export default CartItem
