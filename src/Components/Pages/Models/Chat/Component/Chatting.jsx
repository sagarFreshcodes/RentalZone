import React, { Fragment, useContext } from "react";
import { Col, Row } from "reactstrap";
import ChatMessage from "./ChatMessage";
import ChatHeader from "./ChatHeader";
import SendChat from "./SendChat";
import ChatAppContext from "../../../../../_helper/Chat";

const Chatting = ({ allProps }) => {
  const { menuToggle } = useContext(ChatAppContext);

  return (
    <Fragment>
      <Row className="chat-box">
        <div className="chat">
          <ChatHeader allProps={allProps} />
          <div className="bannerImage">
            <img
              className="w-100"
              src={
                // banner_image ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9TsGYd5vsIlCTurNFuPT61L6lOakpsnAMezf283p6aw&s"
              }
              alt={"banner_image"}
            />
          </div>
          <br />
          <br />
          <ChatMessage allProps={allProps} />
          <SendChat allProps={allProps} />
        </div>

        {/* <Col className={`ps-0 chat-menu ${menuToggle ? 'show' : ''}`}>
          <ChatMenu />
        </Col> */}
      </Row>
    </Fragment>
  );
};
export default Chatting;
