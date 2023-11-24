import React, { Fragment } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import PaginationBar from "./Pagination";

const ServiceCenter = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}> 
          {/* <FileSideBar /> */}

          <div className="servicePage">
            <div className="s_content">
              <Content />
            </div>

            <div className="s_sidebar">
              <SideBar />
            </div>
          </div> 
        <ContentBox className="">
          <PaginationBar />
        </ContentBox>
        <ContentBox className="">
          <Footer />
        </ContentBox>
      </Container>
    </Fragment>
  );
};
export default ServiceCenter;
