import { createContext, useState } from 'react';

const FavContext = createContext({
  favorites: [],
  totalFavorites: 0,
  removeFavHandler: (favId) => {},
  addFavHandler: (newFav) => {},
  itemIsFavHandler: (favId) => {},
});

export const FavContextProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  const addFavHandler = (newFav) => {
    setFavorites((prev) => {
      return prev.concat(newFav);
    });
  };
  const itemIsFavHandler = (favId) => {
    return favorites.some((meetup) => meetup.id === favId);
  };

  const removeFavHandler = (favId) => {
    setFavorites((prevFavorites) => {
      return prevFavorites.filter((prev) => prev.id !== favId);
    });
  };
  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    removeFavHandler: removeFavHandler,
    addFavHandler: addFavHandler,
    itemIsFavHandler: itemIsFavHandler,
  };
  return (
    <FavContext.Provider value={context}>{props.children}</FavContext.Provider>
  );
};
export default FavContext;