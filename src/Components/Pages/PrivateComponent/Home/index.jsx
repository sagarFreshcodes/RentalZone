import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomePageApi } from "../../../../Redux_Store/Actions/homeActions";
import {
  GeneralActions,
  SelectCategory,
  SetLocation,
} from "../../../../Redux_Store/Actions/generalActions";
import { BusinessListApi } from "../../../../Redux_Store/Actions/businessListActions";
import {
  CategoryList,
  HanggingBar,
  ScrollUp,
  UpdateSEO,
} from "../../../Common/Component/helperFunction";
import { LOCATION_DATA } from "../../../../Constant/general_constant";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [loading, setLoading] = useState({ categoryListLoader: false });

  const HomPageData = useSelector((state) => state?.Home?.data?.data);
  const GeneralData = useSelector((state) => state?.GeneralState);
  const CurrentLocation = `${GeneralData?.location?.city_slug}`;
  const Homepage_category = HomPageData?.homepage_category;
  const pageTitle = HomPageData?.page_title || "RentalZone.in";
  const StateData = useSelector((state) => state);
  const ProductList =
    StateData?.Home?.data?.PRODUCT_LIST?.data?.data?.data || [];

  const { page_title, meta_title, meta_description, meta_keywords } =
    HomPageData || {};
  const cateLoadingChange = (type) => {
    setLoading({ ...loading, categoryListLoader: type });
  };
  const loadingChange = (name, type) => {
    setLoading({ ...loading, [name]: type });
  };

  const props = {
    homepage_category: Homepage_category,
    HomPageData: HomPageData,
    GeneralData: GeneralData,
    StateData: StateData,
    location: CurrentLocation,
    ProductList: ProductList || [],
    allCategoryList: allCategoryList,
  };
  useEffect(() => {
    dispatch(
      SetLocation({
        locationData: LOCATION_DATA,
      })
    );

    CategoryList({
      setLoading: cateLoadingChange,
      setState: setAllCategoryList,
    });
  }, []);

  useEffect(() => {
    dispatch(
      SelectCategory({
        categoryDetails: { category_id: 3, category_slug: "laptop-rental" },
      })
    );

    dispatch(
      HomePageApi({ Location: LOCATION_DATA?.city_slug || CurrentLocation })
    );
  }, [dispatch]);

  useEffect(() => {
    ScrollUp();
    document.title = pageTitle;
  }, [pageTitle]);

  useEffect(() => {
    UpdateSEO({
      page_title: page_title,
      meta_title: meta_title,
      meta_description: meta_description,
      meta_keywords: meta_keywords,
    });
  }, [page_title, meta_title, meta_description, meta_keywords]);

  return (
    <>
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
      <HanggingBar
        allCategoryListFromParent={true}
        ListOfCategory={allCategoryList}
      />
    </>
  );
};
export default Home;
