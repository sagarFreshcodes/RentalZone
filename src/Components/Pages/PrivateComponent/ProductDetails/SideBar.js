import React from "react";
import { FS2, FS3, FS4, FS6, FS8 } from "../../../../CommonElements/Font/FS";
import share from "../../../../assets/images/Essential/ProductDetail/share.png";
import stars from "../../../../assets/images/Essential/ProductDetail/stars.png";
import Profile from "../../../../assets/images/Essential/ProductDetail/Profile.png";
import like from "../../../../assets/images/Essential/ProductDetail/like.png";
import CallButton from "../../../../assets/images/Essential/ProductDetail/CallButton.png";
import arrow from "../../../../assets/images/Essential/ProductDetail/arrow.png";
import location from "../../../../assets/images/Essential/ProductDetail/location.png";
import { CommonButton } from "../../../../CommonElements/Button";
const SideBar = () => {
  return (
    <div className="pd_SideBar">
      <div className="p_description">
        <div className="startFrom">
          <div className="price">
            <FS2>Start From</FS2> <FS8 attr={{style:{color:"#FF7D18"}}}>₹ 10,000/</FS8> <FS2>Day</FS2>
          </div>
          <div className="action">
            <img src={share} alt="" /> <img src={like} alt="" />
          </div>
        </div>
        <div className="Description">
          <div className="title">
            <FS6>ASUS ROG Zephyrus M15 Gaming Laptop</FS6>
            <br />
          </div>
          <div className="content">
            {[
              "Intel Core i7 10 Gen",
              "RAM 16GB",
              "1TB SSD",
              "RTX 2060 6GB Graphics",
              "15.6",
              "FHD 240Hz Display",
            ].map((i) => {
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
          <FS3>
            <img src={location} alt="" /> By Pass Road Tutikandi, Shimla
          </FS3>
        </div>

        <div className="contectAndPost">
          <div className="contect">
            <div className="title">
              <FS6>Contact Details</FS6> <img src={arrow} alt="arrow" />
            </div>
            <div className="name">
              <img src={Profile} alt="Profile" /> <FS4>Vincent Porter</FS4>
            </div>
            <div className="dial">
              <CommonButton>Chat With Seller</CommonButton>{" "}
              <img src={CallButton} alt="CallButton" />
            </div>
          </div>

          <div className="postIn">
            <title>Posted In</title>
            <div className="address">
              <img src={location} alt="location" />
              <FS3>By Pass Road Tutikandi, Shimla, India</FS3>
            </div>
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
              { title: "Model Number :", value: "ZephyrusM15" },
              { title: "Brand :", value: "ASUS" },
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

        <div className="review">
          <div className="title">Review ~ The Product</div>
          <div className="productrate">
            <span>
              Rate This Product <span className="rate">(0)</span>
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

            <CommonButton> Submit Review </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
