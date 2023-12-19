import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
const Form2 = ({ AllProps }) => {
  const { NextPage } = AllProps;
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
      // Simulate API call for login (replace with your actual API call)
      ClickOnNext();
    },
  });

  const FormFields = [
    {
      title: "Email",
      name: "email",
      id: "email",
      name: "email",
      type: "email",
    },
    {
      title: "Password",
      name: "password",
      id: "password",
      name: "password",
      type: "password",
    },
  ];
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

// .FormicForm {
//   .inputFieldBox {
//     position: relative;
//   }
//   .commonInput {
//     margin-bottom: 2rem;
//   }
//   .FormicError {
//     position: absolute;
//     bottom: -1.5rem;
//     color: red;
//     padding-left: 6px;
//   }
// }
