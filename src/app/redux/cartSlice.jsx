import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,


}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1
      } else {
        const tempStamp = { ...action.payload, cartQuantity: 1 }
        state.cartItems.push(tempStamp);
      }

    },

    removeFromCart(state,action){
      const nextCartItems = state.cartItems.filter(
        (cartItem)=>cartItem.id !== action.payload.id
      );
      state.cartItems= nextCartItems
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
    },
  

    clearCart(state, action) {
      state.cartItems = [];}
  },
  

  getTotals(state, action) {
    let { total, quantity } = state.cartItems.reduce(
      (cartTotal, cartItem) => {
        const { price, cartQuantity } = cartItem;
        const itemTotal = price * cartQuantity;

        cartTotal.total += itemTotal;
        cartTotal.quantity += cartQuantity;

        return cartTotal;
      },
      {
        total: 0,
        quantity: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    state.cartTotalQuantity = quantity;
    state.cartTotalAmount = total;
  },
});
export const { addToCart, removeFromCart, decreaseCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;