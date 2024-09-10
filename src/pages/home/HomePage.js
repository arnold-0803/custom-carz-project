import { useContext } from "react";
import GalleryPage from "../../components/Gallery";
import Navbar from "../../components/Navbar";
import img1 from "../../images/image1.jpg";
import img2 from "../../images/image2.jpg";
import img3 from "../../images/image3.jpg";
import img4 from "../../images/image4.jpg";
import img5 from "../../images/image5.jpeg";
import image1 from "../../images/pix/HOSPITAL_ABANDONADO-removebg-preview.png";
import image2 from "../../images/pix/c80de96d-26ee-47f0-861c-ce9319001919-removebg-preview.png";
import { ShopContext } from "../../context/ShoppingContext";
import AchievementElementor from "../../components/AchievementElementor";
import SwiperScreen from "../../components/SwiperScreen";
import ClientsReviews from "../../components/ClientsReviews";
import PartnersSlideScreen from "../../components/PartnersSlideScreen";
import { AboutPartnersData } from "../../data/AboutData";


// HeroSwiper data
const slideScreenData = [
  {
    id: 1,
    image: image1,
    heading: "Custom Auto Carz Corp",
    subheading: "Welcome to",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae eius. Atque voluptas voluptatum similique. Enim possimus recusandae itaque quisquam ex fugiat magni ad aliquam distinctio. Beatae earum accusamus alias, rem minus fuga ipsa voluptates!"
  },
  {
    id: 2,
    image: image2,
    heading: "Custom Auto Carz Corp",
    subheading: "Welcome to",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, repudiandae eius. Atque voluptas voluptatum similique. Enim possimus recusandae itaque quisquam ex fugiat magni ad aliquam distinctio. Beatae earum accusamus alias, rem minus fuga ipsa voluptates!"
  }
]


// Review data from clients
const ReviewsData = [
  {
    id: 1,
    image: img1,
    name: "Person 1",
    testimony: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi!"'
  },
  {
    id: 2,
    image: img2,
    name: "Person 2",
    testimony: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi!"'
  },
  {
    id: 3,
    image: img3,
    name: "Person 3",
    testimony: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi!"'
  },
  {
    id: 4,
    image: img4,
    name: "Person 4",
    testimony: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi!"'
  },
  {
    id: 5,
    image: img5,
    name: "Person 5",
    testimony: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolor quos eum deleniti accusantium odio corporis, temporibus vitae repellendus doloremque sint commodi!"'
  }
]

const Home = () => {

  const {getTotalQuantity} = useContext(ShopContext);
  const totalQuntity = getTotalQuantity();

  return (
    <div className="home">
      <Navbar cartCount={totalQuntity}/>
      <div className="hero-section-wrapper">
        <SwiperScreen
          data={slideScreenData}
          autoplay={{delay: 2200, disableOnInteraction: false,}}
          spaceBetween={5}
          navigation={true}
          pagination={true}
          loop={false}
          customClass="hero-swiper"
        />
      </div>

      <GalleryPage/>

      <ClientsReviews data={ReviewsData}/>

      <AchievementElementor/>

      <PartnersSlideScreen
        data={AboutPartnersData}
      />
    </div>
  );
}
 
export default Home;