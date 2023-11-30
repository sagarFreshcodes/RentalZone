import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image, H5 } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant";
import { useNavigate } from "react-router-dom";
import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS3, FS4, FS6, FS8, FS9 } from "../../../../CommonElements/Font/FS";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";

import { PRODUCT_DETAILS_ROUTE } from "../../../../Route/RouthPath";
const ProductCard = ({
  title, 
  picture, 
  specification,
}) => {
  const Navigate = useNavigate();
  const handleCatClick = () => {
    Navigate(`${PRODUCT_DETAILS_ROUTE}`);
  };
  return (
    <div className="productCardBox shadowEffect" onClick={handleCatClick}>
      <div className="cd_productImgBox">
        <Image attrImage={{ src: picture, alt: "vector women with leptop" }} />
        <div className="pd_price_box">
              <div className="startFrom">
                <FS3>Start From</FS3>
              </div>
              <div className="priceContent">
                <span className="priceNm">
                  <FS6>₹ 2,00,000/</FS6>
                </span>{" "}
                <span className="interval">
                  <FS3>Day</FS3>
                </span>
              </div>
            </div>
      </div> 
          <div className="greeting-user">
            <div className="tc-price_box">
              <div className="startFrom">
                <FS3>Start From</FS3>
              </div>
              <div className="priceContent">
                <span className="priceNm">
                  <FS6>₹ 2,00,000/</FS6>
                </span>{" "}
                <span className="interval">
                  <FS3>Day</FS3>
                </span>
              </div>
            </div>
            <FS6 attr={{ className: "f-w-600" }}>{title}</FS6>
            <div className="propertyList">
              <FS3> {specification?.join("  |  ")}</FS3>
            </div> 
          
          </div> 
         
    </div>
  );
};

export default ProductCard;
