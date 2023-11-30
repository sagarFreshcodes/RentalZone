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
const CatagoryDetails = () => {
  const ListDetailsState = useSelector((state) => state?.ListDetailsState?.data?.data);
  const {
    canonical,
    contact_person,
    cover_image_url,
    description,
    final_rating,
    get_ratings,
    listing_categories,
    listing_details,
    listing_id,
    listing_name,
    listing_thumbnail_url,
    listing_video_url,
    meta_description,
    meta_keywords,
    meta_title,
    page_title,
    profile_banner,
    profile_pic,
    ratings_count,
    related_listings,
  } = ListDetailsState;
  const allProps = {
    ListDetailsState:ListDetailsState
  }
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <div className="servicePage">
          <div className="cds_content">
            <Content allProps={allProps}/>
          </div>
        </div>

        <div className="servicePage">
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
