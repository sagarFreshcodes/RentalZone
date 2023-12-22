import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Articals from "../../Knowledgebase/KnowledgeBase/Articals";
import ArticeVideo from "./ArticeVideo";
import FAQFeaturesTutorial from "./FeaturesTutorial";
import Questionss from "./Questions";

const FAQ_Page = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="FAQ" parent="Apps" title="FAQ" />
      <Container fluid={true}>
        <div className="faq-wrap">
          <Row>
            <Articals />
            <Questionss />
            <FAQFeaturesTutorial />
            <ArticeVideo />
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FAQ_Page;
