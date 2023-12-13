import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "rsuite";

 

const Slider = ({image_urls}) => ( 
    <Carousel autoplay className="custom-slider">
      <img src={image_urls[0]?.image_url} />
      <img src={image_urls[1]?.image_url} />
      <img src={image_urls[2]?.image_url} />
      <img src={image_urls[3]?.image_url} /> 
      {/* <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_packersmovers.png?v=1.1" /> 
      <img src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_hotels.png?v=1.0" /> */}
     
    </Carousel> 
);

export default Slider;
