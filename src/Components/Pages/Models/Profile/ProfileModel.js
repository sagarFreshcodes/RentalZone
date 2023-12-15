import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import { FS2, FS3, FS4 } from "../../../../CommonElements/Font/FS";
import { CloseButton } from "../../../Common/Component/DesignElement";
import * as Yup from "yup";
import { useFormik, ErrorMessage } from "formik";
const RowData = {
  profileBanner: "",
  profilePic: "",
  user_name: "",
  email: "",
  phoneNumber: "",
  website: "",
};
const formFields = [
  {
    title: "Profile Pic",
    placeHolder: "profilePic",
    type: "file",
    name: "profilePic",
  },
  {
    title: "Profile Banner",
    placeHolder: "profileBanner",
    type: "file",
    name: "profileBanner",
  },
  {
    title: "Name",
    placeHolder: "user_name",
    type: "text",
    name: "user_name",
  },
  {
    title: "Phone Number",
    placeHolder: "Phone Number",
    type: "number",
    name: "phoneNumber",
  },
  {
    title: "Email",
    placeHolder: "Email",
    type: "text",
    name: "email",
  },
  {
    title: "Website",
    placeHolder: "website",
    type: "text",
    name: "website",
  },
];

const ProfileModel = (props) => {
  const [selectedOption, setSelectedOption] = useState({ lable: `--Select--` });
  const [formData, setFormData] = useState(RowData);
  const [eye, seteye] = useState({
    password: false,
    confirmPassword: false,
  });
  const [loader, setLoader] = useState(false);

  const validation = useFormik({
    // enableReinitialize: true,
    initialValues: {
      user_name: formData?.user_name || "",
      email: formData?.email || "",
      website: formData?.website || "",
      phoneNumber: formData?.phoneNumber || "",
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      website: Yup.string().required("Website is required"),
      phoneNumber: Yup.string().required("Phone Number is required"),
    }),

    onSubmit: (values) => {
      setLoader(true);
    },
  });

  const handleChange = (e) => {
    const { target } = e;
    const name = target && target.name;
    const value = target && target.value;
    validation.setFieldValue(name, value);
    console.log(e.target.files[0]);
    ["profileBanner", "profilePic"].includes(name)
      ? setFormData({ ...formData, [name]: e.target.files[0] })
      : setFormData({ ...formData, [name]: value });
  };

  const test = () => {
    console.log("formData", formData);
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
          <form onSubmit={validation.handleSubmit}>
            {formFields.map((f) => {
              return (
                <>
                  <>
                    <div className="form-group" onClick={test}>
                      <label className="form-control-label">{f.title}</label>
                      <div className="d-flex" style={{ position: "relative" }}>
                        <input
                          className="form-control"
                          onChange={handleChange}
                          type={f.type}
                          name={f.name}
                          value={validation.values[f.value]}
                          id={f.name}
                          onBlur={validation.handleBlur}
                          validate={{
                            required: { value: true },
                          }}
                          invalid={
                            validation.touched.name && validation.errors.name
                              ? true
                              : false
                          }
                        />
                      </div>

                      <div className="invalid-feedback customFormicError2">
                        {" "}
                        {validation?.touched[f?.value] &&
                          validation?.errors[f?.value] &&
                          validation?.errors[f?.value]}
                      </div>
                    </div>
                  </>
                </>
              );
            })}
          </form>
        </div>
        <br />
        <div className="gq-model-bbox">
          <Btn attrBtn={{ color: "primary", onClick: props.toggler }}>
            {"Submit"}
          </Btn>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ProfileModel;
