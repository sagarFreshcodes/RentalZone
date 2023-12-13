import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { FS2, FS3, FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { CloseButton } from "../../../Common/Component/DesignElement";
import { CommonButton } from "../../../../CommonElements/Button";
import PhoneInput from "../../../Common/Component/PhoneInput/PhoneInput";

const OTPModel = (props) => {
  const onChange = (e) => {
    console.log("test2512", e);
  };
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
        <div>
          <PhoneInput
            onChange={onChange}
            AllProps={{ toggle: console.log("") }}
            onlyInput={true}
          />
        </div>
        <div className="w-100">
          <CommonButton attr={{ className: "LoginwithOTP " }}>
            Login with OTP
          </CommonButton>
          <br />
          <br />
          <CommonButton attr={{ className: "LoginwithGoogle" }}>
            Login with Google
          </CommonButton>
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