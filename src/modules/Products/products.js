// PÁGINA DE TODOS OS PRODUTOS
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import productsData from '../../data/products.json';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using the data from the imported JSON file
    setProducts(productsData);
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        <ProductCard products={products} />
      ) : (
        <div>Loading.....</div>
      )}
    </div>
  );
};

export default Products;
