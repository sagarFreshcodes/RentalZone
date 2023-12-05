import React, { useContext, useState } from "react";
import { Col, Input, InputGroup, Row } from "reactstrap";
import { Picker } from "emoji-mart";
import { Btn, Image } from "../../../../../AbstractElements";
import ChatAppContext from "../../../../../_helper/Chat";
import emoje from "../../../../../assets/images/Essential/Models/emoje.png";
import Attcachment from "../../../../../assets/images/Essential/Models/Attcachment.png";
import search from "../../../../../assets/images/Essential/Models/search.png";
import send from "../../../../../assets/images/Essential/Models/send.png";
const SendChat = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  const {
    chatss,
    selectedUserr,
    currentUserr,
    sendMessageAsyn,
    replyByUserAsyn,
  } = useContext(ChatAppContext);

  const addEmoji = (emoji) => {
    const text = `${messageInput}${emoji.native}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message) => {
    setMessageInput(message);
  };

  const handleMessagePress = (e) => {
    if (e.key === "Enter" || e === "send") {
      var container = document.querySelector(".chat-history");
      setTimeout(function () {
        container.scrollBy({ top: 200, behavior: "smooth" });
      }, 310);

      let currentUserId = currentUserr.id;
      let selectedUserId = selectedUserr.id;
      let selectedUserName = selectedUserr.name;

      if (messageInput.length > 0) {
        sendMessageAsyn(currentUserId, selectedUserId, messageInput, chatss);
        setMessageInput("");
        setTimeout(() => {
          const replyMessage =
            "Hey This is " +
            selectedUserName +
            ", Sorry I busy right now, I will text you later";
          if (selectedUserr.online === true)
            document.querySelector(".status-circle").classList.add("online");
          selectedUserr.online = true;
          replyByUserAsyn(currentUserId, selectedUserId, replyMessage, chatss);
        }, 5000);
      }
    }
  };
  return (
    <div className="chat-message clearfix">
      <Row>
        <div>
          {showEmojiPicker ? (
            <Picker set="apple" emojiSize={30} onSelect={addEmoji} />
          ) : null}
        </div>
        <div className="chatmessegeColumn">
          <InputGroup className="text-box">
            <div className="emogyBox">
              <img src={emoje} alt=""   />
            </div>
            <input type="text" placeholder="Type a message..." />
            <img className="clipImg" src={Attcachment} alt=""   />
          </InputGroup> 
            <div className="sendArroBox">
              <img src={send} alt=""   />
            </div>
        </div>
      </Row>
    </div>
  );
};

export default SendChat;
