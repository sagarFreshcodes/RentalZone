import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import CategoryMedia from "./CategoryMedia";
import Productpage from "../../../../assets/images/Essential/Productpage.png";
import { useEffect } from "react";
import { ScrollUp } from "../../../Common/Component/helperFunction";
const ProductDetails = () => {
  useEffect(()=>{
    ScrollUp()
  },[])
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      {/* <Container fluid={true}>
        <div className="servicePage">
          <div className="cds_content">
            <Content />
          </div>
        </div>

        <div className="servicePage">
          <div className="s_content ">
            <ContentBox className="">
              {" "}
              <CategoryMedia />
            </ContentBox>
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
      </Container> */}

    <div className="w-100">
    <img className="w-100" style={{width:"100%", clipPath:"inset(0rem 9rem 0rem 12rem);"}} src={Productpage} alt="" />
    </div>
    </Fragment>
  );
};
export default ProductDetails;
