import React, { useState } from "react";
import man_model from "../../../../assets/images/Essential/AuthComponent/man_model.png";
import True from "../../../../assets/images/Essential/AuthComponent/True.png";
// import { GoogleLogin } from "@react-oauth/google";
import customerService from "../../../../assets/images/Essential/AuthComponent/customerService.png";
import { FS23, FS6, FS8 } from "../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../CommonElements/Button";
import OTPModel from "../../Models/OTP/OTPModel";
import PhoneInput from "../../../Common/Component/PhoneInput/PhoneInput";
import {
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  CHECK_OTP,
  GOOGLE_LOGIN,
  LOGIN_WITH_PHONE,
} from "../../../../Constant/api_constant";
import { ToastContainer } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { auth } from "../../../../Constant/fireBaseConfig"; // Path to your firebase.js file
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GenerateOtp, LoginWithGoogle, LoginWithOTP } from "./LBFunctions";

const ListBusiness = () => {
  const [modal, setModel] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  const toggle = () => {
    if (modal) {
      setModel(false);
    } else {
      setModel(true);
    }
  };

  const onChange = (e) => {
    setMobile(e);
  };





  const AllProps = {
    toggle: toggle,
    GenerateOtp: GenerateOtp,
    Payload: { mobile: mobile, toggle: toggle },
  };
  return (
    <>
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

          <PhoneInput onChange={onChange} AllProps={AllProps} />

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

      <OTPModel
        serviceData={{}}
        toggler={toggle}
        setOtp={setOtp}
        otp={otp}
        isOpen={modal}
        LoginWithOTP={LoginWithOTP}
        LoginWithOTPPayload={{ otp: otp, mobile: mobile, toggle: toggle }}
        LoginWithGoogle={LoginWithGoogle}
        LoginWithGooglePayload= {{ setToken:setToken, setEmail:setEmail }}
      />

      <ToastContainer />
    </>
  );
};

export default ListBusiness;
