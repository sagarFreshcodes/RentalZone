import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import CategoryMedia from "./CategoryMedia";
import CategoryProduct from "./CategoryProduct";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useEffect } from "react";
import { ListDetailsApi } from "../../../../Redux_Store/Actions/listDetailsActions";
import { BASE_ROUTE, HOME_ROUTE } from "../../../../Route/RouthPath";
import { ScrollUp, UpdateSEO } from "../../../Common/Component/helperFunction";
const CatagoryDetails = () => {
  const QueryParams = useLocation();
  const Parameter = `${QueryParams?.pathname}`.split("-");
  const slug = Parameter.slice(0, -1).join("-");
  const listing_id = +Parameter.slice(-1);
  const dispatch = useDispatch();
  const ListDetailsState =
    useSelector((state) => state?.ListDetailsState) || {};
  const { isLoading, data } = ListDetailsState || {};
  const ListDetails = data?.data || {};

  const {page_title, meta_title, meta_description, meta_keywords } = ListDetails ||  {}

  const {listing_name} = ListDetails || {}
 
  useEffect(() => {
    const GetBusinessDetails = ({ slug, listing_id }) => {
      dispatch(
        ListDetailsApi({
          slug: slug,
          listing_id: listing_id,
        })
      );
    };
    GetBusinessDetails({ slug: slug, listing_id: listing_id });

    ScrollUp()
  }, []);

  const preBreadcrumData = QueryParams?.state?.BreadcrumData
    ? QueryParams?.state?.BreadcrumData
    : [{ title: "home", link: `${HOME_ROUTE}` }];
  const BreadcrumData = [
    ...preBreadcrumData,
    { title: listing_name, link: `${BASE_ROUTE}${QueryParams?.pathname}` },
  ];

  const allProps = {
    ListDetails: ListDetails,
    BreadcrumData: BreadcrumData,
  };

  useEffect(() => {
    UpdateSEO({
      page_title: page_title,
      meta_title: meta_title,
      meta_description: meta_description,
      meta_keywords: meta_keywords,
    });
  }, [page_title, meta_title, meta_description, meta_keywords]);
  
  const test = () => {
    console.log("11222",ListDetails);
  };
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <div className={isLoading ? "d-none" : "servicePage"} onClick={test}>
          <div className="cds_content">
            <Content allProps={allProps} />
          </div>
        </div> 
        <div className={isLoading ? "d-none" : "servicePage"} onClick={test}>
          <div className="s_content ">
            <CategoryProduct />
            <CategoryMedia />
          </div>

          <div className="s_sidebar">
            <ContentBox className="">
              {" "}
              <SideBar />
            </ContentBox>
          </div>
        </div>
        <ContentBox className="">
          <Footer />
        </ContentBox>
      </Container>
    </Fragment>
  );
};
export default CatagoryDetails;
