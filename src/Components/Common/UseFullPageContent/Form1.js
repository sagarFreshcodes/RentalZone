import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardBody, FormGroup, Label, Input } from "reactstrap";
import { FS5, FS8 } from "../../../../../CommonElements/Font/FS";
import { CommonButton } from "../../../../../CommonElements/Button";
import axios from "axios";
import {
  API_ROOT_URL,
  GET_CATEGORY_DROPDOWN_API,
} from "../../../Constant/api_constant";
import { ToastError } from "../Component/helperFunction";
const Form1 = () => {
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [loading, setLoading] = useState([]);
  const CategoryList = () => {
    axios
      .post(`${API_ROOT_URL}/${GET_CATEGORY_DROPDOWN_API}`, {})
      .then((response) => {
        setAllCategoryList(response?.data?.data);
        console.log("response1236", response);
        setLoading(false);
      })
      .catch((error) => {
        ToastError(error);
        console.log("response1236", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    CategoryList();
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
                ].map((i) => (
                  <div className="checkbox">
                    <Input id="checkbox1" type="checkbox" />
                    <Label for="checkbox1">{i}</Label>
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

export default Form1;
