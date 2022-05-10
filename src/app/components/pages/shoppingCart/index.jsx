import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../../redux/cartSlice";
import BtnComponent from "../../../shared/UI/BtnComponents";
import "../../../../App.css";
import Navbar from "../../../shared/components/navbar";
import "../../../../App.css";
import Grid from "@mui/material/Grid";

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
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalAmount = useMemo(() => {
    const totalSum = cart.cartItems.map((item) => {
      return parseInt(item.cartQuantity * item.price);
    });
    const sum = totalSum.reduce((a, b) => a + b, 0);

    return sum;
  }, [cart]);

  console.log(totalAmount, "cart");

  return (
    <>
      <Navbar />
      <Typography variant="h3" style={{ textAlign: "center" }}>
        Shopping Cart
      </Typography>
      {!cart.cartItems.length ? (
        <><Typography variant="h3" style={{ textAlign: "start",margin :"20px" }}>
        Shopping Cart is Empty
      </Typography>
      <Link to="/">
      <Typography variant="h6" style={{ textAlign: "end",margin :"20px" }}>
      Visit Shop
    </Typography> </Link></>
    
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>
                  <Typography variant="h6">Picture</Typography>
                </th>
                <th>
                  <Typography variant="h6">Name</Typography>
                </th>
                <th>
                  <Typography variant="h6">Price</Typography>
                </th>
                <th>
                  <Typography variant="h6">Quantity</Typography>
                </th>
                <th>
                  <Typography variant="h6">Total</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <tr>
                    <th>
                      <img src={cartItem.src} className="cartImg"></img>
                    </th>
                    <th>
                      <div style={{ flexDirection: " column" }}>
                        <div>{cartItem.title} </div>
                        <br></br>
                        <div>
                          <BtnComponent
                            onClick={() => handleRemoveFromCart(cartItem)}
                            text={"Remove"}
                          />
                        </div>
                      </div>
                    </th>
                    <th>{cartItem.price}</th>
                    <th>
                      <div className="cartQuantity">
                        {" "}
                        <BtnComponent
                          onClick={() => handleDecreaseCart(cartItem)}
                          variant="text"
                          text={"-"}
                        />
                        {cartItem.cartQuantity}
                        <BtnComponent
                          onClick={() => handleAddToCart(cartItem)}
                          variant="text"
                          text={"+"}
                        />
                      </div>
                    </th>
                    <th>{cartItem.price * cartItem.cartQuantity}</th>
                  </tr>
                ))}
            </tbody>
          </table>
          <Grid container style={{ margin: "30px" }}>
            <Grid item style={{ maarginRight: "50px" }}>
              <BtnComponent
                text={"Clear All"}
                onClick={() => handleClearCart()}
              />
            </Grid>
            <Grid item style={{ marginLeft: "50px" }}>
              {" "}
              Total Amount : ${totalAmount}{" "}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default ShoppingCart;
