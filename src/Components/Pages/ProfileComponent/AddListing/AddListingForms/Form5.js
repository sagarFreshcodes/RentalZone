import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
import { ApiLoader } from "../../../../Common/Component/DesignElement";
const Form5 = ({ AllProps }) => {
  const { NextPage, formData, setFormData, OnSubmit, ChangePage, loader } =
    AllProps;

  return (
    <div>
      <Card>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="FormHeader">
              {" "}
              <FS8>Step 5</FS8>
              <FS5 attr={{ className: "mb-0" }}>All Details</FS5>
            </div>
            <CardBody>
              {Object.keys(formData).map((i) => {
                return i == "token" ? (
                  ""
                ) : (
                  <div className="listngName">
                    <FS5 attr={{ className: "BoldText" }}>
                      {`${i}`.toUpperCase()}
                    </FS5>

                    <Input
                      className="form-control"
                      value={formData[i]}
                      type="text"
                    />
                  </div>
                );
              })}

              <div className="next">
                <CommonButton attr={{ className: "Next", onClick: OnSubmit }}>
                  Submit {loader ? <ApiLoader /> : ""}
                </CommonButton>
              </div>
            </CardBody>
          </Col>{" "}
        </Row>
      </Card>
    </div>
  );
};

export default Form5;
