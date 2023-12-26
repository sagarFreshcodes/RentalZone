import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import { FS2, FS3, FS4, FS9 } from "../../../../CommonElements/Font/FS";
import {
  ApiLoader,
  CloseButton,
} from "../../../Common/Component/DesignElement";

const DeleteModel = (props) => {
  const { editRecordData, OnDelete, lablename, loader } = props;

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
          <Btn attrBtn={{ color: "primary", onClick: OnDelete }}>
            {"Yes"} {loader ? <ApiLoader /> : ""}
          </Btn>{" "}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModel;
