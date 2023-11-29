import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant";

import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS2, FS3, FS4, FS8 } from "../../../../CommonElements/Font/FS";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";
import burncastle from "../../../../assets/images/Essential/burncastle.png";
import location from "../../../../assets/images/Essential/location.png";
import start from "../../../../assets/images/Essential/start.png";
import verrify from "../../../../assets/images/Essential/verrify.png";
import wapp from "../../../../assets/images/Essential/wapp.png";
import likes from "../../../../assets/images/Essential/like.png";
import unlike from "../../../../assets/images/Essential/unlike.png";
import chart from "../../../../assets/images/Essential/chart.png";
import Popular from "../../../../assets/images/Essential/Popular.png";
import edit from "../../../../assets/images/Essential/edit.png";
import shareFill from "../../../../assets/images/Essential/share-fill.png";
import halfStart from "../../../../assets/images/Essential/halfStart.png";
import claim from "../../../../assets/images/Essential/claim.png";
import phone from "../../../../assets/images/Essential/phon.png";
const CategoryCard = ({ title }) => {
  return (
    <div className="sc_cardBox">
      <div className="cd-serviceImgBox">
        <Image
          attrImage={{src: burncastle, alt: "vector women with leptop" }}
        />
      </div>
      <div className="cat_details_Body">
        <div className="cd_cardBoxLeft ">
        <FS8 attr={{ className: "f-w-600 lh-1" }}>{title}</FS8>
          <div className="sc-number">
            <div className="greenRateBox">4.6</div>
            <div className="d-flex rStar">
              {" "}
              {[1, 2, 3, 4, 5].map((i) => (
                <Image attrImage={{ src: start, alt: "star" }} />
              ))}
            </div>
            <div>1110 Rating</div>
            <div className="verrify un">
              {" "}
              <Image attrImage={{ src: verrify, alt: "verrify" }} />
            </div>
            <div className="verrify un">
              {" "}
              <Image attrImage={{ src: claim, alt: "verrify" }} />{" "}
              <span>Claimed</span>
            </div>
          </div>
          <div className="sp_cat_list">
            {["cat1", "cat2", "cat3", "cat4"].map((c) => (
              <div className="sp_category">
                {" "}
                <FS3>{c}</FS3>
              </div>
            ))}
          </div>
          <div className="cd-address">
            <FS3 attr={{className:"lh-1"}}>
              {" "}
              <Image attrImage={{ src: location, alt: "location" }} /> By Pass
              Road Tutikandi, Shimla &nbsp;&nbsp;
            </FS3>

            <FS2 attr={{ className: "BoldText d-flex un" }}>
              <span className="green_text un">
                <li>Opens</li>
              </span>{" "}
              <span className="un"> in 1 mins</span>&nbsp;&nbsp;{" "}
              <span>
                <li>11 Years in Business</li>
              </span>
              &nbsp;&nbsp;
            </FS2>
          </div>

          <div className="cd_card_box d-flex un">
            <FS2 attr={{ className: "BoldText" }}>
              Respond in <span className="green_text">2 Hours</span>
              &nbsp;&nbsp;&nbsp;
            </FS2>
            <div className="d-flex un">
              <span className="chartBox">
                {" "}
                <Image attrImage={{ src: chart || unlike, alt: "like" }} />
              </span>
              <FS2 attr={{ className: "BoldText" }}>
                42 People recently enquired
              </FS2>
              &nbsp;&nbsp;&nbsp;
            </div>
          </div>
          <div className="cd_card_box cd_button_box">
            <button className="btn btn-light callNow buttonShadow">
              {" "}
              <FS3><Image attrImage={{ style:{width:"25px !important"},src: phone, alt: "message" }} /> Call Now</FS3>
            </button>{" "}
            <button className="btn btn-light buttonShadow">
              <FS3>
                {" "}
                <Image attrImage={{ src: wapp, alt: "message" }} /> Chat{" "}
              </FS3>
            </button>{" "}
            <button className="btn btn-light buttonShadow">
              <FS3>
                {" "}
                <Image attrImage={{ src: halfStart, alt: "message" }} /> Tap to
                Rate{" "}
              </FS3>
            </button>{" "}
            <button className="btn btn-light buttonShadow">
              <FS3>
                {" "}
                <Image
                  attrImage={{ src: shareFill, alt: "message" }}
                /> Share{" "}
              </FS3>
            </button>{" "}
            <button className="btn btn-light buttonShadow">
              <FS3>
                {" "}
                <Image attrImage={{ src: edit, alt: "message" }} /> Edit{" "}
              </FS3>
            </button>{" "}
          </div>
        </div>
        <div className="sc_cardBoxRight">
          <div className="right_top">
            {" "}
            <div className="likeUnlike">
              <Image attrImage={{ src: likes || unlike, alt: "like" }} />{" "}
            </div>
          </div>
          <div className="right_bottom">
          <div className="d-flex jointButton">
          <button className="btn btn-light ">
              <FS3> Project On Rent </FS3>
            </button>{" "} &nbsp;

            <button className="btn btn-light">
              <FS3>Top Rated Hotel </FS3>
            </button>{" "}
          </div>
        
            <button className="btn btn-light bestDeal">
              <FS3>Best Deal </FS3>
              <FS3>Get free details instantly via SMS</FS3>
            </button>{" "}
          </div>
        </div>

        <div>
          <div className="badge f-10 p-0" id="txt" />
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
