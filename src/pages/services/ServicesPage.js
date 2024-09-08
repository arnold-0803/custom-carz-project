import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { ServiceData } from "../../data/ServiceData";
import image from "../../images/pix/_.jpeg";
import "./ServicesPageStyles.css";
import { ShopContext } from "../../context/ShoppingContext";
import ProductCard from "./ProductCard";
import CustomPagination from "../../components/PagesPagination";
import HeroBanner from "../../components/HeroBanner";


const Service = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuantity = getTotalQuantity();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerpage = 12;

  const indexOfLastItem = currentPage * itemsPerpage;
  const indexOfFirstItem = indexOfLastItem - itemsPerpage;
  const currentItems = ServiceData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ServiceData.length / itemsPerpage);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  const serviceData = [
    {
      id: 1,
      heading: "Services",
      subHeading: "At Auto Carz Corp",
      additionalHeading: "Read More on the Service We Provide",
      image: image,
      paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus mollitia veniam dolor saepe? Nesciunt ipsam error, quidem enim explicabo suscipit sit vitae voluptas itaque tenetur, totam excepturi officiis? Molestiae, doloremque.",
      transportIcon: "fa-solid fa-truck-fast",
      costIcon: "fa-solid fa-dollar-sign",
      communicationIcon: "fa-solid fa-headset"
    }
  ];

  return (
    <div className="service-page">
      <Navbar cartCount={totalQuantity}/>
      <HeroBanner
        data={serviceData}
        customClass="service-banner"
      />
      <div className="
      service-wrapper">
        <h1>Shop Products</h1>
        <ul className="product-wrapper">
          {currentItems.map((item) => (
            <li key={item.id}>
              <ProductCard data={item}/>
            </li>
          ))}
        </ul>
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