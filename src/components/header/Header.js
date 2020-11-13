// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import { makeStyles } from '@material-ui/core/styles';
import { IconButton} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// Routers Import
import { Link } from 'react-router-dom';
// Images Imports
import logo from '../../images/Title.png';

// Styles for Header Component
const useStyles = makeStyles((theme) => ({
    // Header bar styles
    headerRoot: {
        flexGrow: 1,
    },
    headerBackground:{
        backgroundColor: 'rgb(243, 99, 111)',
    },
    // Header Icon Styles
    iconPaper: {
        textAlign: 'left',
        backgroundColor:'transparent',
    },
    iconShoe:{
        maxWidth: '25pt',
    },
    // Header Text Styles
    textPaper: {
        textAlign: 'center',
        backgroundColor:'transparent',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
    // Header Cart Icon Styles
    cartIcon: {
        textAlign: 'right',
        backgroundColor:'transparent',
    },
    cartButton: {
        color : "white",
    },
    // Links Style
    headerLinks:{
        textDecoration : "none",
        margin : '0',
        padding : '0',
        color: 'white',
    },
}));

// Header Function
export default function Header() {
    // const for using styles
    const classes = useStyles();
    return (
        <div className={classes.headerRoot}>
            <AppBar position="absolute" className={classes.headerBackground}>        
                <Toolbar>
                    {/* logo */}
                    <Grid item xs={1}>
                        <Paper className={classes.iconPaper} elevation={0}>
                            <Link to="/" className={classes.headerLinks} >
                                <IconButton 
                                    edge="start" 
                                    aria-label="shoe">
                                    <img src={logo} className={classes.iconShoe} alt="logo" />
                                </IconButton>
                            </Link>
                        </Paper>
                    </Grid>
                    {/* Text */}
                    <Grid item xs={10}>
                        <Grid item xs={12} sm={8} md={4}>
                            <Paper className={classes.textPaper} elevation={0}>
                                <Typography variant="h5">
                                    <Link className={classes.headerLinks} to="/" >Home</Link>
                                </Typography>
                                <Typography variant="h5">
                                    <Link className={classes.headerLinks} to="/products" >Products</Link>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    {/* Cart */}
                    <Grid item xs={1}>
                        <Paper className={classes.cartIcon} elevation={0}>
                            <Link className={classes.headerLinks} to="/cart" >
                                <ShoppingCartIcon
                                    edge="end" 
                                    aria-label="cart"
                                    className={classes.cartButton}
                                />
                            </Link>
                        </Paper>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}