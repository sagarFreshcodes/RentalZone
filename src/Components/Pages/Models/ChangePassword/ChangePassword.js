import React, { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import {
  ApiLoader,
  CloseButton,
} from "../../../Common/Component/DesignElement";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../CommonElements/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
const FormFields = [
  {
    title: "Password",
    name: "password",
    id: "password",
    name: "password",
    type: "password",
  },
  {
    title: "Confirm Password",
    name: "confirm_password",
    id: "confirm_password",
    name: "confirm_password",
    type: "confirm_password",
  },
];
const ChangePassword = (props) => {
  const { OnPwdChange, changePwd, setChangePwd, loader } = props;
  const formik = useFormik({
    initialValues: {
      confirm_password: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("Password must be required")
        .min(6, "Password must be at least 6 characters"),
      confirm_password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      // Simulate API call for login (replace with your actual API call)
      OnPwdChange();
    },
  });

  useEffect(() => {
    setChangePwd({
      password: formik.values["password"],
    });
  }, [formik.values]);
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered
      className="gq-model-content"
    >
      <div className="modal-header">
        <H5 attrH5={{ className: "modal-title" }}>{"Change password"}</H5>
        <CloseButton
          attr={{ className: "reg_React_Icon", onClick: props.toggler }}
        />
      </div>
      {/* <img src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
      <ModalBody className={props.bodyClass}>
        <CardBody>
          <form onSubmit={formik.handleSubmit} className="FormicForm">
            {FormFields.map((i) => {
              return (
                <>
                  <div className="inputFieldBox">
                    <FS5 attr={{ className: "BoldText" }}>{i.title}</FS5>
                    <Input
                      className="form-control commonInput"
                      id={i.name}
                      name={i.name}
                      type={i.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values[i.name]}
                    />
                    {formik.touched[i.name] && formik.errors[i.name] ? (
                      <div className="FormicError">{formik.errors[i.name]}</div>
                    ) : null}
                  </div>
                </>
              );
            })}

            <div className="next">
              <CommonButton
                attr={{
                  type: "submit",
                  className: "Next",
                }}
              >
                Submit {loader ? <ApiLoader /> : ""}
              </CommonButton>
            </div>
          </form>
        </CardBody>
      </ModalBody>
    </Modal>
  );
};

export default ChangePassword;
