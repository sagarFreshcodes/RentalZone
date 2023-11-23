import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant";

import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS3, FS4 } from "../../../../CommonElements/Font/FS";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";
const ServiceCard = ({
  title,
  address1,
  address2,
  like,
  view,
  share,
  picture,
  statics,
}) => {
  return (
    <Col className="col-xxl-12 col-md-12 col-sm-12  ">
      <Card className="profile-box">
        <CardBody className="d-flex">
          <div className="serviceImgBox">
            <Image
              attrImage={{ src: LaptopPics, alt: "vector women with leptop" }}
            />
          </div>
          <div className="serviceBody">
            <Media body>
              <div className="greeting-user">
                <H4 attrH4={{ className: "f-w-600" }}>{title}</H4>
                <FS4 attr={{ className: "w-90" }}>{address1}</FS4>
                <FS3 attr={{ className: "w-90" }}>{address2}</FS3>

                <div className="T-number">
                  <div>📉 Write Review</div>
                  <div>❤️ Mumbai</div>
                  <div>👁️ Call Now</div>
                  <div>📤 Get Quotes</div>
                </div>
              </div>
            </Media>
            <div>
              <div className="badge f-10 p-0" id="txt" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ServiceCard;
