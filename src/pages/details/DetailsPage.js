import React, { useContext } from 'react';
import "./DetailsPageStyles.css";
import DetailsItems from './DetailsItems';
import { useParams } from 'react-router-dom';
import { ImagesData } from '../../data/GalleryData';
import Navbar from '../../components/Navbar';
import { ShopContext } from '../../context/ShoppingContext';

function DetailsPage() {

  const {id} = useParams();
  const item = ImagesData.find(items => items.id === Number(id));
  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();
  
  return (
    <div className="details-page">
      <Navbar cartCount={totalQuantity}/>
      <div className='container'>
        <h1>More About this Gallery</h1>
        <DetailsItems data={item}/>
      </div>
    </div>
  )
}

export default DetailsPage;
