import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer"; 
import Productpage from "../../../../assets/images/Essential/Productpage.png";
import { useEffect } from "react";
import { ScrollUp } from "../../../Common/Component/helperFunction";
import { HOME_ROUTE } from "../../../../Route/RouthPath";
const ProductDetails = () => {

  const BreadcrumData = [ 
    { title: "home", link: `${HOME_ROUTE}` },
    {
      title: `Product`,
      link: `Product`,
    },
    
  ];

  const propsObject = {
    BreadcrumData:BreadcrumData
  }

  useEffect(()=>{
    ScrollUp()
  },[])
  return (
    <Fragment> 
      <Container fluid={true}>
        <div className="ProductPage">
          <div className="content"> 
            <Content propsObject={propsObject}/>
          </div>
        </div>

      
        <ContentBox className="">
          <Footer />
        </ContentBox>
      </Container> 
    </Fragment>
  );
};
export default ProductDetails;
