import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './app/components/pages/homePage/index';
import ShoppingCart from './app/components/pages/shoppingCart/index';
import Shop from './app/components/pages/shop/index'



const App = ()=> {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="shoppingCart" element={<ShoppingCart/>}/>
          <Route path="shop" element={<Shop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

     