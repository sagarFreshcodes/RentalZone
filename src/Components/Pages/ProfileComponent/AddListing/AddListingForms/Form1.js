import React, { useEffect } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  API_ROOT_URL,
  GET_CATEGORY_DROPDOWN_API,
} from "../../../../../Constant/api_constant";
import axios from "axios";
import { useState } from "react";
import { ToastError } from "../../../../Common/Component/helperFunction";

const FormFields = [
  {
    title: "Listing Category",
    name: "listing_category",
    id: "listing_category",
    name: "listing_category",
    type: "select",
  },
  {
    title: "Listing Name",
    name: "listing_name",
    id: "listing_name",
    name: "listing_name",
    type: "text",
  },
];

const Form1 = ({ AllProps }) => {
  const { NextPage, formData, setFormData } = AllProps;
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [selectedCate, setSelectedCate] = useState([]);
  const [loading, setLoading] = useState([]);
  const ClickOnNext = () => {
    NextPage();
  };

  const formik = useFormik({
    initialValues: {
      listing_name: formData.listing_name,
    },
    validationSchema: Yup.object({
      listing_name: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      selectedCate?.length != 0 ? ClickOnNext() : console.log("first");
    },
  });

  const CategoryList = () => {
    axios
      .post(`${API_ROOT_URL}/${GET_CATEGORY_DROPDOWN_API}`, {})
      .then((response) => {
        setAllCategoryList(response?.data?.data?.category || []);
        console.log("response1236", response);
        setLoading(false);
      })
      .catch((error) => {
        ToastError(error);
        console.log("response1236", error);
        setLoading(false);
      });
  };
  const SelectCategory = (id) => {
    console.log(formik.values);

    selectedCate.includes(id)
      ? setSelectedCate(selectedCate.filter((i) => i != id))
      : setSelectedCate((prev) => [...prev, id]);
  };
  useEffect(() => {
    console.log("251254AddListForm");
    CategoryList();
  }, []);
  useEffect(() => {
    setFormData({
      ...formData,
      listing_name: formik.values["listing_name"],
      listing_category: selectedCate,
    });
  }, [formik.values]);

  useEffect(() => {
    setFormData({
      ...formData,
      listing_name: formik.values["listing_name"],
      listing_category: selectedCate,
    });

    formik.setValues({
      listing_name: formData?.listing_name,
    });
    setSelectedCate(formData.listing_category || []);
  }, []);
  return (
    <div>
      <Card>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="FormHeader">
              {" "}
              <FS8>Step 1</FS8>
              <FS5 attr={{ className: "mb-0" }}>Basic Details</FS5>
            </div>
            <CardBody>
              <form onSubmit={formik.handleSubmit} className="FormicForm">
                {FormFields.map((i) => {
                  return (
                    <>
                      {i.type == "select" ? (
                        <div className="inputFieldBox">
                          <FS5 attr={{ className: "BoldText" }}>{i.title}</FS5>
                          <div className="listingCategory commonInput">
                            {allCategoryList?.map((i, index) => (
                              <div className="checkbox">
                                <Input
                                  id={i.id}
                                  type="checkbox"
                                  checked={selectedCate.includes(i.id)}
                                  onChange={() => SelectCategory(i.id)}
                                />
                                <Label for={i.id}>{i.category_name}</Label>
                              </div>
                            ))}
                          </div>
                          {selectedCate?.length == 0 ? (
                            <div className="FormicError">
                              {`Select atleast one category`}
                            </div>
                          ) : null}
                        </div>
                      ) : (
                        <div className="inputFieldBox">
                          <br />
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
      </Card>
    </div>
  );
};

export default Form1;
