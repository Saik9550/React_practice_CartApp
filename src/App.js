import CartItem from "./CartItem"
import showalert from "./showlaertbutton"
import Cart from "./Cart"

function App() {
  function onChangehandlingevent(e) {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <CartItem />
      <Cart />
      <div>
        <button onClick={showalert}>Show Alert</button>
        <input onChange={onChangehandlingevent} />
      </div>
    </div>
  )
}

export default App
