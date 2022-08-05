import React from 'react';
import classes from './MeetupItem.module.css';
import FavContext from '../store/FavContext';
import { useContext } from 'react';
import Card from './ui/Card';
function MeetupItem(props) {
  const FavCtx = useContext(FavContext);

  const isFav = FavCtx.itemIsFavHandler(props.id);
  const toggleFavoriteHandler = () => {
    console.log(isFav);

    if (isFav) {
      FavCtx.removeFavHandler(props.id);
    } else {
      FavCtx.addFavHandler({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
        key: props.id,
      });
    }
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.description} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isFav ? 'remove from Favorites' : 'Add to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
