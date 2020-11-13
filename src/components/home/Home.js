// Imports
// React Imports
import React from 'react';
// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// Routers Import
import { Link } from 'react-router-dom';
// Images Imports
import title from '../../images/Title.png';
// Component Imports
import Footer from '../footer/Footer';
// Styles Imports
import './Home.css';

// Styles for Home Button
const useStyles = makeStyles((theme) => ({
    homeButton: {
        borderRadius: "50px",
        textDecoration: "none",
    },
}));

// Home Component Function
export const Home= () => {
    // Styles Constant
    const classes = useStyles();
    return (
        <div className = "homeContainer">
            {/* Image and Title */}
            <div className = "shoeContainer">
                <h1>Wellcome to</h1>
                <img src={title} alt="Shoes" className="shoeImage"/>
                <h1>Store</h1>
            </div>
            {/* Proceed Button */}
            <Link to="products" className="homeLink">
                <Button
                    variant="contained"
                    color="default"
                    className={classes.homeButton}
                    endIcon={<ArrowForwardIcon/>}
                >
                        Proceed to store
                </Button>
            </Link>
            {/* Footer Component */}
            <Footer></Footer>
        </div>
    );
}
