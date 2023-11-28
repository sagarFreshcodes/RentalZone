import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import { GET_API } from "../../../Common/Component/helperFunction";
import { useEffect } from "react";
import { HOME_API } from "../../../../Constant/api_constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleData } from "../../../../Redux_Store/Actions/actions";
import { HomePageApi } from "../../../../Redux_Store/Actions/homeActions";
import { useState } from "react";
import { GeneralActions } from "../../../../Redux_Store/Actions/generalActions";

const Home = () => {
  const dispatch = useDispatch();
  const HomPageData = useSelector((state) => state?.Home?.data?.data); 
  const Homepage_category = HomPageData?.homepage_category;
  const pageTitle = HomPageData?.page_title || "RentalZone.in" 
  const StateData = useSelector((state) => state);
 


  
  const props = {
    homepage_category: Homepage_category,
    HomPageData:HomPageData,
    StateData:StateData,
    

  };

  useEffect(() => {
    dispatch(HomePageApi({Location:"surat"}));
    dispatch(GeneralActions());
  }, [dispatch]);

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <Row>
          {/* <FileSideBar /> */}
          <Col
            xl="12"
            md="12"
            className="box-col-9" 
          >
            <div className="file-content">
              <Card>
                <Content props={props} />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
