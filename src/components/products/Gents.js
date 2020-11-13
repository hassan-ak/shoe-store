// Imports
// React Imports
import React , {useContext} from 'react';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
// Routers Imports
import { Link } from 'react-router-dom';
// Components Imports
import Header from '../header/Header';
// Context Imports;
import { DataContext } from "../../functionalComponents/DataContext";
// Styles Imports
import './Products.css';


// Styles for Products Page
const useStyles = makeStyles({
    productsRoot: {
        maxWidth: 300,
        maxHeight: 300,
        minHeight: 300,
        paddingBottom: 20,
        margin: 10,
    },
    Grid: {
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        paddingTop: 20,
        paddingBottom: 10,
    }
});

// Gents Section
export const Gents = () => {
    // Use Context
    const context = useContext(DataContext);
    // Exract gents products
    const gentsProducts = context.gentsProducts;
    // Use Styling
    const classes = useStyles();
    return (
        <div>
            {/* Header Component */}
            <Header></Header>
            <h2>for Him</h2>
            {/* Page Content */}
            <div className="productsGridContainer">
                <Grid container direction="row" justify="center" alignItems="center" className="productsGrid">
                    {gentsProducts.map((gentsProducts) => (
                        <Grid xl={3} lg={3} md={4} sm={6} xs={12} spacing={3}>
                            <Card className={classes.productsRoot}>
                                <Link to={`/products/gents/${gentsProducts.slug}`} className="productsLink">
                                    <CardActionArea>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {gentsProducts.brand} {gentsProducts.category} Shoes
                                        </Typography>
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="260"
                                            image={gentsProducts.imageURL}
                                            title={gentsProducts.name}
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="textSecondary" component="p" align="center">
                                                {gentsProducts.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>        
    )
}