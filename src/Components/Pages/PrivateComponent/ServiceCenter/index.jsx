import React, { Fragment, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import PaginationBar from "./Pagination";
import GetQuotesModel from "../../Models/GetQuotes/GetQuotes";
import ChatModel from "../../Models/Chat/Chat";

const ServiceCenter = () => {
  const [modal, setModel] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const [serviceData, setServiceData] = useState({});
  const toggle = () => {
    if (modal) {
      setModel(false);
    } else {
      setModel(true);
    }
  };
  const toggle2 = () => {
    if (chatModal) {
      setChatModal(false);
    } else {
      setChatModal(true);
    }
  };
  const AllProps = {
    toggle: toggle,
    toggle2: toggle2,
    setServiceData: setServiceData,
    serviceData: serviceData,
  };

  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <div className="servicePage">
          <div className="s_content">
            <Content AllProps={AllProps} />
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
      <GetQuotesModel
        serviceData={serviceData}
        toggler={toggle}
        isOpen={modal}
      />

      <ChatModel
        serviceData={serviceData}
        toggler={toggle2}
        isOpen={chatModal}
      />
    </Fragment>
  );
};
export default ServiceCenter;
