import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import LocationAutoSearch from "../../../../CommonSelector/LocationAutoSearch";
import { SearchLocationDirect } from "../../../../Common/Component/helperFunction";
import CommonAutoSelect from "../../../../CommonSelector/CommonAutoSelect";
import {
  GET_COUNTRY_DROPDOWN_API,
  GET_CITY_DROPDOWN_API,
  GET_STATE_DROPDOWN_API,
  GET_AREA_DROPDOWN_API,
  GET_LOCATION_DROPDOWN_API,
  GET_CATEGORY_DROPDOWN_API,
} from "../../../../../Constant/api_constant";

const FormFields = [
  {
    title: "Address",
    name: "address",
    id: "address",
    name: "address",
    type: "text",
  },
  {
    title: "Country",
    name: "country",
    id: "country",
    name: "country",
    type: "select",
    lable: "name",
    ApiEndPoint: GET_COUNTRY_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "State",
    name: "state",
    id: "state",
    name: "state",
    type: "select",
    lable: "name",
    ApiEndPoint: GET_STATE_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "City",
    name: "city",
    id: "city",
    name: "city",
    type: "select",
    lable: "city",
    ApiEndPoint: GET_CITY_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "Area",
    name: "area",
    id: "area",
    name: "area",
    type: "select",
    lable: "area_name",
    ApiEndPoint: GET_AREA_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "Location",
    name: "location",
    id: "location",
    name: "select",
    type: "location",
    lable: "location_name",
    ApiEndPoint: GET_LOCATION_DROPDOWN_API,
    ApiBody: {},
  },
  {
    title: "Pincode",
    name: "pincode",
    id: "pincode",
    name: "pincode",
    type: "number",
  },
  {
    title: "Rates Per",
    name: "Rates Per",
    id: "Rates Per",
    name: "Rates Per",
    type: "select",
  },
];

const Form2 = ({ AllProps }) => {
  const { NextPage, formData, setFormData } = AllProps;
  const ClickOnNext = () => {
    NextPage();
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values, { setSubmitting, setErrors }) => {
      ClickOnNext();
    },
  });

  const OnSearchLocation = ({ locationData }) => {
    console.log(locationData);
  };
  return (
    <div>
      <Card>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="FormHeader">
              {" "}
              <FS8>Step 2</FS8>
              <FS5 attr={{ className: "mb-0" }}>Address Details</FS5>
            </div>
            <CardBody>
              <form onSubmit={formik.handleSubmit} className="FormicForm">
                {FormFields.map((i) => {
                  return (
                    <>
                      {i.type == "select" ? (
                        <div className="inputFieldBox">
                          <FS5 attr={{ className: "BoldText" }}>{i.title}</FS5>
                          <CommonAutoSelect
                            placeholder={i?.placeholder || ""}
                            OnSearchLocation={OnSearchLocation}
                            labelName={i.lable}
                            APIBody={i?.ApiBody}
                            ApiEndPoint={i?.ApiEndPoint}
                          />
                        </div>
                      ) : (
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

export default Form2;
