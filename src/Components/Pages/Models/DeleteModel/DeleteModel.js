import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import { FS2, FS3, FS4, FS9 } from "../../../../CommonElements/Font/FS";
import { CloseButton } from "../../../Common/Component/DesignElement";

const DeleteModel = (props) => {
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
      name: "location",
    },
    {
      title: "Message",
      placeHolder: "Message",
      type: "textarea",
      name: "message",
    },
  ];

  const { editRecordData, OnDelete, lablename } = props;

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
      className="gq-model-content"
    >
      <div className="modal-header">
        <H5 attrH5={{ className: "modal-title" }}>{"Get Quotes"}</H5>
        <CloseButton
          attr={{ className: "reg_React_Icon", onClick: props.toggler }}
        />
      </div>
      {/* <img src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
      <ModalBody className={props.bodyClass}>
        <div>
          <FS9>Are you want delete details of {lablename}?</FS9>
        </div>
        <div
          className="gq-model-bbox"
          onClick={() => console.log(editRecordData)}
        >
          <Btn attrBtn={{ color: "primary", onClick: OnDelete }}>{"Yes"}</Btn>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModel;
