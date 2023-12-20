import React, { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { useState } from "react";
import {
  ApiLoader,
  CloseButton,
} from "../../../Common/Component/DesignElement";
import * as Yup from "yup";
import { useFormik, ErrorMessage } from "formik";

const formFields = [
  {
    title: "Profile Pic",
    placeHolder: "profile_pic",
    type: "file",
    name: "profile_pic",
  },
  {
    title: "Profile Banner",
    placeHolder: "profile_banner",
    type: "file",
    name: "profile_banner",
  },
  {
    title: "Name",
    placeHolder: "name",
    type: "text",
    name: "name",
  },
  {
    title: "Phone Number",
    placeHolder: "Phone Number",
    type: "number",
    name: "phone_number",
  },
  {
    title: "Email",
    placeHolder: "Email",
    type: "text",
    name: "email",
  },
  {
    title: "Website",
    placeHolder: "Enter your website",
    type: "text",
    name: "user_website",
  },
];

const ProfileModel = (props) => {
  const {
    user_details,
    formData,
    setFormData,
    OnSubmitForm,
    setImgData,
    imgData,
    loader,
  } = props || {};

  const validation = useFormik({
    // enableReinitialize: true,
    initialValues: {
      name: formData?.name || "",
      email: formData?.email || "",
      user_website: formData?.user_website || "",
      phone_number: formData?.phone_number || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      user_website: Yup.string().required("user_website is required"),
      phone_number: Yup.string().required("Phone Number is required"),
    }),

    onSubmit: (values) => {
      console.log(formData);
    },
  });

  const handleChange = (e) => {
    const { target } = e;

    const name = target && target.name;
    const value = target && target.value;
    console.log("test2512==>", name, value);
    validation.setFieldValue(name, value);
    if (["profile_banner", "profile_pic"].includes(name)) {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
        [`${name}_URL`]: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // ["profile_banner", "profile_pic"].includes(name)
    //   ? setFormData({ ...formData, [name]: e.target.files[0] })
    //   : setFormData({ ...formData, [name]: value });
  };

  const test = () => {
    console.log("formData", formData);
    // console.log("user_details", user_details);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered
      className="gq-model-content"
    >
      <div className="modal-header" onClick={test}>
        <H5 attrH5={{ className: "modal-title" }}>{"Edit Profile"}</H5>
        <CloseButton
          attr={{ className: "reg_React_Icon", onClick: props.toggler }}
        />
      </div>
      <ModalBody className={props.bodyClass}>
        <div>
          {/* <form onSubmit={validation.handleSubmit}> */}
          {formFields.map((f) => {
            return (
              <>
                <>
                  <div className="form-group" onClick={test}>
                    <label className="form-control-label">{f.title}</label>
                    <div className="d-flex" style={{ position: "relative" }}>
                      {["profile_banner", "profile_pic"].includes(f.name) ? (
                        <input
                          className="form-control"
                          onChange={handleChange}
                          type={f.type}
                          name={f.name}
                          // value={validation.values[f.value]}
                          // value={formData[f.name]}
                          id={f.name}
                          // onBlur={validation.handleBlur}
                          // validate={{
                          //   required: { value: true },
                          // }}
                          // invalid={
                          //   validation.touched.name && validation.errors.name
                          //     ? true
                          //     : false
                          // }
                        />
                      ) : (
                        <input
                          className="form-control"
                          onChange={handleChange}
                          type={f.type}
                          name={f.name}
                          // value={validation.values[f.value]}
                          value={formData[f.name]}
                          id={f.name}
                          // onBlur={validation.handleBlur}
                          // validate={{
                          //   required: { value: true },
                          // }}
                          // invalid={
                          //   validation.touched.name && validation.errors.name
                          //     ? true
                          //     : false
                          // }
                        />
                      )}
                    </div>

                    <div className="invalid-feedback customFormicError2">
                      {" "}
                      {/* {validation?.touched[f?.value] &&
                          validation?.errors[f?.value] &&
                          validation?.errors[f?.value]} */}
                    </div>
                  </div>
                </>
              </>
            );
          })}
          {/* </form> */}
        </div>
        <br />
        <div className="gq-model-bbox">
          <Btn attrBtn={{ color: "primary", onClick: () => OnSubmitForm() }}>
            {"Submit"} {loader ? <ApiLoader /> : ""}
          </Btn>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProfileModel;
