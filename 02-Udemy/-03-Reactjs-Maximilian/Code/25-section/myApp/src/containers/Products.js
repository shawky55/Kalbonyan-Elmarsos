import React from 'react';
// import { useSelector } from 'react-redux';
import { useStore } from '../hooks-store/store';
import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductCcontext';
const Products = (props) => {
  const [state,dispatch] = useStore();
  // const productCtx = useContext(ProductContext);
  // console.log(productCtx.products);
  // const productList = useSelector(state => state.shop.products);
  return (
    <ul className="products-list">
      {state.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
