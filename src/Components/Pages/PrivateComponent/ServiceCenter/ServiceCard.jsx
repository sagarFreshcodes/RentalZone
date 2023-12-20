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
import {
  BASE_ROUTE,
  CATEGORY_DETAILS_ROUTE,
} from "../../../../Route/RouthPath";

const ServiceCard = ({
  title,
  AllProps,
  address,
  area,
  area_name,
  category,
  city,
  city_name,
  contact_person,
  country,
  description,
  email,
  id,
  is_approved,
  listing_type,
  main_listing_id,
  name,
  phone_number,
  pincode,
  rates,
  rates_per,
  show_mobile,
  show_on_area_page,
  show_website,
  slug,
  state,
  user_id,
  website,
  BreadcrumData,
  item,
  featured,
}) => {
  const { serviceData, setServiceData, toggle, toggle2 } = AllProps;
  const Navigate = useNavigate();

  const handleCatClick = () => {
    Navigate(`${BASE_ROUTE}/${slug}-${main_listing_id}`, {
      state: { BreadcrumData: BreadcrumData },
    });
  };

  const imgList = [
    LaptopPics,
    `https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1575024357670-2b5164f470c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D`,
    `https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1590769398823-a62d7ecc25e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1612425626229-632fab8bfc02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIzfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1615750173609-2fbf12fd1d2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
    `https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxsYXB0b3B8ZW58MHx8MHx8fDA%3D`,
  ];
  const RandomImg = imgList[Math.floor(Math.random() * imgList.length)];
  const OnDial = () => {
    document.location.href = `tel:${phone_number}`;
  };
  return (
    <>
      <div className="sc_cardBoxPerent shadowEffect">
        <div className="sc_cardBox">
          <div className="serviceImgBox" onClick={() => console.log(item)}>
            {/* <Image
              attrImage={{ src: burncastle, alt: "vector women with leptop" }}
            /> */}
            <Image attrImage={{ src: RandomImg, alt: "leptop image" }} />
            {/* {featured?} */}
            <div className="Featured">Featured</div>
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
                {name}
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
                <div
                  className={`verrify un ${
                    is_approved == "Yes" ? "" : "d-none"
                  }`}
                >
                  {" "}
                  <Image attrImage={{ src: verrify, alt: "verrify" }} />
                </div>
              </div>
              <div className="sp_cat_list">
                {category.map((c) => (
                  <div className="sp_category">
                    {" "}
                    <FS3>{c}</FS3>
                  </div>
                ))}

                <div className="sp_category2">
                  {" "}
                  <FS3>{[category].join(", ")}</FS3>
                </div>
                <FS3 attr={{ className: "areaName" }}>
                  {area_name ? `${area_name},` : ""}
                  {city_name}
                </FS3>
              </div>

              <FS3 attr={{ className: "singleLineContent" }}>
                {" "}
                <Image attrImage={{ src: location, alt: "verrify" }} />{" "}
                {address}
              </FS3>

              <div className="sp_card_box">
                <button
                  className="btn btn-success callNow bottonHover"
                  onClick={OnDial}
                >
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
        ></div>
        <div
          className="sp_button_box
"
        >
          {" "}
          <button className="btn btn-success " onClick={OnDial}>
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
