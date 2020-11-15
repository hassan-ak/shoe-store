// React Imports
import React, { useContext } from 'react'
// Material UI Imports
import { Container, Grid,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// Component imports
import Header from '../header/Header';
// Functional Components
import {CartContext} from '../../functionalComponents/CartContext';

// Stylig for cart page
const useStyles = makeStyles((theme) => ({
    cRoot: {
        flexGrow: 10,
        marginTop:"70pt",
      },
      cHeading: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginTop: theme.spacing(4),
      },
      cTotal: {
        marginBottom: theme.spacing(4),
      },
      cImg:{
        height: 130,
        width: 165,
      },
      cRoot1: {
        border: `1px solid ${theme.palette.grey[400]}`,
        padding: theme.spacing(2),
        backgroundColor: theme.palette.background.paper,
      },
      cHeading1: {
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: theme.spacing(3),
      },
      cRow: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(1),
      },
      cCheckoutBtn: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
      },

}));

export const Cart = () => {
    // const for using styles
    const classes = useStyles();
    // Cart Content from Cart Context
    const { cart } = useContext(CartContext);
    // Total Price of Selected products
    const prices = cart.map( (p) => p.price)
    let totalPrice = 0;
    if (prices.length) {
        totalPrice = prices.reduce( (a, b) => a + b);
    }
    let numOfItems = (cart.length)

    return (
        <div>
            {/* Header Component */}
            <Header/>
            {/* Cart Page */}
            <Container className={classes.cRoot}>
                <Typography variant="h4" component="h4" className={classes.cHeading}>
                    Your cart
                </Typography>
                <Typography variant="button" component="p" className={classes.cTotal}>
                    Total: <strong>${totalPrice}</strong>
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        {cart.length > 0 ? (
                            cart.map((product) => (
                                <div>
                                    <dic><img src={product.imageURL} alt={product.name} className={classes.cImg}/></dic>
                                    <div>
                                        <p>Name: {product.name}</p>
                                        <p>Price:  {product.price} $</p>
                                    </div>
                                </div>
                            ))
                        ):(
                            <div style={{ width: "100%" }}>
                                <Typography color="error" variant="body1">
                                    Cart is empty
                                </Typography>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container className={classes.cRoot1}>
                            <Grid item xs={12}>
                                <Typography variant="h5" className={classes.cHeading1}>
                                    Order Summary
                                </Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">{numOfItems} items</Typography>
                                <Typography variant="button">${totalPrice}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Delivery</Typography>
                                <Typography variant="button">${totalPrice*0.10}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Sales Tax</Typography>
                                <Typography variant="button">${totalPrice*0.15}</Typography>
                            </Grid>
                            <Grid item xs={12} className={classes.cRow}>
                                <Typography variant="button">Total</Typography>
                                <Typography variant="button">${totalPrice+totalPrice*0.10+totalPrice*0.15}</Typography>
                            </Grid>
                            <Button
                                className={classes.cCheckoutBtn}
                                variant="contained"
                                color="secondary"
                                fullWidth
                            >
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
