import React from "react";
import man_model from "../../../../assets/images/Essential/AuthComponent/man_model.png";
import True from "../../../../assets/images/Essential/AuthComponent/True.png";
import message from "../../../../assets/images/Essential/AuthComponent/message.png";

import customerService from "../../../../assets/images/Essential/AuthComponent/customerService.png";
import { FS23, FS6, FS8 } from "../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../CommonElements/Button";
import PhoneInput from "./PhoneInput";

const onChange = (e)=>{
console.log("test2512",e);
}
const ListBusiness = () => {
  return (
    <div className="ListBusiness">
      <div className="lb-left">
        <div className="titleBar">
          <div className="title">
            <FS23>List Your Business </FS23> &nbsp; &nbsp;&nbsp;
            <FS23 attr={{ className: `forFree` }}>for FREE</FS23>{" "}
          </div>
          <div className="slogan">
            <FS8>with India’s No. 1 Local Search Engine</FS8>
          </div>
        </div>

        <PhoneInput onChange={onChange}/>

        <div className="FacilityBox">
          {[
            `Get Discovered and Create Your Online Business`,
            `Respond to Customer Reviews and Questions`,
            `Showcase Your Product and Service Offerings`,
          ].map((i) => {
            return (
              <>
                <div className="facility">
                  <img src={True} alt="" /> <FS6>{i}</FS6>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="lb-right">
        <img src={man_model} alt="" />
      </div>
    </div>
  );
};

export default ListBusiness;
