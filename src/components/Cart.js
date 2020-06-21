import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { CartContext } from '../context/Global'
import './shopitemslist.css'
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

export default function Cart() {
    const classes = useStyles();
    const [cart, setcart] = useContext(CartContext)
    const totalamount = cart.reduce((acc, curr) => acc + curr.price, 0)
   const handlers = (id) =>{
    
        var newcart = [...cart] 
        newcart.splice(id,1)
        setcart(newcart)
   }
    return (
        <div className={classes.root}>
            <div className="amount">
                <div>
                    <h1>Items in Cart = {cart.length}</h1>
                </div>
                <div>
                    <h1>Total Amount = {totalamount}</h1>
                </div>
            </div>
            {cart.map((item, id) => (
                <ExpansionPanel defaultExpanded key={id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1c-content"
                        id="panel1c-header"
                        >
                        <div className={classes.column}>
                            <Typography className={classes.heading}>Cart Items List</Typography>
                        </div>
                        <div className={classes.column}>
                            <Typography className={classes.secondaryHeading}>{item.text}</Typography>
                        </div>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.details}>
                        <div className={classes.column} />
                        <div className={classes.column}>
                            <Chip label={item.text} onDelete={handlers} />
                        </div>
                        <div className={clsx(classes.column, classes.helper)}>
                            <Typography variant="caption">
                                {item.def}
                                <br />
                                <a href="#secondary-heading-and-columns" className={classes.link}>
                                    Read more
              </a>
                            </Typography>
                        </div>
                    </ExpansionPanelDetails>
                    <Divider />
                    <ExpansionPanelActions>
                        {/* <Button size="small" color="primary" onClick={handlers}>
                            Delete
                     </Button> */}
                     <Button
                        onClick={handlers}
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>delete</Icon>}
                    >
                         Delete
                         </Button>
                    </ExpansionPanelActions>
                </ExpansionPanel>
            ))}
        </div>
    );
}
