import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image, H5 } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant";

import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS3, FS4, FS6, FS8, FS9 } from "../../../../CommonElements/Font/FS";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";
const TrandingCard = ({
  title,
  address1,
  address2,
  like,
  view,
  share,
  picture,
  statics,
  d1,
  d2,
  d3,
  d4,
}) => {
  return (
    <div className="trandCardBox">
      <Card className="profile-box">
        <CardBody className="d-flex">
          <div className="trandImgBox">
            <Image
              attrImage={{ src: LaptopPics, alt: "vector women with leptop" }}
            />
          </div>
          <div className="trandBody">
            <Media body>
              <div className="greeting-user">
                <FS9 attr={{ className: "f-w-600" }}>{title}</FS9>
                <div className="propertyList">
                  <FS6 attr={{ className: "w-100" }}><li>{d1}</li></FS6>
                  <FS6 attr={{ className: "w-100" }}><li>{d2}</li></FS6>
                  <FS6 attr={{ className: "w-100" }}><li>{d3}</li></FS6>
                  <FS6 attr={{ className: "w-100" }}><li>{d4}</li></FS6>
                </div>
<br />
                <span className="productRate"> <FS3  >{`Rent @`}</FS3><FS6  attr={{className:"BoldText"}}>{`$${share}`}</FS6></span>
               

                {/* <div className="T-number">
                  <div>📉 {statics}</div>
                  <div>❤️ {like}</div>
                  <div>👁️ {view}</div>
                  <div>📤 {share}</div>
                </div> */}
              </div>
            </Media>
            <div>
              <div className="badge f-10 p-0" id="txt" />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrandingCard;
