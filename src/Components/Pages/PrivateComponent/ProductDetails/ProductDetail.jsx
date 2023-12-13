import React, { useState } from "react";
import slide1 from "../../../../assets/images/Essential/ProductDetail/slide1.png";
import slide2 from "../../../../assets/images/Essential/ProductDetail/slide2.png";
import slide3 from "../../../../assets/images/Essential/ProductDetail/slide3.png";
import slide4 from "../../../../assets/images/Essential/ProductDetail/slide4.png";
import slide5 from "../../../../assets/images/Essential/ProductDetail/slide5.png";
import { FS4, FS6 } from "../../../../CommonElements/Font/FS";
const ProductDetail = () => {
  const [fullscreenImg, setFullscreenImg] = useState(slide1);
  const [imgList, setImgList] = useState([slide2, slide3, slide4, slide5]);
  // <div className='pd_ProductDetail'>
  //   <img src={fullPage} className='fluid' alt="" />
  // </div>
  return (
    <>
      <div className="pd_ProductDetail">
        <div className="gallary">
          <div className="fullscreenImg">
            <img src={fullscreenImg} alt="" />
          </div>
          <div className="ImagList">
            {imgList.map((i) => {
              return (
                <>
                  {" "}
                  <img src={i} alt="" />
                </>
              );
            })}
          </div>
        </div>
        <div className="Description">
          <div className="title">
            <FS6>Description</FS6>
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
        </div>
        <div className="Specification">
          <div className="title">
            <FS6>Specification</FS6>
            <br /> 
          </div>
          <div className="content">
            {[
              { title: "Processor :", value: "Intel Core i7-10750H 10th Gen" },
              { title: "RAM :", value: "16 GB" },
              { title: "HDD :", value: "1 TB SSD" },
              { title: "Display :", value: `15.6" FHD 240Hz Display` },
              { title: "OS :", value: "Windows 10" },
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
