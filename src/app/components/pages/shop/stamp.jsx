import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const Stamp = (props) => {

  
    
    return (
        <div><Card sx={{ width: "300px", margin: "30px" }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width={"200px"}
                    height="300px"
                    image={props.src}
                    alt="asxtik Goddes"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    {props.price} AMD
                    <Typography variant="body2" color="text.secondary">
                        Postage Stamps Plan by “HayPost”, the stamp “Goddess Astghik” presented by "Indigo Branding" agency was declared the winner.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions >
                <Button size="small" color="primary"  >
                    Add Card
                </Button>
                <Button size="small" color="primary">
                    <FavoriteBorderIcon />
                </Button>
            </CardActions>
        </Card></div>
    )
}

export default Stamp
/*onClick={props.onClickFunction}*/