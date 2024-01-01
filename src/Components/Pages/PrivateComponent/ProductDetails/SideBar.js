import React, { useState } from "react";
import { FS2, FS3, FS4, FS6, FS8 } from "../../../../CommonElements/Font/FS";
import share from "../../../../assets/images/Essential/ProductDetail/share.png";
import stars from "../../../../assets/images/Essential/ProductDetail/stars.png";
import Profile from "../../../../assets/images/Essential/ProductDetail/Profile.png";
import like from "../../../../assets/images/Essential/ProductDetail/like.png";
import CallButton from "../../../../assets/images/Essential/ProductDetail/CallButton.png";
import arrow from "../../../../assets/images/Essential/ProductDetail/arrow.png";
import location from "../../../../assets/images/Essential/ProductDetail/location.png";
import { CommonButton } from "../../../../CommonElements/Button";
import { CheckValidValue } from "../../../Common/Component/helperFunction";
import ChatModel from "../../Models/Chat/Chat";
const SideBar = ({ AllProps }) => {
  const {
    id,
    category_id,
    listing_id,
    user_id,
    site_id,
    product_name,
    product_slug,
    price,
    description,
    product_image,
    brand,
    model,
    is_approved,
    is_active,
    locations,
    user_phone_number,
    user_name,
    meta_title,
    meta_desc,
    created_at,
    updated_at,
  } = AllProps?.ProductDetails || {};
  const [chatModal, setChatModal] = useState(false);
  const toggle = () => {
    setChatModal(!chatModal);
  };
  const OnDial = () => {
    document.location.href = `tel:${user_phone_number}`;
  };

  return (
    <div className="pd_SideBar">
      <div className="p_description">
        <div className="startFrom">
          <div className="price">
            <FS2>Rent From</FS2>{" "}
            <FS8 attr={{ style: { color: "#FF7D18" } }}>₹ {price}/</FS8>{" "}
            {/* <FS2>Day</FS2> */}
          </div>
          <div className="action">
            <img src={share} alt="" /> <img src={like} alt="" />
          </div>
        </div>
        <div className="Description">
          <div className="title">
            <FS6>{product_name}</FS6>
            <br />
          </div>
          <div className="content">
            {[description].map((i) => {
              return (
                <>
                  {" "}
                  <FS4>
                    <li>{i}</li>
                  </FS4>
                </>
              );
            })}
          </div>
          <br />
          {/* <FS3>
            <img src={location} alt="" /> By Pass Road Tutikandi, Shimla
          </FS3> */}
        </div>

        <div className="contectAndPost">
          <div className="contect">
            <div className="title">
              <FS6>Contact Details</FS6> <img src={arrow} alt="arrow" />
            </div>
            <div className="name">
              <img src={Profile} alt="Profile" /> <FS4>{user_name}</FS4>
            </div>
            <div className="dial">
              <div className="commonbtn" onClick={toggle}>
                {" "}
                <CommonButton>Chat</CommonButton>{" "}
              </div>
              <div className="image" onClick={OnDial}>
                {" "}
                <img src={CallButton} alt="CallButton" />
              </div>
            </div>
          </div>

          <div className="postIn">
            <div className="title">
              <FS6>Posted In</FS6>{" "}
            </div>
            <div className="address">
              <img src={location} alt="location" />
              <FS3>
                &nbsp;{" "}
                {CheckValidValue(locations) ? locations : "Not mentioned"}
              </FS3>
            </div>
            <br />
            <div className="link">Google Map</div>
          </div>
        </div>

        <div className="General">
          <div className="title">
            <FS6>General</FS6>
            <br />
          </div>
          <div className="content">
            {[
              { title: "Model Number :", value: model },
              { title: "Brand :", value: brand },
            ].map((i) => {
              return (
                <>
                  {" "}
                  <div className="specifications">
                    <FS4 attr={{ className: "title" }}>{i.title}</FS4>{" "}
                    <FS4 attr={{ className: "value" }}>{i.value}</FS4>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        {/* <div className="review">
          <FS6>Review ~ The Product</FS6>
          <div className="productrate">
            <span className="d-flex">
              <span>
                {" "}
                <FS4>Rate This Product</FS4>
              </span>

              <span className="rate">
                {" "}
                <FS4>(0)</FS4>
              </span>
            </span>
            <img src={stars} alt="" />
          </div>
          <div className="reviewWriteForm">
            <div className="NameEmail">
              <div className="imputContainer">
                <div className="title">Name</div>
                <div className="inputBox">
                  <input type="text" />
                </div>
              </div>
              <div className="imputContainer">
                <div className="title">Email Id</div>
                <div className="inputBox">
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="textareaContainer">
              <div className="title">
                <span>Message</span> <span>(Maximum length 200)</span>
              </div>
              <div className="inputBox">
                <textarea type="text" />
              </div>
            </div>
            <br />
            <CommonButton> Submit Review </CommonButton>
          </div>
        </div> */}
      </div>
      <ChatModel toggler={toggle} isOpen={chatModal} />
    </div>
  );
};

export default SideBar;
