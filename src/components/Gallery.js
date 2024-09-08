import { Link } from "react-router-dom";
import { ImagesData } from "../data/GalleryData";
import "./GalleryStyles.css";
import { useEffect, useState } from "react";
import SkeletonGallarey from "../assets/SkeletonGallarey";
import CustomPagination from "./PagesPagination";

const GalleryPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ImagesData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(ImagesData.length / itemsPerPage);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  // scroll to top whenever the page changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [currentPage]);

  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p><strong>our top classic selection</strong></p>
      <div className="gallery-box">
        {currentItems.map((item) =>
          <div key={item.id} className="card-box">
            {isLoading ? (
              <SkeletonGallarey/>
            ) : (
              <div className="card">
                <Link to={`/details/${item.id}`}>
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                  <div className="gradient"></div>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
      <CustomPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
 
export default GalleryPage;