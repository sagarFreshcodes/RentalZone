import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import Productpage from "../../../../assets/images/Essential/Productpage.png";
import { useEffect } from "react";
import {
  GET_API,
  GetApi,
  HanggingBar,
  ScrollUp,
  ValidParamsForProductDetail,
} from "../../../Common/Component/helperFunction";
import { HOME_ROUTE } from "../../../../Route/RouthPath";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  API_ROOT_URL,
  GET_SINGLE_PRODUCT_API,
} from "../../../../Constant/api_constant";
const ProductDetails = (props) => {
  let location = useLocation();
  const product_id = ValidParamsForProductDetail(location);
  const [productDetails, setProductDetails] = useState({});
  const GeneralData = useSelector((state) => state?.GeneralState);
  const { ads_banners } = GeneralData.data.data || {};
  const { banner_image } = ads_banners ? ads_banners[0] || {} : {};

  const BreadcrumData = [
    { title: "home", link: `${HOME_ROUTE}` },
    {
      title: `${productDetails?.product_name}`.toUpperCase(),
      link: `Product`,
    },
  ];

  const propsObject = {
    BreadcrumData: BreadcrumData,
    props: props,
    ProductDetails: productDetails,
    banner_image: banner_image,
  };

  useEffect(() => {
    GET_API(
      `${API_ROOT_URL}/${GET_SINGLE_PRODUCT_API}?product_id=${product_id}`
    )
      .then((response) => {
        console.log("test2512", response);
        setProductDetails(response?.data?.data);
      })
      .catch((error) => {
        console.log("test2512", error);
      });
    ScrollUp();
  }, []);
  return (
    <>
      <Fragment>
        <Container fluid={true}>
          <div className="ProductPage" onClick={() => console.log(product_id)}>
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
