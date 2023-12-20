import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../CommonElements/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import CommonAutoSelect from "../../../CommonSelector/CommonAutoSelect";
import {
  GET_COUNTRY_DROPDOWN_API,
  GET_CITY_DROPDOWN_API,
  GET_STATE_DROPDOWN_API,
  GET_AREA_DROPDOWN_API,
  GET_LOCATION_DROPDOWN_API,
  GET_CATEGORY_DROPDOWN_API,
  API_ROOT_URL,
  ADD_LIST_API,
  ADD_PRODUCT_API,
  MY_LIST_API,
} from "../../../../Constant/api_constant";
import {
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
const RentalUserAuthToken = localStorage.getItem("rentalUserAuthToken");

const mayListBody = { token: RentalUserAuthToken };
const mayListbodyFormData = new FormData();
Object.keys(mayListBody).map((i) => {
  mayListbodyFormData.append(i, mayListBody[i]);
});
const FormFields = [
  {
    title: "Category",
    id: "category",
    name: "category",
    type: "select",
    lable: "category_name",
    ApiEndPoint: GET_CATEGORY_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "Listing",
    id: "listing",
    name: "listing",
    type: "select",
    lable: "location_name",
    ApiEndPoint: MY_LIST_API,
    ApiBody: mayListbodyFormData,
  },
  {
    title: "Product name",
    id: "product_name",
    name: "product_name",
    type: "select",
  },
  {
    title: "Rent",
    id: "rent",
    name: "rent",
    type: "text",
  },
  {
    title: "Description",
    id: "description",
    name: "description",
    type: "textarea",
  },
  {
    title: "Brand",
    id: "brand",
    name: "brand",
    type: "text",
  },
  {
    title: "Model",
    id: "model",
    name: "model",
    type: "text",
  },
  {
    title: "Meta Title",
    id: "meta_title",
    name: "meta_title",
    type: "text",
  },
  {
    title: "Meta Desc",
    id: "meta_desc",
    name: "meta_desc",
    type: "text",
  },
];

const AddPoduct = ({
  AllProps,
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
}) => {
  const [formData, setFormData] = useState({ token: RentalUserAuthToken });

  const OnSubmit = () => {
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${ADD_PRODUCT_API}`,
      body: formData,
    })
      .then((responce) => {
        ToastSuccess(responce);
      })
      .catch((error) => {
        ToastError(error);
      });
  };
  const ClickOnNext = () => {
    OnSubmit();
  };
  const OnSelect = (e) => {
    console.log("fs25", e);
    setFormData({ ...formData, [e.fieldName]: e.id });
    // setFormData({ ...formData, [`${e.fieldName}_object`]: e });
  };

  const formik = useFormik({
    initialValues: {
      product_name: "",
      rent: "",
      description: "",
      brand: "",
      model: "",
      meta_title: "",
      meta_desc: "",
    },
    validationSchema: Yup.object({
      product_name: Yup.string().required("product_name Required"),
      rent: Yup.string().required("rent Required"),
      description: Yup.string().required("description Required"),
      brand: Yup.string().required("brand Required"),
      model: Yup.string().required("model Required"),
      meta_title: Yup.string().required("meta_title Required"),
      meta_desc: Yup.string().required("meta_desc Required"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      ClickOnNext();
    },
  });

  const OnSearchLocation = ({ locationData }) => {
    console.log(locationData);
  };

  useEffect(() => {
    setFormData({
      ...formData,
      product_name: formik.values["product_name"],
      rent: formik.values["rent"],
      description: formik.values["description"],
      brand: formik.values["brand"],
      model: formik.values["model"],
      meta_title: formik.values["meta_title"],
      meta_desc: formik.values["meta_desc"],
    });
  }, [formik.values]);

  useEffect(() => {
    console.log(`formik.errors===>`, formik.errors);
    setFormData({
      ...formData,
      product_name: formik.values["product_name"],
      rent: formik.values["rent"],
      description: formik.values["description"],
      brand: formik.values["brand"],
      model: formik.values["model"],
      meta_title: formik.values["meta_title"],
      meta_desc: formik.values["meta_desc"],
    });

    formik.setValues({
      product_name: formData?.product_name,
      rent: formData?.rent,
      description: formData?.description,
      brand: formData?.brand,
      model: formData?.model,
      meta_title: formData?.meta_title,
      meta_desc: formData?.meta_desc,
    });
  }, []);
  return (
    <ContentBox>
      <br />
      <br />
      <br />
      <Card>
        <ContentBox>
          <Row>
            <Col lg="6" md="12" sm="12">
              <div className="FormHeader">
                {" "}
                <FS5 attr={{ className: "mb-0" }}>ADd Product</FS5>
              </div>
              <CardBody>
                <form onSubmit={formik.handleSubmit} className="FormicForm">
                  {FormFields.map((i) => {
                    return (
                      <>
                        {i.type == "select" ? (
                          <div className="inputFieldBox">
                            <FS5 attr={{ className: "BoldText" }}>
                              {i.title}
                            </FS5>
                            <CommonAutoSelect
                              placeholder={i?.placeholder}
                              // placeholder={
                              //   i?.placeholder ||
                              //   formData[`${i?.name}_object`][i.lable]
                              // }
                              OnSearchLocation={OnSearchLocation}
                              labelName={i.lable}
                              APIBody={i?.ApiBody}
                              ApiEndPoint={i?.ApiEndPoint}
                              OnSelect={OnSelect}
                              fieldName={i.name}
                            />
                          </div>
                        ) : (
                          <div className="inputFieldBox">
                            <FS5 attr={{ className: "BoldText" }}>
                              {i.title}
                            </FS5>
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
                              <div className="FormicError">
                                {formik.errors[i.name]}
                              </div>
                            ) : null}
                          </div>
                        )}
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
                      Next
                    </CommonButton>
                  </div>
                </form>
              </CardBody>
            </Col>{" "}
          </Row>
        </ContentBox>
      </Card>
    </ContentBox>
  );
};

export { AddPoduct };
