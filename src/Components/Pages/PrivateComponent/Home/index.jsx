import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageApi } from "../../../../Redux_Store/Actions/homeActions";
import {
  GeneralActions,
  SelectCategory,
} from "../../../../Redux_Store/Actions/generalActions";
import { BusinessListApi } from "../../../../Redux_Store/Actions/businessListActions";
import { ScrollUp } from "../../../Common/Component/helperFunction";

const Home = () => {
  const dispatch = useDispatch();
  const HomPageData = useSelector((state) => state?.Home?.data?.data);
  const GeneralData = useSelector((state) => state?.GeneralState);
  const CurrentLocation = `${GeneralData?.location?.city_slug}`;
  const Homepage_category = HomPageData?.homepage_category;
  const pageTitle = HomPageData?.page_title || "RentalZone.in";
  const StateData = useSelector((state) => state);

  const props = {
    homepage_category: Homepage_category,
    HomPageData: HomPageData,
    GeneralData: GeneralData,
    StateData: StateData,
    location: CurrentLocation,
  };

  useEffect(() => {
    dispatch(
      SelectCategory({
        categoryDetails: { category_id: 3, category_slug: "laptop-rental" },
      })
    );

    dispatch(HomePageApi({ Location: CurrentLocation }));
    // dispatch(GeneralActions());
  }, [dispatch]);

  useEffect(() => {
    ScrollUp()
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <Row>
          {/* <FileSideBar /> */}
          <Col xl="12" md="12" className="box-col-9">
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
