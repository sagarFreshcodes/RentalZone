import React, { Fragment, useContext } from 'react';
import { Col, Row } from 'reactstrap';
import ChatMessage from './ChatMessage'; 
import ChatHeader from './ChatHeader';
import SendChat from './SendChat';
import ChatAppContext from '../../../../../_helper/Chat';

const Chatting = () => {
  const { menuToggle } = useContext(ChatAppContext);

  return (
    <Fragment>
      <Row className='chat-box'> 
          <div className='chat'>
            <ChatHeader />
            <br /><br />
            <ChatMessage />
            <SendChat />
          </div>
     
        {/* <Col className={`ps-0 chat-menu ${menuToggle ? 'show' : ''}`}>
          <ChatMenu />
        </Col> */}
      </Row>
    </Fragment>
  );
};
export default Chatting;
