// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
// Routers Imports
import { Link } from 'react-router-dom';
// Component Imports
import Footer from '../footer/Footer';
import Header from '../header/Header';
// Images Imports
import ladiesimg from '../../images/Ladies.png';
import gentsimg from '../../images/Gents.png';
// Styles Imports
import './Products.css';

// Products Page
export const Products = () => {
    return (
        <div>
            {/* Header Component */}
            <Header></Header>
            {/* Products Container */}
            <div className="productsContainer">
                <Grid container spacing={3} justify="center" align="center">
                    {/* Gents */}
                    <Grid item xs={10} md={4} component={Card} className="card gents"> 
                        <Link className = "productsLink" to="/products/gents" >
                            <CardContent>
                                <img src={gentsimg} className="images" alt="ladies" align="center"/>
                                <Typography variant= "h5" color="textSecondary" align = "center" gutterBottom >
                                    for <strong>Him</strong>
                                </Typography>
                            </CardContent>
                        </Link> 
                    </Grid>
                    {/* Ladies */}
                    <Grid item xs={10} md={4} component={Card} className="card ladies"> 
                        <Link className = "productsLink" to="/products/ladies" >
                            <CardContent>
                                <img src={ladiesimg} className="images" alt="ladies" align="center"/>
                                <Typography variant= "h5" color="textSecondary" align = "center" gutterBottom >
                                    for <strong>Her</strong>
                                </Typography>
                            </CardContent>
                        </Link> 
                    </Grid>
                </Grid>
            </div>
            {/* Footer Component */}
            <Footer></Footer>
        </div>
    )
}