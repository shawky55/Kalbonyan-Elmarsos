import React from 'react';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductCcontext';
import FavoriteItem from '../components/Favorites/FavoriteItem';
import './Products.css';
import { useStore } from '../hooks-store/store';

const Favorites = (props) => {
  // const favoriteProducts = useSelector(state =>
  //   state.shop.products.filter(p => p.isFavorite)
  // );
  const [state,dispatch]=useStore();
  const porductsCtx = useContext(ProductContext);
  // const favProduct = porductsCtx.products.filter(
  //   (fproduct) => fproduct.isFavorite
  // );
  const favProduct = state.products.filter((porduct) => porduct.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (favProduct.length > 0) {
    content = (
      <ul className="products-list">
        {favProduct.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
