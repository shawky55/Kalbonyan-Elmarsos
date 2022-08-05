import React from 'react';
import { useStore } from '../../hooks-store/store';
// import { useDispatch } from 'react-redux';
import { ProductContext } from '../../context/ProductCcontext';
import Card from '../UI/Card';
import './ProductItem.css';
// import { useContext } from 'react';
// import { toggleFav } from '../../store/actions/products';

const ProductItem = (props) => {
  const [state, dispatch] = useStore();
  // const productCtx = useContext(ProductContext);
  // const dispatch = useDispatch();

  const toggleFavHandler = () => {
    //   dispatch(toggleFav(props.id));
    // productCtx.toggleFav(props.id)
    dispatch('TOGGLE_FAV',props.id);
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
