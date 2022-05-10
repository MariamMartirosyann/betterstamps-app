import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer,{getTotals} from './cartSlice';
import stampReducer from './stampSlice'


export const store = configureStore({
  reducer: {
    cart:cartReducer,
    stamp:stampReducer,
  },
  
});

//store.dispatch(getTotals()); 
