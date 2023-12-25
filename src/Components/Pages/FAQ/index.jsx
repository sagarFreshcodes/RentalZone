import React, { Fragment, useMemo } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Articals from "../../Knowledgebase/KnowledgeBase/Articals";
import ArticeVideo from "./ArticeVideo";
import FAQFeaturesTutorial from "./FeaturesTutorial";
import Questionss from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { FAQActions } from "../../../Redux_Store/Actions/generalActions";
const FAQ_Page = () => {
  const GeneralState = useSelector((state) => state?.GeneralState);
  const FaqData = GeneralState.faqData.data;
  const dispatch = useDispatch();
  console.log("FaqData===>", FaqData);
  // const area_location = GeneralData?.area_location || [];
  const AllProps = {
    FaqData: FaqData,
  };

  useMemo(() => {
    dispatch(FAQActions());
  }, []);
  return (
    <Fragment>
      <Breadcrumbs mainTitle="FAQ" parent="Apps" title="FAQ" />
      <Container fluid={true}>
        <div className="faq-wrap">
          <Row>
            {/* <Articals /> */}
            <Questionss AllProps={AllProps} />
            {/* <FAQFeaturesTutorial />
            <ArticeVideo /> */}
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};
export default FAQ_Page;
