import React, { useEffect, useState } from "react";
import man_model from "../../../../assets/images/Essential/AuthComponent/man_model.png";
import True from "../../../../assets/images/Essential/AuthComponent/True.png";
import { FS23, FS6, FS8 } from "../../../../CommonElements/Font/FS";
import OTPModel from "../../Models/OTP/OTPModel";
import PhoneInput from "../../../Common/Component/PhoneInput/PhoneInput";
import { ToastContainer } from "react-toastify";
import { GenerateOtp, LoginWithGoogle, LoginWithOTP } from "./LBFunctions";
import { Link, useNavigate } from "react-router-dom";
import { BASE_ROUTE, HOME_ROUTE } from "../../../../Route/RouthPath";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "../../../../Redux_Store/Actions/userActions";
const ListBusiness = () => {
  const [modal, setModel] = useState(false);
  const [mobile, setMobile] = useState(9090789091);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState({
    startNow: false,
    otpCheck: false,
    googleLoad: false,
  });
  const LoadingChange = (name, type) => {
    setLoader({ ...loader, [name]: type });
    return null;
  };
  const navigate = useNavigate();
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
  const Redirect = () => {
    navigate(HOME_ROUTE);
  };
  const AllProps = {
    mobile: mobile,
    toggle: toggle,
    GenerateOtp: GenerateOtp,
    Payload: { mobile: mobile, toggle: toggle },
    Redirect: Redirect,
    dispatch: dispatch,
    loader: loader.startNow,
    LoadingChange: LoadingChange,
  };

  useEffect(() => {
    dispatch(UserActions({ status: "fail", profileData: "response" }));
  }, []);
  console.log("LoadingChange=======>", loader.otpCheck);
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
        LoginWithOTPPayload={{
          otp: otp,
          mobile: mobile,
          toggle: toggle,
          Redirect: Redirect,
          dispatch: dispatch,
          LoadingChange: LoadingChange,
        }}
        loader={loader.otpCheck}
        googleLoad={loader.googleLoad}
        LoginWithGoogle={LoginWithGoogle}
        LoginWithGooglePayload={{
          setToken: setToken,
          setEmail: setEmail,
          setName: setName,
          mobile: mobile,
          toggle: toggle,
          Redirect: Redirect,
          dispatch: dispatch,
          LoadingChange: LoadingChange,
        }}
        Redirect={Redirect}
      />

      <ToastContainer />
    </>
  );
};

export default ListBusiness;
