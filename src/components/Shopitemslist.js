import React, { useState,useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './shopitemslist.css'
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import {CartContext} from '../context/Global'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(360deg)',
  },
  button: {
    margin: theme.spacing(1),
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function Shopitemslist({ text, img, amount, para, deff, id }) {
  const [cart,setcart] = useContext(CartContext)
  const [color, setcolor] = useState({ color: '' })
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [islike, setlike] = useState(true)
  const handlechange = () => {
    setlike(!true)
    if (islike === true) {
      setcolor({
        color: 'red'
      })
      return false
    } else {
      setcolor({ color: '' })
      return setlike(true)
    }
  }
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const date = new Date()
  
  const clicks = () =>{
    const list = {
      text: text,
      price: amount,
      def: para,
      key: id
    }
    setcart(state => [...state,list])
  }
  return (
    <div className="flex">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {id}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={text}
          subheader={date.toLocaleDateString()}
        />
        <CardMedia
          style={{ backgroundSize: "cover", width: "100%", height: "auto" }}
          className={classes.media}
          image={img}
          title={text}

        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {para}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" style={color} onClick={handlechange}>
            <FavoriteIcon />
          </IconButton>
         
          <Button
            onClick={clicks}
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>add</Icon>}
          >
            Add Cart
      </Button>
          <b><span className="doller">${amount}/=</span></b>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
          </Typography>
            <Typography paragraph>
              {deff}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
