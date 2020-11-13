// Imports
// React Imports
import React, { useContext } from 'react';
// Router Imports
import { useParams } from 'react-router-dom';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
// Functional Component imports
import DataContext from '../../functionalComponents/DataContext';

// Styling for selected Product
const useStyles = makeStyles({
    spRoot: {
      maxWidth: 600,
      width: 600,
    },
    spMedia: {
      height: 340,
    },
    spGrid: {
      paddingTop:20,
    },
    spBtn:{
      backgroundColor:"black",
      color:"white",
      width:"100%",
    }
  });

// Selected Product page
export const SelectedProduct = () => {
    // use of Styling
    const classes = useStyles();
    // use Context
    // For products
    const  context  = useContext(DataContext);
    // List of total products
    const productsList = context.products
    // useParams for flollowing the link
    const { slug } = useParams();
    // selected product
    const product = productsList.find((p) => p.slug === slug);

    return (
        <div>
            {/* Product Title */}
            <div className="titleContainer">
                <h3>
                    {product.name}
                </h3>
            </div>
            {/* Product Details */}
            <Grid container direction="row" justify="center" alignItems="center" className={classes.spGrid}>
                <Card className={classes.spRoot}>
                    <CardActionArea>
                        {/* Product Image */}
                        <CardMedia
                            className={classes.spMedia}
                            image={product.imageURL}
                            title={product.name}
                        />
                        {/* Product Detail */}
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Price: {product.price} $
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Name: {product.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Pieces Left: {product.items_left}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* Button fro adding to cart */}
                    <CardActions>
                        <Button size="small" className={classes.spBtn}>
                            Add To Cart
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}
