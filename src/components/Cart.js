// import React, { useContext } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import Chip from '@material-ui/core/Chip';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
// import { CartContext } from '../context/Global'
// import './shopitemslist.css'
// import Icon from '@material-ui/core/Icon';
// import Countup from 'react-countup'
// import FlipMove from 'react-flip-move'

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//     },
//     heading: {
//         fontSize: theme.typography.pxToRem(15),
//     },
//     secondaryHeading: {
//         fontSize: theme.typography.pxToRem(15),
//         color: theme.palette.text.secondary,
//     },
//     icon: {
//         verticalAlign: 'bottom',
//         height: 20,
//         width: 20,
//     },
//     details: {
//         alignItems: 'center',
//     },
//     column: {
//         flexBasis: '33.33%',
//     },
//     helper: {
//         borderLeft: `2px solid ${theme.palette.divider}`,
//         padding: theme.spacing(1, 2),
//     },
//     link: {
//         color: theme.palette.primary.main,
//         textDecoration: 'none',
//         '&:hover': {
//             textDecoration: 'underline',
//         },
//     },
// }));

// export default function Cart() {
//     const classes = useStyles();
//     const [cart, setcart] = useContext(CartContext)
//     const totalamount = cart.reduce((acc, curr) => acc + curr.price, 0)
//     const handlers = (id) => {
//         var newcart = [...cart]
//         newcart.splice(id, 1)
//         setcart(newcart)
//     }
//     return (

//         <div className={classes.root}>
//             <div className="amount j">
//                 <div>
//                     <h1 className="o">Items in Cart = {cart.length}</h1>
//                 </div>
//                 <div>
//                     <h1 className="o">Total Amount = <Countup start={0} end={totalamount} duration={2.75} /></h1>
//                 </div>
//             </div>
//             <FlipMove duration={1200} easing="ease-in-out">
//                 {cart.map((item, id) => (
//                     <ExpansionPanel defaultExpanded key={id}>
//                         <ExpansionPanelSummary
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls="panel1c-content"
//                             id="panel1c-header"
//                         >
//                             <div className={classes.column}>
//                                 <Typography className={classes.heading}>Cart Items List</Typography>
//                             </div>
//                             <div className={classes.column}>
//                                 <Typography className={classes.secondaryHeading}>{item.text}</Typography>
//                             </div>
//                         </ExpansionPanelSummary>
//                         <ExpansionPanelDetails className={classes.details}>
//                             <div className={classes.column} />
//                             <div className={classes.column}>
//                                 <Chip label={item.text} onDelete={handlers} />
//                             </div>
//                             <div className={clsx(classes.column, classes.helper)}>
//                                 <Typography variant="caption">
//                                     {item.def}
//                                     <br />
//                                     <a href="#secondary-heading-and-columns" className={classes.link}>
//                                         Read more
//               </a>
//                                 </Typography>
//                             </div>
//                         </ExpansionPanelDetails>
//                         <Divider />
//                         <ExpansionPanelActions>
//                             {/* <Button size="small" color="primary" onClick={handlers}>
//                             Delete
//                      </Button> */}
//                             <Button
//                                 onClick={handlers}
//                                 variant="contained"
//                                 color="primary"
//                                 className={classes.button}
//                                 endIcon={<Icon>delete</Icon>}
//                             >
//                                 Delete
//                          </Button>
//                         </ExpansionPanelActions>
//                     </ExpansionPanel>

//                 ))}
//             </FlipMove>
//         </div>

//     );
// }


import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { CartContext } from '../context/Global'
import './shopitemslist.css'
import Countup from 'react-countup'
import FlipMove from 'react-flip-move'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // margin: '5px 0px',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
    },
    width: {
        width: '100%',
        height: '400px',
        display: 'inline-block'
    }
}));

export default function SimplePaper() {
    const classes = useStyles();
    const [cart, setcart] = useContext(CartContext)
    const totalamount = cart.reduce((acc, curr) => acc + curr.price, 0)
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handlers = (index) => {
        var newcart = [...cart]
        newcart.splice(index, 1)
        setcart(newcart)
    }
    const handlerclose = (index) => {
        var newcart = [...cart]
        newcart.splice(index, 1)
        setcart(newcart)
        setOpen(false);
    }
    return (
        <div>
            <div className="amount j">
                <div>
                    <h1 className="o">Items in Cart = {cart.length}</h1>
                </div>
                <div>
                    <h1 className="o">Total Amount = <Countup start={0} end={totalamount} duration={2.75} /></h1>
                </div>
            </div>

            <div >

                <FlipMove duration={1200} easing="ease-in-out" >
                    {cart.map((item, id) => (
                        <Paper elevation={3} key={id} className="as">
                            <Dialog
                                fullScreen={fullScreen}
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="responsive-dialog-title"
                            >
                                <DialogTitle id="responsive-dialog-title">{`Are you sure you want to buy ${item.text} cool shirt?`}</DialogTitle>
                                <img src={item.image} alt="" />
                                <h1>${item.price}</h1>
                                <DialogContent>
                                    <DialogContentText>
                                        {item.def}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button autoFocus onClick={handleClose} color="primary">
                                        Disagree
          </Button>
                                    <Button onClick={handlerclose} color="primary" autoFocus>
                                        Agree
          </Button>
                                </DialogActions>
                            </Dialog>
                            <h1>{item.text}</h1>
                            <img src={item.image} alt="" width="200px" height='200px' />
                            <Typography>
                                this is new shirt in market
                        </Typography>
                            <Button
                                onClick={handlers}
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                endIcon={<Icon>delete</Icon>}
                            >
                                Delete
                   </Button>
                            
                     <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        style={{marginLeft: '10px'}}
        endIcon={<Icon>send</Icon>}
      >
        CheckOut
      </Button>
                            {/* <Button varient="contained" color="primary"  className={classes.button}>CheckOut</Button> */}
                        </Paper>
                    ))}
                </FlipMove  >
            </div>
        </div>
    );
}
