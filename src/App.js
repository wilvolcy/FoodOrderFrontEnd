import React, {useState} from 'react'
import Cart from './components/Cart/Cart';
import Header from "./components/Layout/Header";
import Meal from './components/Meals/Meal';
import CartProvider from './components/store/CartProvider';
function App() {
const [cartIsShown, setCartIsShown] = useState(false);

const showCartHandler = () => {
  setCartIsShown(true);
}
const hideCartHandler =() => {
  setCartIsShown(false)
}

  return (
    <CartProvider>
      <Header onClick={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <main>
      <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
