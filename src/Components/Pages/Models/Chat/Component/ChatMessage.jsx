import React, { Fragment, useContext, useEffect, useState } from "react";
import { Image, LI, UL } from "../../../../../AbstractElements";
import ChatAppContext from "../../../../../_helper/Chat";
import start_conversion from "../../../../../assets/images/start-conversion.jpg";

const ChatMessage = ({ allProps }) => {
  const {
    allMemberss,
    chatss,
    selectedUserr,
    currentUserr,
    fetchChatMemberAsyn,
    fetchChatAsyn,
  } = useContext(ChatAppContext);
  var images = require.context("../../../../../assets/images", true);
  const { chatMessage, loading, allMassges } = allProps;

  const dynamicImage = (image) => {
    return images(`./${image}`);
  };

  const selectedChat =
    allMemberss && chatss && selectedUserr
      ? chatss.find(
          (x) =>
            x.users.includes(currentUserr.id) &&
            x.users.includes(selectedUserr.id)
        )
      : null;
  var activeChat = 0;
  if (selectedUserr != null) activeChat = selectedUserr.id;

  return (
    <Fragment>
      {allMassges ? (
        <div className="chat-history chat-msg-box custom-scrollbar">
          <UL attrUL={{ className: "simple-list" }}>
            {allMassges.length > 0 ? (
              allMassges?.map((item, index) => {
                return (
                  <LI attrLI={{ className: "clearfix border-0" }} key={index}>
                    <div
                      className={`message  ${
                        item.sender !== 0
                          ? "my-message"
                          : "other-message pull-right "
                      }`}
                    >
                      <Image
                        attrImage={{
                          src: ``,
                          className: `rounded-circle ${
                            item.sender !== 0 ? "float-start" : "float-end"
                          } chat-user-img img-30`,
                          alt: "",
                        }}
                      />
                      <div className="message-data text-end">
                        <span className="message-data-time">{item.time}</span>
                      </div>
                      {item.text}
                    </div>
                  </LI>
                );
              })
            ) : (
              <div>
                <Image
                  attrImage={{
                    className: "img-fluid",
                    src: `${start_conversion}`,
                    alt: "start conversion ",
                  }}
                />
              </div>
            )}
          </UL>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </Fragment>
  );
};
export default ChatMessage;
