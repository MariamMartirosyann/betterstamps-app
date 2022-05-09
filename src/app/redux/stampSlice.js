import { createSlice } from "@reduxjs/toolkit";
import {stampsList} from './constants/index';


const stampSlice = createSlice({
  name: "stamp",
  initialState:stampsList,
 
});

export const selectStamp = state => state.stampsList.stamp;

export default stampSlice.reducer;