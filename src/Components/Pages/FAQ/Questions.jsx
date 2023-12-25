import React, { Fragment, useContext, useState } from "react";
import { Row, Col, Card, CardBody, CardHeader, Collapse } from "reactstrap";
import { Btn, H5, P } from "../../../AbstractElements";
import { HelpCircle } from "react-feather";
import FaqRightsidebae from "./FaqRightside";
import FaqContext from "../../../_helper/Faq";
import { ReactIcon } from "../../Common/Component/helperFunction";

const Questionss = ({ AllProps }) => {
  const { FaqData } = AllProps;
  const { faq } = useContext(FaqContext);
  const [isActivity, setIsActivity] = useState([]);
  const para =
    "Striking pewter studded epaulettes silver zips inner drawstring waist channel urban edge single-breasted jacket. Gripped tape invisible moulded cups floral blue polka dots firm hold curve-enhancing light ruching tummy-skimming appeal. ";

  const handelChange = (e) => {
    let collapseCopy = [...isActivity];
    collapseCopy[e] = !collapseCopy[e];
    setIsActivity(collapseCopy);
  };
  console.log("FaqData2===>", faq);
  return (
    <Fragment>
      <Col lg="12">
        <div className="header-faq">
          <H5 attrH5={{ className: "mb-0" }}>Quick Questions are answered</H5>
        </div>
        <Row
          className="row default-according style-1 faq-accordion"
          id="accordionoc"
        >
          <Col xl="8" lg="6" md="7" className="box-col-8 xl-60">
            <Fragment>
              {FaqData &&
                FaqData?.map((item, id) => {
                  return (
                    <Card key={id}>
                      <CardHeader>
                        <H5 attrH5={{ className: "mb-0" }}>
                          <Btn
                            attrBtn={{
                              color: "link ps-0",
                              onClick: () => handelChange(id),
                            }}
                          >
                            <ReactIcon
                              iconName={"AiOutlineQuestionCircle"}
                              attr={{ className: "w-10" }}
                            />
                            {item.question}
                          </Btn>
                        </H5>
                      </CardHeader>
                      <Collapse isOpen={isActivity[id]}>
                        <CardBody>
                          <P> {item.answer}</P>
                        </CardBody>
                      </Collapse>
                    </Card>
                  );
                })}
            </Fragment>
          </Col>
          <FaqRightsidebae />
        </Row>
      </Col>
    </Fragment>
  );
};
export default Questionss;
