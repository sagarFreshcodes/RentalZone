import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import Productpage from "../../../../assets/images/Essential/Productpage.png";
import { useEffect } from "react";
import {
  HanggingBar,
  ScrollUp,
} from "../../../Common/Component/helperFunction";
import { HOME_ROUTE } from "../../../../Route/RouthPath";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const ProductDetails = (props) => {
  const GeneralData = useSelector((state) => state?.GeneralState);
  const { ads_banners } = GeneralData.data.data || {};
  const { banner_image } = ads_banners ? ads_banners[0] || {} : {};
  let location = useLocation();
  const ProductDetails = location?.state?.item;
  const BreadcrumData = [
    { title: "home", link: `${HOME_ROUTE}` },
    {
      title: `${ProductDetails?.product_name}`.toUpperCase(),
      link: `Product`,
    },
  ];

  const propsObject = {
    BreadcrumData: BreadcrumData,
    props: props,
    ProductDetails: ProductDetails,
    banner_image: banner_image,
  };

  useEffect(() => {
    ScrollUp();
  }, []);
  return (
    <>
      <Fragment>
        <Container fluid={true}>
          <div className="ProductPage">
            <div className="content">
              <Content propsObject={propsObject} />
            </div>
          </div>

          <ContentBox className="">
            <Footer />
          </ContentBox>
        </Container>
      </Fragment>{" "}
      {/* <HanggingBar /> */}
    </>
  );
};
export default ProductDetails;
