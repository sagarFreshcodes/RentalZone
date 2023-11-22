import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "rsuite";

// function Slider() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <div>
//           <img
//             className="sliderImg"
//             src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg"
//             alt=""
//           />
//         </div>
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div>
//           <img
//           className="sliderImg"
//             src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg"
//             alt=""
//           />
//         </div>
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <div>
//           <img
//             className="sliderImg"
//             src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg"
//             alt=""
//           />
//         </div>
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

const Slider = () => ( 
    <Carousel autoplay className="custom-slider">
      <img src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg" />
      <img src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg" />
      <img src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg" />
      <img src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg" />
      <img src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg" />
    </Carousel> 
);

export default Slider;
