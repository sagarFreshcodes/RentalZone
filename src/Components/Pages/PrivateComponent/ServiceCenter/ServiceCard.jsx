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
import callnow from "../../../../assets/images/Essential/callnow.png";
import getquot from "../../../../assets/images/Essential/getquot.png";
import call_w from "../../../../assets/images/Essential/call_w.png";
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
  AllProps,
}) => {
  const { serviceData, setServiceData, toggle, toggle2 } = AllProps;
  const Navigate = useNavigate();
  const handleCatClick = () => {
    Navigate(`${CATEGORY_DETAILS_ROUTE}/Dubai`);
  };
  return (
    <>
      <div className="sc_cardBoxPerent shadowEffect">
        <div className="sc_cardBox">
          <div className="serviceImgBox">
            <Image
              attrImage={{ src: burncastle, alt: "vector women with leptop" }}
            />

            <div className="price_box">
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
          <div className="serviceBody">
            <div className="sc_cardBoxLeft">
              <FS6
                attr={{
                  className: "f-w-600 lh-1.2 title cursorPointer",
                  onClick: handleCatClick,
                }}
              >
                {title}
              </FS6>
              <div className="sc-number">
                <div className="greenRateBox  un">4.6</div>
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
              <div className="sp_cat_list">
                {[
                  "cat1",
                  "cat2",
                  "cat3",
                  "cat4",
                  "cat1",
                  "cat2",
                  "cat3",
                  "cat4",
                ].map((c) => (
                  <div className="sp_category">
                    {" "}
                    <FS3>{c}</FS3>
                  </div>
                ))}

                <div className="sp_category2">
                  {" "}
                  <FS3>
                    {[
                      "cat1",
                      "cat2",
                      "cat3",
                      "cat4",
                      "cat1",
                      "cat2",
                      "cat3",
                      "cat4",
                      "cat1",
                      "cat2",
                      "cat3",
                      "cat4",
                    ].join(", ")}
                  </FS3>
                </div>
              </div>

              <FS3 attr={{ className: "singleLineContent" }}>
                {" "}
                <Image attrImage={{ src: location, alt: "verrify" }} /> By Pass
                Road Tutikandi, Shimla
              </FS3>

              <div className="sp_card_box">
                <button className="btn btn-success callNow bottonHover">
                  {" "}
                  <FS3>Call Now</FS3>
                </button>{" "}
                <button
                  className="btn btn-success getQots un bottonHover"
                  onClick={toggle}
                >
                  <FS3>Get Quote Now</FS3>
                </button>{" "}
                <button className="btn btn-light bottonHover" onClick={toggle2}>
                  <FS3>
                    {" "}
                    <Image
                      attrImage={{ src: wapp, alt: "message" }}
                    /> Chat{" "}
                  </FS3>
                </button>{" "}
              </div>

              <div className="leftside_right_bottom un">
                <FS2 attr={{ className: "BoldText" }}>
                  Respond in <span className="sc_since">2 Hours</span>
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

        <div
          className="sp_button_box locationBox
"
        >
          {/* <FS3 attr={{ className: "w-90" }}>
            {" "}
            <Image attrImage={{ src: location, alt: "verrify" }} /> By Pass Road
            Tutikandi, Shimla
          </FS3> */}

          {/* <div className="price_box_responsive">
            <div className="startFrom">
              <FS3 attr={{ className: "lh-1" }}>Start From</FS3>
            </div>
            <div className="priceContent">
              <span className="priceNm">
                <FS6 attr={{ className: "lh-1" }}>₹ 2,00,000/</FS6>
              </span>{" "}
              <span className="interval">
                <FS3 attr={{ className: "lh-1" }}>Day</FS3>
              </span>
            </div>
          </div> */}
        </div>
        <div
          className="sp_button_box
"
        >
          {" "}
          <button className="btn btn-success ">
            {" "}
            <FS3>
              {" "}
              <Image attrImage={{ src: call_w, alt: "message" }} /> Call Now{" "}
            </FS3>
          </button>{" "}
          <button className="btn btn-light" onClick={toggle2}>
            <FS3>
              {" "}
              <Image attrImage={{ src: wapp, alt: "message" }} /> Chat{" "}
            </FS3>
          </button>{" "}
          <button className="btn btn-primary star" onClick={toggle}>
            {" "}
            <FS3>
              <Image attrImage={{ src: getquot, alt: "message" }} /> Get Quote
              Now{" "}
            </FS3>
          </button>{" "}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
