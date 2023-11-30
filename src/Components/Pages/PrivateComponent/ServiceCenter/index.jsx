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
import getquot from "../../../../assets/images/Essential/getquot.png";
import wapp from "../../../../assets/images/Essential/wapp.png";
import { Image } from "../../../../AbstractElements";
import { FS3, FS6 } from "../../../../CommonElements/Font/FS";
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
        <br />
        <br />
        <div className="sc_fixedButton">
          <button className="btn btn-light" onClick={toggle2}>
            <FS6>
              {" "}
              <Image attrImage={{ src: wapp, alt: "message" }} /> Chat{" "}
            </FS6>
          </button>{" "}
          <button className="btn btn-primary star" onClick={toggle}>
            {" "}
            <FS6>
              <Image attrImage={{ src: getquot, alt: "message" }} /> Get Quote
              Now{" "}
            </FS6>
          </button>{" "}
        </div>
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
