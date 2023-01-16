import CartItem from "./CartItem"
import showalert from "./showlaertbutton"

function App() {
  function onChangehandlingevent(e) {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <CartItem />
      <div>
        <button onClick={showalert}>Show Alert</button>
        <input onChange={onChangehandlingevent} />
      </div>
    </div>
  )
}

export default App
