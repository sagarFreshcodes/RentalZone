import React, { useEffect } from "react";
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
      state: formData,
    },
    {
      title: "State",
      name: "state",
      id: "state",
      name: "state",
      type: "select",
      lable: "name",
      ApiEndPoint: `${GET_STATE_DROPDOWN_API}/${formData.country || 101}`,
      ApiBody: {},
      state: formData,
    },
    {
      title: "City",
      name: "city",
      id: "city",
      name: "city",
      type: "select",
      lable: "city",
      ApiEndPoint: `${GET_CITY_DROPDOWN_API}/${formData.state || 101}`,
      ApiBody: {},
      state: formData,
    },
    {
      title: "Area",
      name: "area",
      id: "area",
      name: "area",
      type: "select",
      lable: "area_name",
      ApiEndPoint: `${GET_AREA_DROPDOWN_API}/${formData.city || 101}`,
      ApiBody: {},
      state: formData,
    },
    // {
    //   title: "Location",
    //   name: "location",
    //   id: "location",
    //   name: "select",
    //   type: "location",
    //   lable: "location_name",
    //   ApiEndPoint: GET_LOCATION_DROPDOWN_API,
    //   ApiBody: {},
    // },
    {
      title: "Pincode",
      name: "pincode",
      id: "pincode",
      name: "pincode",
      type: "number",
    },
    {
      title: "Rates Per",
      name: "rates_per",
      id: "rates_per",
      name: "rates_per",
      type: "text",
    },
    {
      title: "Rates",
      name: "rates",
      id: "rates",
      name: "rates",
      type: "number",
    },
  ];

  const ClickOnNext = () => {
    NextPage();
  };
  const OnSelect = (e) => {
    console.log("fs25", e);
    setFormData({ ...formData, [e.fieldName]: e.id });
    // setFormData({ ...formData, [`${e.fieldName}_object`]: e });
  };
  const formik = useFormik({
    initialValues: {
      pincode: "",
      address: "",
    },
    validationSchema: Yup.object({
      pincode: Yup.string().required("Pincode Required"),
      address: Yup.string().required("Address Required"),
      rates_per: Yup.string().required("Rates parameter Required"),
      rates: Yup.string().required("Rates Required"),
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
      rates_per: formik.values["rates_per"],
      pincode: formik.values["pincode"],
      address: formik.values["address"],
      rates: formik.values["rates"],
    });
  }, [formik.values]);

  useEffect(() => {
    console.log(`formik.errors===>`, formik.errors);
    setFormData({
      ...formData,
      rates_per: formik.values["rates_per"],
      rates: formik.values["rates"],
      pincode: formik.values["pincode"],
      address: formik.values["address"],
    });

    formik.setValues({
      rates_per: formData?.rates_per,
      rates: formData?.rates,
      pincode: formData?.pincode,
      address: formData?.address,
    });
  }, []);
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
