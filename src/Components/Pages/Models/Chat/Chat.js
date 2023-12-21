import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import Chatting from "./Component/Chatting";
import {
  GET_API,
  GetCurrentChatTime,
  POST_FORMDATA_API,
  ToastError,
} from "../../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  GET_CHATBOAT_API,
} from "../../../../Constant/api_constant";

const ChatModel = (props) => {
  const [selectedOption, setSelectedOption] = useState({ lable: `--Select--` });
  const [allMassges, setAllMessages] = useState([
    {
      sender: 0,
      time: "10:20 am",
      text: "Actually everything was fine. I'm very excited to show this to our team.",
    },
    {
      sender: 1,
      time: "10:14 am",
      text: "Well I am not sure. The rest of the team.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const OnChat = () => {
    setLoading(true);
    setAllMessages([
      {
        sender: 0,
        time: GetCurrentChatTime(),
        text: chatMessage,
      },
    ]);
    GET_API(`${API_ROOT_URL}/${GET_CHATBOAT_API}`)
      .then((response) => {
        setLoading(false);
        setChatMessage("");
        setAllMessages((prev) => [
          ...prev,
          {
            sender: 1,
            time: GetCurrentChatTime(),
            text: response?.data?.message,
          },
        ]);
      })
      .catch((error) => {
        ToastError(error);
        setLoading(false);
        console.log("=======>", error);
      });
  };

  const allProps = {
    toggle: props.toggler,
    OnChat: OnChat,
    chatMessage: chatMessage,
    loading: loading,
    setChatMessage: setChatMessage,
    allMassges: allMassges,
    setAllMessages: setAllMessages,
  };
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered
      className="chatModelContent"
    >
      <ModalBody className={props.bodyClass}>
        <Chatting allProps={allProps} />
      </ModalBody>
    </Modal>
  );
};

export default ChatModel;
