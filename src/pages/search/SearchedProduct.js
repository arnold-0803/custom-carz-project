import React, { useContext } from 'react'
import Navbar from '../../components/Navbar';
import { ServiceData } from '../../data/ServiceData';
import { useLocation } from 'react-router-dom';
import ProductCard from '../services/ProductCard';
import "./SearchedProductStyles.css";
import { ShopContext } from '../../context/ShoppingContext';

function SearchedProduct() {

  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  const lowercasedQuery = query.toLowerCase().trim();
  const filteredData = ServiceData.filter(item =>
    item.prodName && item.prodName.toLowerCase().includes(lowercasedQuery)
  );

  return (
    <div className="search-page">
      <Navbar cartCount={totalQuantity}/>
      <h1>{filteredData.length} Product(s) Found</h1>
      <div className="search-result">
        <ul>
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <li key={item.id}>
                <ProductCard data={item}/>
              </li>
            ))
          ) : (
            <li>No items found</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default SearchedProduct;
