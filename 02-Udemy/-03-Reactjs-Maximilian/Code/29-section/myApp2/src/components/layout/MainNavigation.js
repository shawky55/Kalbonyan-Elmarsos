import React from 'react';
import { Link } from 'react-router-dom';
import FavContext from '../../store/FavContext';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';
function MainNavigation(props) {
  const favCtx = useContext(FavContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meetups</Link>
          </li>
          <li>
            <Link to="/favorites-meetups">Favorites Meetups</Link>
            <span className={classes.badge}>{favCtx.totalFavorites}</span>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
