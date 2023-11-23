import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant";

import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS3, FS4 } from "../../../../CommonElements/Font/FS";
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
}) => {
  return (
    <div className="trandCardBox">
      <Card className="profile-box">
        <CardBody className="d-flex">
          <div className="trandBody">
            <Media body>
              <div className="greeting-user">
                <H4 attrH4={{ className: "f-w-600" }}>{title}</H4>
                <FS4 attr={{ className: "w-100" }}>{address1}</FS4>
                <FS3 attr={{ className: "w-100" }}>{address2}</FS3>

                <div className="T-number">
                  <div>📉 {statics}</div>
                  <div>❤️ {like}</div>
                  <div>👁️ {view}</div>
                  <div>📤 {share}</div>
                </div>
              </div>
            </Media>
            <div>
              <div className="badge f-10 p-0" id="txt" />
            </div>
          </div>
          <div className="trandImgBox">
            <Image
              attrImage={{ src: LaptopPics, alt: "vector women with leptop" }}
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default TrandingCard;
