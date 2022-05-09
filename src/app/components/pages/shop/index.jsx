import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router';
import { stampsList } from '../../../redux/constants';
import { addToCart } from '../../../redux/cartSlice';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Shop = () => {

const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (stamp) => {
    dispatch(addToCart(stamp));
    navigate("/shoppingCart")
  };

  return (

    <Grid container>
      {stampsList ? stampsList.map(stamp => <Grid item md={3} spasing={3}>
        <Card sx={{ width: "300px", margin: "30px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              width={"200px"}
              height="300px"
              image={stamp.src}
              alt="asxtik Goddes"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {stamp.title}
              </Typography>
              {stamp.price} AMD
              <Typography variant="body2" color="text.secondary">
                Postage Stamps Plan by “HayPost”, the stamp “Goddess Astghik” presented by "Indigo Branding" agency was declared the winner.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions >
            <Button size="small" color="primary"  onClick={() => handleAddToCart(stamp)} >
              Add Card
            </Button>
            <Button size="small" color="primary">
              <FavoriteBorderIcon />
            </Button>
          </CardActions>
        </Card></Grid>): null}</Grid>

  )
}

export default Shop
