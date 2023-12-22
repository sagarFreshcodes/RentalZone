import React, { useEffect } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import { FS2, FS3, FS4 } from "../../../../CommonElements/Font/FS";
import {
  ApiLoader,
  CloseButton,
} from "../../../Common/Component/DesignElement";
import {
  API_ROOT_URL,
  STORE_QUOTES_API,
} from "../../../../Constant/api_constant";
import {
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CommonButton } from "../../../../CommonElements/Button";
const EditContactInfoModel = (props) => {
  const [selectedOption, setSelectedOption] = useState({ lable: `--Select--` });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
  });
  const { allCategoryList } = props;
  const formFields = [
    {
      title: "Name",
      placeHolder: "Name",
      name: "name",
    },
    {
      title: "Phone Number",
      placeHolder: "Phone Number",
      type: "number",
      name: "phone_number",
    },
  ];

  const onHandleChange = ({ target }) => {
    const { name, value } = target;
    if (name == "listing_category") {
      if (formData.listing_category.includes(value)) {
        setFormData({
          ...formData,
          listing_category: formData.listing_category.filter((i) => i != value),
        });
      } else {
        setFormData({
          ...formData,
          listing_category: [...formData.listing_category, value],
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const OnSubmitForm = () => {
    setLoading(true);
    const submitData = {
      name: formData?.name,
      phone_number: formData?.phone_number,
    };
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${STORE_QUOTES_API}`,
      body: submitData,
    })
      .then((response) => {
        ToastSuccess(response);
        setLoading(false);
        props.toggler();
      })
      .catch((error) => {
        ToastError(error);
        setLoading(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone_number: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Require"),
      phone_number: Yup.string().required("Require"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      OnSubmitForm();
      // Simulate API call for login (replace with your actual API call)
    },
  });

  useEffect(() => {
    setFormData({
      ...formData,
      name: formik.values["name"],
      phone_number: formik.values["phone_number"],
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
      <div className="modal-header" onClick={() => console.log(formData)}>
        <H5 attrH5={{ className: "modal-title" }}>{"Edit Contact"}</H5>
        <CloseButton
          attr={{ className: "reg_React_Icon", onClick: props.toggler }}
        />
      </div>
      {/* <img src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
      <ModalBody className={props.bodyClass}>
        <div>
          <div className="gq-model">
            <div className="title">
              <FS4
                attr={{ className: "FW5" }}
              >{`Please update youer contact details`}</FS4>
            </div>{" "}
            <form onSubmit={formik.handleSubmit} className="FormicForm">
              <div className="gq-fieldBox">
                {formFields.map((i) => {
                  return (
                    <>
                      <div className="gq-formKey">
                        {" "}
                        <div className="title">
                          <FS4>{i.title}</FS4>
                        </div>{" "}
                        <div className="rightInput">
                          <>
                            {" "}
                            <div className="CMN_InputBox">
                              {" "}
                              <input
                                placeholder={i?.placeHolder}
                                className="quoteInput"
                                type={i?.type}
                                name={i?.name}
                                // onChange={onHandleChange}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[i.name]}
                              />{" "}
                              {formik.touched[i.name] &&
                              formik.errors[i.name] ? (
                                <div className="FormicError">
                                  {formik.errors[i.name]}
                                </div>
                              ) : null}
                              <br />
                            </div>
                          </>
                        </div>
                      </div>
                    </>
                  );
                })}{" "}
              </div>

              <div className="gq-model-bbox">
                {/* <button type="submit">Submit</button> */}
                <CommonButton
                  attr={{
                    type: "submit",
                    // onClick: OnSubmit,
                  }}
                >
                  {"Submit"} {loading ? <ApiLoader /> : ""}
                </CommonButton>
                {/* <Btn
                  attrBtn={{
                    type: "submit",
                    color: "primary",
                    // onClick: OnSubmit,
                  }}
                >
                  {"Submit"} {loading ? <ApiLoader /> : ""}
                </Btn> */}
              </div>
            </form>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default EditContactInfoModel;
