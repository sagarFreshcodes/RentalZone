import React from "react";
import { Card, CardBody, Col, Media } from "reactstrap";
import { H4, P, Btn, Image } from "../../../../AbstractElements";
import { WelcomeMessage, WelcomeToCuba, WhatsNew } from "../../../../Constant"; 
import { useNavigate } from "react-router-dom";
import CarToon from "../../../../assets/images/dashboard/cartoon.svg";
import { FS2, FS3, FS4, FS6, FS8 } from "../../../../CommonElements/Font/FS";
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
import TopSearch from "../../../../assets/images/Essential/TopSearch.png";
import { CATEGORY_DETAILS_ROUTE } from "../../../../Route/RouthPath";

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
  const Navigate = useNavigate();
  const handleCatClick = () => {
    Navigate(`${CATEGORY_DETAILS_ROUTE}/Dubai`);
  };
  return (
    <div className="sc_cardBox">
      <div className="serviceImgBox">
        <Image
          attrImage={{ src: burncastle, alt: "vector women with leptop" }}
        />
      </div>
      <div className="serviceBody">
        <div className="sc_cardBoxLeft" onClick={handleCatClick}>
          <FS6 attr={{ className: "f-w-600 lh-1.2" }}>{title}</FS6>
          <div className="sc-number">
            <div className="greenRateBox">4.6</div>
            <div className="d-flex rStar">
              {" "}
              {[1, 2, 3, 4, 5].map((i) => (
                <Image attrImage={{ src: start, alt: "star" }} />
              ))}
            </div>
            <div className="un">1110 Rating</div>
            <div className="verrify un">
              {" "}
              <Image attrImage={{ src: verrify, alt: "verrify" }} />
            </div>
          </div>
          <div className="sp_cat_list un">
            {["cat1", "cat2", "cat3", "cat4"].map((c) => (
              <div className="sp_category">
                {" "}
                <FS3>{c}</FS3>
              </div>
            ))}
          </div>
          <FS3 attr={{ className: "w-90 un" }}>
            {" "}
            <Image attrImage={{ src: location, alt: "verrify" }} /> By Pass Road
            Tutikandi, Shimla
          </FS3>

          <div className="sp_card_box">
            <button className="btn btn-success callNow">
              {" "}
              <FS3>Call Now</FS3>
            </button>{" "}
            <button className="btn btn-success getQots">
              <FS3>Get Quote Now</FS3>
            </button>{" "}
            <button className="btn btn-light">
              <FS3>
                {" "}
                <Image attrImage={{ src: wapp, alt: "message" }} /> Chat{" "}
              </FS3>
            </button>{" "}
          </div>

          <div className="leftside_right_bottom un">
            <FS2 attr={{className:"BoldText"}}>
              Respond in <span className="sc_since">2 Hours</span>
              &nbsp;&nbsp;&nbsp;
            </FS2>
            <div className="d-flex pb-4">
              <span className="chartBox">
                {" "}
                <Image attrImage={{ src: chart || unlike, alt: "like" }} />
              </span>
              <FS2 attr={{className:"BoldText"}}>42 People recently enquired</FS2>&nbsp;&nbsp;&nbsp;
            </div>

            <div className="Popular">
              {" "}
              <Image
                attrImage={{ src: Popular || unlike, alt: "Popular" }}
              />{" "}
            </div>
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
            <FS2 attr={{ className: "BoldText" }}>
              Respond in <span className="green_text">2 Hours</span>
              &nbsp;&nbsp;&nbsp;
            </FS2>
            <div className="d-flex pb-4">
              <span className="chartBox">
                {" "}
                <Image attrImage={{ src: chart || unlike, alt: "like" }} />
              </span>
              <FS2 attr={{ className: "BoldText" }}>
                42 People recently enquired
              </FS2>
              &nbsp;&nbsp;&nbsp;
            </div>

            <div className="Popular">
              {" "}
              <Image
                attrImage={{ src: Popular || unlike, alt: "Popular" }}
              />{" "}
            </div>
          </div>
        </div>

        <div>
          <div className="badge f-10 p-0" id="txt" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
