import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";
import { FS2, FS3, FS4 } from "../../../../CommonElements/Font/FS";
import { CloseButton } from "../../../Common/Component/DesignElement";

const GetQuotesModel = (props) => {
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
      className="gq-model-content"
    >
      <div className="modal-header">
        <H5 attrH5={{ className: "modal-title" }}>{"Get Quotes"}</H5>
        <CloseButton attr={{className:"reg_React_Icon", onClick: props.toggler }}/>
      </div>
      {/* <img src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
      <ModalBody className={props.bodyClass}>
        <div>
          <div className="gq-model">
            <div className="title">
              <FS4
                attr={{ className: "FW5" }}
              >{`Select below option for quotes`}</FS4>
            </div>{" "}
            <div className="gqcatChecklist">
              {categ.map((i) => {
                return (
                  <>
                    <div className="gqcheckInput">
                      <input type="checkbox" />
                      <span className="gqcheckCtg">
                        {" "}
                        <FS2>{i}</FS2>
                      </span>{" "}
                    </div>
                  </>
                );
              })}
            </div>
            <br />
            <br />
            <div className="gq-fieldBox">
              {formFields.map((i) => {
                return (
                  <>
                    <div
                      className={
                        [
                          "selection",
                          "quantity",
                          "name",
                          "phoneNumber",
                        ].includes(i.name)
                          ? "gq-formKey"
                          : "gq-formKey2"
                      }
                    >
                      {" "}
                      <div className="title">
                        <FS4>{i.title}</FS4>
                      </div>{" "}
                      <div className="rightInput">
                        {i.name == `selection` ? (
                          <>
                            <select
                              name=""
                              id=""
                              onClick={(e) => console.log(e.target.value)}
                            >
                              <option value="adasd">Option 1</option>
                              <option value="adaseed">Option 2</option>
                            </select>
                          </>
                        ) : (
                          <>
                            {" "}
                            <div className="CMN_InputBox">
                              {" "}
                              <input
                                placeholder={i?.placeHolder}
                                className="quoteInput"
                                type={i?.type}
                                name={i?.name}
                              />{" "}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Btn attrBtn={{ color: "primary", onClick: props.toggler }}>
          {"Submit"}
        </Btn>
        {/* <Btn attrBtn={{ color: 'primary', onClick: props.toggler }}>{SaveChanges}</Btn> */}
      </ModalFooter>
    </Modal>
  );
};

export default GetQuotesModel;
