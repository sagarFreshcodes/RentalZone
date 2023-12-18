import React, { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { useState } from "react";
import { CloseButton } from "../../../Common/Component/DesignElement";
import * as Yup from "yup";
import { useFormik, ErrorMessage } from "formik";

const formFields = [
  {
    title: "Listing Name",
    placeHolder: "listing_name",
    type: "text",
    name: "listing_name",
  },

  {
    title: "Address",
    placeHolder: "address",
    type: "text",
    name: "address",
  },

  {
    title: "Country",
    placeHolder: "country",
    type: "text",
    name: "country",
  },

  {
    title: "State",
    placeHolder: "state",
    type: "text",
    name: "state",
  },
  {
    title: "City",
    placeHolder: "city",
    type: "text",
    name: "city",
  },
  {
    title: "Area",
    placeHolder: "area",
    type: "text",
    name: "area",
  },
  {
    title: "Location",
    placeHolder: "location",
    type: "text",
    name: "location",
  },
];

const ListingUpdate = (props) => {
  const { formData, setFormData, OnSubmitForm } = props || {};
  const RentalUserAuthToken = localStorage.getItem("rentalUserAuthToken");
  const [loader, setLoader] = useState(false);

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
      setLoader(true);
    },
  });

  const handleChange = (e) => {
    const { target } = e;
    const name = target && target.name;
    const value = target && target.value;
    console.log("test2512==>", name, value);
    validation.setFieldValue(name, value);
    setFormData({ ...formData, [name]: value, token: RentalUserAuthToken });
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
        <H5 attrH5={{ className: "modal-title" }}>{"Edit Record"}</H5>
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
                      <input
                        className="form-control"
                        onChange={handleChange}
                        type={f.type}
                        name={f.name}
                        // value={validation.values[f.value]}
                        value={
                          formData[f.name == "listing_name" ? "name" : f.name]
                        }
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
            {"Submit"}
          </Btn>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ListingUpdate;
