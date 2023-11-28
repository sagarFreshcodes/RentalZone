import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import Chatting from "./Component/Chatting";

const ChatModel = (props) => {
  const [selectedOption, setSelectedOption] = useState({ lable: `--Select--` });
  const formFields = [
    {
      title: "Individual or Comapny",
      placeHolder: "--Select--",
      type: "select",
      name: "selection",
    },
    {
      title: "Quantity",
      placeHolder: "Quantity",
      type: "text",
      name: "quantity",
    },
    {
      title: "Name",
      placeHolder: "Name",
      name: "name",
    },
    {
      title: "Phone Number",
      placeHolder: "Phone Number",
      type: "number",
      name: "phoneNumber",
    },
    {
      title: "Email",
      placeHolder: "Email",
      type: "text",
      name: "email",
    },
    {
      title: "Location",
      placeHolder: "Location",
      type: "text",
      name: "",
    },
    {
      title: "Message",
      placeHolder: "Message",
      type: "text",
      name: "location",
    },
  ];

  const selectOption = [
    { lable: "abc", id: "1" },
    { lable: "cdf", id: "2" },
  ];

  const categ = [
    "Laptop Rental",
    "Computer Rental",
    "Printer Rental",
    "IPad Rental",
    "Server Rental",
    "MacBook Rental",
    "Laptop Rental",
    "Computer Rental",
    "Printer Rental",
    "IPad Rental",
    "Server Rental",
    "MacBook Rental",
  ];
  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggler}
      size={props.size}
      centered 
      className="chatModelContent"
    >
 
      <ModalBody className={props.bodyClass}>
        <Chatting/>
      </ModalBody>
      <ModalFooter>
        <Btn attrBtn={{ color: "secondary", onClick: props.toggler }}>
          {Close}
        </Btn>
        {/* <Btn attrBtn={{ color: 'primary', onClick: props.toggler }}>{SaveChanges}</Btn> */}
      </ModalFooter>
    </Modal>
  );
};

export default ChatModel;
