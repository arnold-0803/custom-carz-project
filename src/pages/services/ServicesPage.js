import { useContext, useState } from "react";
import Hero from "../../components/HeroSection";
import Navbar from "../../components/Navbar";
import { ServiceData } from "../../data/ServiceData";
import image from "../images/image20.jpg";
import "./ServicesPageStyles.css";
import { ShopContext } from "../../context/ShoppingContext";
import ProductCard from "./ProductCard";
import CustomPagination from "../../components/PagesPagination";


const Service = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerpage = 12;

  const indexOfLastItem = currentPage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;
  const currentItems = ServiceData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ServiceData.length / itemsPerpage);

  return (
    <div className="service-page">
      <Navbar cartCount={totalQuantity}/>
      <Hero
        heading="Services"
        image={image}
        className="service"
      />
      <div className="
      service-wrapper">
        <h1>Shop Add to Cart</h1>
        <div className="product-wrapper">
          {currentItems.map((item) => (
            <ProductCard data={item} key={item.id}/>
          ))}
        </div>
        <CustomPagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}
 
export default Service;