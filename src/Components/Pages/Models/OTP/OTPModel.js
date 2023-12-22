import React, { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { FS2, FS3, FS4, FS5 } from "../../../../CommonElements/Font/FS";
import {
  ApiLoader,
  CloseButton,
} from "../../../Common/Component/DesignElement";
import { CommonButton } from "../../../../CommonElements/Button";
import PhoneInput from "../../../Common/Component/PhoneInput/PhoneInput";
import OtpInput from "react-otp-input";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
const OTPModel = (props) => {
  const {
    setOtp,
    otp,
    LoginWithOTP,
    LoginWithGoogle,
    LoginWithOTPPayload,
    LoginWithGooglePayload,
    Redirect,
    loader,
    googleLoad,
  } = props;
  const onChange = (e) => {
    console.log("test2512", e);
  };

  useEffect(() => {
    console.log("otp2512", otp);
  }, [otp]);

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered
      className="OTPModel"
    >
      <div className="modal-header">
        <img
          className="logoImageClass"
          src={`${require("../../../../assets/images/logo/pconrent.png")}`}
          alt=""
        />
        <CloseButton
          attr={{ className: "reg_React_Icon", onClick: props.toggler }}
        />
      </div>
      <ModalBody className={props.bodyClass}>
        <div>
          <FS5 attr={{ className: "Welcome" }}>Welcome!</FS5>
          <FS4>Login for a seamless experience</FS4>
        </div>
        <div className="otpInputBox">
          {/* <PhoneInput
            onChange={onChange}
            AllProps={{ toggle: console.log("") }}
            onlyInput={true}
          /> */}

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
          />
        </div>
        <div className="w-100">
          <CommonButton
            attr={{
              className: "LoginwithOTP",
              onClick: () => LoginWithOTP(LoginWithOTPPayload),
            }}
          >
            Login with OTP {loader ? <ApiLoader /> : ""}
          </CommonButton>
          <br />
          <br />
          <CommonButton
            attr={{
              className: "LoginwithGoogle",
              onClick: () => LoginWithGoogle(LoginWithGooglePayload),
            }}
          >
            Login with Google {googleLoad ? <ApiLoader /> : ""}
          </CommonButton>
          <br />
          <br />
        </div>
        {/* <div className="gq-model-bbox">
          <Btn attrBtn={{ color: "primary", onClick: props.toggler }}>
            {"Submit"}
          </Btn>
        </div> */}
      </ModalBody>
    </Modal>
  );
};

export default OTPModel;
