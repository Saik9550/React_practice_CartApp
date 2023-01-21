import CartItem from "./CartItem"
import showalert from "./showlaertbutton"
import Cart from "./Cart"
import Navbar from "./Navbar"
import React from "react"
// import * as firebase from 'firebase';
import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Note:since navbar and cart are siblings and props can only be passed from parents to children but not siblings
// and we want the cart value in navbar to be dynamically changing
// to change dynamically we need the produts array length of Cart
// hence navbar and Cart are siblings we are going to move state which is declared earlier in Cart to it's parent which is App in this case
// we are moving state to here (state is commented in Cart now)
class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      products: [
        // {
        //   price: 99,
        //   title: 'Watch',
        //   qty: 1,
        //   img: '',
        //   id: 1
        // },
        // {
        //   price: 999,
        //   title: 'Mobile Phone',
        //   qty: 10,
        //   img: '',
        //   id: 2
        // },
        // {
        //   price: 999,
        //   title: 'Laptop',
        //   qty: 4,
        //   img: '',
        //   id: 3
        // }
      ],
      loading:true
}

}

componentDidMount(){
  // we are going to fetch our data from firebase cloud store after component is mounted
  // console.log("Hello")
  firebase
  .firestore()
  .collection("products")
  .get()
  .then(snapshot=>{
    console.log("Hello")
    const products=snapshot.docs.map(doc=>{
      const data=doc.data();
      data["id"]=doc.id
      return data;
    });
    console.log(products)
    this.setState({products:products,loading:false})
  })
  .catch(err=>{
    console.log(err)
  })
}

handleIncreaseQuantity=(product)=>{
  console.log("hey")
const {products}=this.state;

const index=products.indexOf(product);
products[index].qty+=1;
this.setState({
products: products
})

}

handleDecreaseQuantity=(product)=>{
const {products}=this.state;
const index=products.indexOf(product);
if(products[index].qty===0){
return;
}

products[index].qty-=1;
this.setState({
products:products
})

}

handleDeleteProduct=(id)=>{
const {products}=this.state;

const items=products.filter((item)=>item.id!==id);

this.setState({
products:items
})
}

getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach(product => {
    count += product.qty;
  })
  // console.log(count);

  return count;
}

getPrice=()=>{
  const {products}=this.state;

  let price=0;
  products.forEach(product=>{
    price+=product.qty *product.price
  })
  return price
}




  onChangehandlingevent(e) {
    console.log(e.target.value)
  }

  render(){
    const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <CartItem /> */}
      < Cart 
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct} />
      {loading&&<h1>Loding Products....</h1>}

    <div style={{fontSize:20, padding:10}}>
      Total Price:{this.getPrice()}
    </div>


      <div>
        <button onClick={showalert}>Show Alert</button>
        <input onChange={this.onChangehandlingevent} />
      </div>
    </div>
  )
}
}

export default App
