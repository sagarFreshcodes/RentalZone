import React from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
const Form3 = () => {
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
              <FS5 attr={{ className: "BoldText" }}>Listing Category</FS5>

              <div className="listingCategory">
                {[
                  "Laptop Rental",
                  "Computer Rental",
                  "Printer Rental",
                  "Server Rental",
                  "IPad Rental",
                  "MacBook Rental",
                  "Projector Rental",
                  "Display Rental",
                  "Car Rental",
                  "Audio Rental",
                  "UPS Rental",
                  "AC Rental",
                  "Furniture Rental",
                ].map((i, index) => (
                  <div className="checkbox">
                    <Input id={index} type="checkbox" />
                    <Label for={index}>{i}</Label>
                  </div>
                ))}
              </div>
              <br />
              <div className="listngName">
                <FS5 attr={{ className: "BoldText" }}>Listing Name</FS5>

                <Input className="form-control" type="text" />
              </div>
              <div className="next">
                <CommonButton attr={{ className: "Next" }}>Next</CommonButton>
              </div>
            </CardBody>
          </Col>{" "}
        </Row>
      </Card>
    </div>
  );
};

export default Form3;
