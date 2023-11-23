import React from "react";
import { Link } from "react-router-dom";
import { H4, Image } from "../../../AbstractElements";
import fireImage from "../../../assets/images/giftools.gif";
import Slider from "react-slick";
import { notificationSliderOption } from "./NotificationSliderOption";

const NotificationSlider = () => {
  return (
    <div className="notification-slider overflow-hidden ">
      <Slider className="m-0" {...notificationSliderOption}>
        <div className="d-flex h-2">
          {/* <Image attrImage={{ src: fireImage, alt: 'gif' }} /> */}
          <H4 attrH6={{ className: "mb-0 f-w-400" }}>
            <span className="font-primary">‘3.3 Crore+‘ </span>
            <span className="f-light">Businesses</span>
          </H4>
          <i className="icon-arrow-top-right f-light" />
        </div>
        <div className="d-flex h-2">
          {/* <Image attrImage={{ src: fireImage, alt: 'gif' }} /> */}
          <H4 attrH6={{ className: "mb-0 f-w-400" }}> 
            <span className="font-primary">‘4 Crore+‘ </span>
            <span className="f-light"> Products & Services</span>
          </H4>
          <Link
            className="ms-1"
            to="https://1.envato.market/3GVzd"
            target="_blank"
          >
           
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default NotificationSlider;
