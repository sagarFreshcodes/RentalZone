import React, { useEffect, useMemo, useState } from "react";
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
  GET_USER_LIST_API,
  UPDATE_PRODUCT_API,
} from "../../../../Constant/api_constant";
import {
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { ApiLoader } from "../../../Common/Component/DesignElement";

const AddPoduct = ({
  AllProps,
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
}) => {
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );
  const [imgData, setImgData] = useState();
  const [loader, setLoader] = useState({ submitLoader: false });
  const ChangeLoader = (loaderName, type) => {
    setLoader({ ...loader, [loaderName]: type });
  };
  const mayListBody = { token: RentalUserAuthToken };
  const mayListbodyFormData = new FormData();
  Object.keys(mayListBody).map((i) => {
    mayListbodyFormData.append(i, mayListBody[i]);
  });
  const FormFields = [
    {
      title: "Product Image",
      id: "product_image",
      name: "product_image",
      type: "file",
      lable: "product_image",
    },
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
      lable: "name",
      ApiEndPoint: `${GET_USER_LIST_API}/${1}`,
      ApiBody: mayListbodyFormData,
    },
    {
      title: "Product name",
      id: "product_name",
      name: "product_name",
      type: "text",
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
  const RowData =
    editing == "editListing"
      ? editRecordData
      : {
          token: RentalUserAuthToken,
          product_name: "",
          rent: "",
          description: "",
          brand: "",
          model: "",
          meta_title: "",
          meta_desc: "",
          listing: 1,
          category: 8,
        };
  const TestData = {
    token: RentalUserAuthToken,
    product_name: "afaa",
    rent: "fsafs",
    description: "fasfas",
    brand: "ffasfs",
    model: "fsfs",
    meta_title: "fasfas",
    meta_desc: "fsfasf",
    listing: 1056,
    category: 8,
  };

  const [formData, setFormData] = useState(RowData);
  const [pageRenderd, setPageRenderd] = useState(false);

  const OnSubmit = () => {
    ChangeLoader("submitLoader", true);
    const Apiurl =
      editing == "editProduct" ? UPDATE_PRODUCT_API : ADD_PRODUCT_API;
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${Apiurl}`,
      body: formData,
    })
      .then((responce) => {
        ToastSuccess(responce);
        setEditRecordData({});
        setEditing(false);
        ChangePage({ pagenumber: 4, data: {} });
        ChangeLoader("submitLoader", false);
      })
      .catch((error) => {
        ToastError(error);
        ChangeLoader("submitLoader", false);
      });
  };
  const ClickOnNext = () => {
    OnSubmit();
  };
  const OnSelect = (e) => {
    setFormData({ ...formData, [e.fieldName]: e.id });
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
    console.log(`formik.errors===>`, formik.errors);
    setPageRenderd(true);
    formik.setValues({
      product_name: formData?.product_name,
      rent: formData?.rent,
      description: formData?.description,
      brand: formData?.brand,
      model: formData?.model,
      meta_title: formData?.meta_title,
      meta_desc: formData?.meta_desc,
    });
  }, [pageRenderd]);

  useEffect(() => {
    if (pageRenderd) {
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
    }
  }, [formik.values]);

  useEffect(() => {
    setRentalUserAuthToken(localStorage.getItem("rentalUserAuthToken"));
    if (editing == "editProduct") {
      setFormData(editRecordData);
    }
    // console.log("editRecordData 2852", editRecordData);
    // console.log("RowData 2852", RowData);
    // console.log("formData 2852", formData);
  }, []);

  useMemo(() => {
    setFormData({ ...formData, product_image: imgData });
  }, [imgData]);
  const test = () => {
    console.log("editRecordData 2852", editRecordData);
    console.log("RowData 2852", RowData);
    console.log("formData 2852", formData);
    console.log("formic 2852", formik.values);
  };
  return (
    <ContentBox>
      <br />
      <br />
      <br />
      <Card>
        <ContentBox>
          <Row>
            <Col lg="6" md="12" sm="12">
              <div className="FormHeader" onClick={test}>
                {" "}
                <FS5 attr={{ className: "mb-0" }}>
                  {editing == "editProduct" ? "Update Product" : "Add Product"}
                </FS5>
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
                              state={formData}
                            />
                          </div>
                        ) : i.type == "file" ? (
                          <div className="inputFieldBox">
                            <FS5 attr={{ className: "BoldText" }}>
                              {i.title}
                            </FS5>
                            <Input
                              className="form-control commonInput"
                              id={i.name}
                              name={i.name}
                              type={i.type}
                              onChange={(e) => setImgData(e.target.files[0])}
                              onBlur={formik.handleBlur}
                              value={formik.values[i.name]}
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
                      Submit {loader.submitLoader ? <ApiLoader /> : ""}
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
