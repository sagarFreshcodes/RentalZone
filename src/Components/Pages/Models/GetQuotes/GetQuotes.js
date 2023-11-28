import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import { Close, SaveChanges } from "../../../../Constant";
import CommonAutoSearch from "../../../CommonSelector/CommonAutoSearch";
import { useState } from "react";

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
       
      </div>
      {/* <img src="https://t4.ftcdn.net/jpg/02/76/08/07/360_F_276080724_hltnCyDjcqAyRtLzDYo3T2jXbBtCD7fl.jpg" alt="" /> */}
      <ModalBody className={props.bodyClass}>
        <div>
          <div className="gq-model">
            <div className="gqcatChecklist">
              {categ.map((i) => {
                return (
                  <>
                    <div className="gqcheckInput">
                      <span className="gqcheckCtg"> {i}</span>{" "}
                      <input type="checkbox" />
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
                    <div className="gq-formKey">
                      {" "}
                      <div className="title">{i.title}</div>{" "}
                      <div className="rightInput">
                        {i.name == `selection` ? (
                          <>
                            {/* <CommonAutoSearch
                              options={selectOption}
                              setState={setSelectedOption}
                              placeholder={selectedOption?.lable}
                            /> */}

                            <select
                              name=""
                              id=""
                              onClick={(e) => console.log(e.target.value)}
                            >
                              <option value="adasd">adasd</option>
                              <option value="adaseed">adaseed</option>
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
        <Btn attrBtn={{ color: "secondary", onClick: props.toggler }}>
          {Close}
        </Btn>
        <Btn attrBtn={{ color: "primary", onClick: props.toggler }}>
          {"Submit"}
        </Btn>
        {/* <Btn attrBtn={{ color: 'primary', onClick: props.toggler }}>{SaveChanges}</Btn> */}
      </ModalFooter>
    </Modal>
  );
};

export default GetQuotesModel;
