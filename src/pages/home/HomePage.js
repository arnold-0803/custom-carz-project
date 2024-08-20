import GalleryPage from "../../components/Gallery";
import Navbar from "../../components/Navbar";
import Reviews from "../../components/ReviewSwiper";
import Swiper from "../../components/Swiper";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpeg";

const Home = () => {

  return (
    <div className="home">
      <Navbar/>
      <Swiper
        subHeading="Welcome at the"
        heading="Custom Carz Corp."
        text="
        Lorem ipsum dolor sit, 
        amet consectetur adipisicing 
        elit. Vitae magnam odio 
        mollitia exercitationem dicta 
        quae eligendi saepe blanditiis 
        consectetur sequi recusandae 
        amet fugit sunt dolores, id 
        animi possimus similique esse.
        "
      />

      <GalleryPage/>

      <Reviews
        heading="Testimonial Previews"

        text1="
          Lorem ipsum dolor sit 
          amet consectetur 
          adipisicing elit. 
          Repudiandae aliquid at 
          consectetur delectus 
          labore ratione minima, 
          fugit dolor quos eum 
          deleniti accusantium odio 
          corporis, temporibus vitae 
          repellendus doloremque 
          sint commodi!
        "
        text2="
          Lorem ipsum dolor sit 
          amet consectetur 
          adipisicing elit. 
          Repudiandae aliquid at 
          consectetur delectus 
          labore ratione minima, 
          fugit dolor quos eum 
          deleniti accusantium odio 
          corporis, temporibus vitae 
          repellendus doloremque 
          sint commodi!
        "
        text3="
          Lorem ipsum dolor sit 
          amet consectetur 
          adipisicing elit. 
          Repudiandae aliquid at 
          consectetur delectus 
          labore ratione minima, 
          fugit dolor quos eum 
          deleniti accusantium odio 
          corporis, temporibus vitae 
          repellendus doloremque 
          sint commodi!
        "

        image1={img1}
        image2={img2}
        image3={img3}
        image4={img4}
        image5={img5}

        name1="Name"
        name2=""
        name3=""
      />
    </div>
  );
}
 
export default Home;