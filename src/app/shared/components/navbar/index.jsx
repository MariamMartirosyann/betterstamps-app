import React from "react";
import "../../../../App.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  return (
    <div className="navbar ">
      <Grid container style={{justifyContent:"space-between", padding:"10px"}}>
        <Grid item>
          <Link className="textDecorationNone" to="/">
            <h3 >Stamps</h3>
          </Link>
        </Grid>
        <Grid item >
      
            <Link to="/shoppingCart">
          <AddShoppingCartIcon />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;
