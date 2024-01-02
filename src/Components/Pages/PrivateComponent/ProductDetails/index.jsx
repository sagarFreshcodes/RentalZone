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
  ToastError,
  ValidParamsForProductDetail,
} from "../../../Common/Component/helperFunction";
import { HOME_ROUTE } from "../../../../Route/RouthPath";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  API_ROOT_URL,
  GET_SINGLE_PRODUCT_API,
} from "../../../../Constant/api_constant";
import { LoaderBox } from "../../../../CommonElements/LoaderBox/LoaderBox";
const ProductDetails = (props) => {
  let location = useLocation();
  const product_id = ValidParamsForProductDetail(location);
  const [productDetails, setProductDetails] = useState({});
  const [loading, setLoading] = useState({
    productDetailLoader: false,
  });
  const ChangeLoader = (key, value) => {
    setLoading({ ...loading, [key]: value });
  };
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
    ChangeLoader("productDetailLoader", true);
    GET_API(
      `${API_ROOT_URL}/${GET_SINGLE_PRODUCT_API}?product_id=${product_id}`
    )
      .then((response) => {
        setProductDetails(response?.data?.data);
        ChangeLoader("productDetailLoader", false);
      })
      .catch((error) => {
        ToastError(error);
        ChangeLoader("productDetailLoader", false);
      });
    ScrollUp();
  }, []);
  return (
    <>
      <Fragment>
        <LoaderBox isLoading={loading?.productDetailLoader}>
          <Container fluid={true}>
            <div
              className="ProductPage"
              onClick={() => console.log(product_id)}
            >
              <div className="content">
                <Content propsObject={propsObject} />
              </div>
            </div>

            <ContentBox className="">
              <Footer />
            </ContentBox>
          </Container>
        </LoaderBox>
      </Fragment>{" "}
      {/* <HanggingBar /> */}
    </>
  );
};
export default ProductDetails;
