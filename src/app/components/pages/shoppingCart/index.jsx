import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../../redux/cartSlice';
import BtnComponent from '../../../shared/UI/BtnComponents';
import '../../../../App.css'

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (stamp) => {
    dispatch(addToCart(stamp));
  };
  const handleRemoveFromCart = (stamp) => {
    dispatch(removeFromCart(stamp));
  };
  const handleDecreaseCart = (stamp) => {
    dispatch(decreaseCart(stamp));
  };
  return (
    <>
      <Typography variant='h3' style={{ textAlign: "center" }}>Shopping Cart</Typography>
      <table>
        <thead>
          <tr>
            <th><Typography variant='h6'>Picture</Typography></th>
            <th><Typography variant='h6'>Name</Typography></th>
            <th><Typography variant='h6'>Price</Typography></th>
            <th><Typography variant='h6'>Quantity</Typography></th>
            <th><Typography variant='h6'>Total</Typography></th>
          </tr>
        </thead>
        <tbody>
          {cart.cartItems && cart.cartItems.map((cartItem) =>
            <tr>
              <th><img src={cartItem.src} className="cartImg"></img></th>
              <th><div style={{ flexDirection: " column" }}><div>{cartItem.title} </div><br></br><div>
                <BtnComponent onClick={() => handleRemoveFromCart(cartItem)} text={'Remove'}/></div></div></th>
              <th>{cartItem.price}</th>
              <th><div className='cartQuantity'> <BtnComponent  onClick={() =>  handleDecreaseCart(cartItem)} variant="text" text={"-"}/>{cartItem.cartQuantity}<BtnComponent onClick={() => handleAddToCart(cartItem)} variant="text" text={"+"}/></div></th>
              <th>{cartItem.price * cartItem.cartQuantity}</th>
            </tr>)}
        </tbody>
      </table>

    </>
  )
};

export default ShoppingCart