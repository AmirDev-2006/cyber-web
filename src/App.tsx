import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Product from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/cyber-web" element={<Home/>}></Route>
        <Route path="/cyber-web/product" element={<Product/>}/>
        <Route path= "/cyber-web/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;
