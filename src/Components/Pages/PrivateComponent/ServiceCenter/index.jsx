import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";

const ServiceCenter = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <ContentBox className="">
          
            {/* <FileSideBar /> */}
         
              <div className="servicePage">
                <div className="s_sidebar">
                  <SideBar />
                </div>
              
                <div className="s_content">
                  <Content />
                </div>
              </div> 
         
        </ContentBox>
      </Container>
    </Fragment>
  );
};
export default ServiceCenter;
