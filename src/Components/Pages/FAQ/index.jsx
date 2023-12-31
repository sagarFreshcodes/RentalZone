import React, { Fragment, useMemo } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Articals from "../../Knowledgebase/KnowledgeBase/Articals";
import ArticeVideo from "./ArticeVideo";
import FAQFeaturesTutorial from "./FeaturesTutorial";
import Questionss from "./Questions";
import { useDispatch, useSelector } from "react-redux";
import { FAQActions } from "../../../Redux_Store/Actions/generalActions";
import { LoaderBox } from "../../../CommonElements/LoaderBox/LoaderBox";
import { ContentBox } from "../../../CommonElements/ContentBox/ContentBox";
import { UpdateSEO } from "../../Common/Component/helperFunction";
import { FAQ_ROUTE } from "../../../Route/RouthPath";
const FAQ_Page = () => {
  const GeneralState = useSelector((state) => state?.GeneralState);
  const FaqData = GeneralState.faqData.data || [];
  const { isFAQLoading } = GeneralState;
  const dispatch = useDispatch();
  console.log("FaqData===>", FaqData);
  // const area_location = GeneralData?.area_location || [];
  const AllProps = {
    FaqData: FaqData,
  };

  useMemo(() => {
    dispatch(FAQActions());
  }, []);

  useMemo(() => {
    if (`${window.location.href}`.includes(FAQ_ROUTE)) {
      FaqData?.map((i) => {
        UpdateSEO({
          schemaData: {
            scriptData: i?.schema,
            scriptType: "application/ld+json",
          },
        });
      });
    }
  }, [FaqData]);
  return (
    <Fragment>
      <ContentBox attr={{ className: "FAQPage" }}>
        <LoaderBox isLoading={isFAQLoading}>
          <Container fluid={true}>
            <div className="faq-wrap">
              <Row>
                {/* <Articals /> */}
                <Questionss AllProps={AllProps} />
                {/* <FAQFeaturesTutorial />
            <ArticeVideo /> */}
              </Row>
            </div>
          </Container>{" "}
        </LoaderBox>
      </ContentBox>
    </Fragment>
  );
};
export default FAQ_Page;
