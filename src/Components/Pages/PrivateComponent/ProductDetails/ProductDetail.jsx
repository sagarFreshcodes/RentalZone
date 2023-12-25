import React, { useState } from "react";
import slide1 from "../../../../assets/images/Essential/ProductDetail/slide1.png";
import slide2 from "../../../../assets/images/Essential/ProductDetail/slide2.png";
import slide3 from "../../../../assets/images/Essential/ProductDetail/slide3.png";
import slide4 from "../../../../assets/images/Essential/ProductDetail/slide4.png";
import slide5 from "../../../../assets/images/Essential/ProductDetail/slide5.png";
import { FS4, FS6 } from "../../../../CommonElements/Font/FS";
import {
  CheckValidImage,
  CheckValidValue,
} from "../../../Common/Component/helperFunction";
const ProductDetail = ({ AllProps }) => {
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
    meta_title,
    meta_desc,
    created_at,
    updated_at,
  } = AllProps?.ProductDetails || {};
  const { banner_image } = AllProps;
  const [fullscreenImg, setFullscreenImg] = useState(slide1);
  const [imgList, setImgList] = useState([
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
  ]);

  return (
    <>
      <div className="pd_ProductDetail" onClick={() => console.log()}>
        <div className="gallary">
          <div className="fullscreenImg">
            <img src={CheckValidImage(product_image, fullscreenImg)} alt="" />
          </div>
          {/* <div className="ImagList">
            {imgList
              .filter((i) => i != fullscreenImg)
              .map((i) => {
                return (
                  <>
                    {" "}
                    <img src={i} onClick={() => setFullscreenImg(i)} alt="" />
                  </>
                );
              })}
          </div> */}
          <div className="bannerImage">
            <img className="w-100" src={banner_image} alt={"banner_image"} />
          </div>
        </div>
        <div className="Description">
          <div className="title">
            <FS6>Description</FS6>
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
        </div>
        <div className="Specification">
          <div className="title">
            <FS6>Specification</FS6>
            <br />
          </div>
          <div className="content">
            {[
              {
                title: "Approved :",
                value: CheckValidValue(is_approved, "null", true),
              },
              {
                title: "Active :",
                value: CheckValidValue(is_active, "null", true),
              },
              {
                title: "Site Id :",
                value: CheckValidValue(site_id, "null", true),
              },
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
      </div>{" "}
    </>
  );
};

export default ProductDetail;
