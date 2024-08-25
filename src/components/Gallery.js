import { Link } from "react-router-dom";
import { ImagesData } from "../data/GalleryData";
import "./GalleryStyles.css";
import { useEffect, useState } from "react";
import SkeletonGallarey from "../assets/SkeletonGallarey";

const GalleryPage = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000)
  }, [])
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <p><strong>our top classic selection</strong></p>
      <div className="gallery-box">
        {ImagesData.map((item) =>
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
    </div>
  );
}
 
export default GalleryPage;