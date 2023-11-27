import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import fort from "../../assets/images/Essential/fort.png";
const LoadCommonFields = ({ setStates, body }) => {
  // return new Promise((resolve, reject) => {
  //   axios
  //     .post(`${REACT_APP_BASE_URL}/get-field-records`, body, { headers })
  //     .then((response) => {
  //       resolve(response.data.data);
  //       setStates(response.data.data);
  //     })
  //     .catch((error) => {
  //       ToastError(error);
  //       reject(error);
  //     });
  // });
};

const CommonSelector = ({
  isEdit,
  setSelectedTax,
  editQuotationData,
  quotation,
  placeholder,
  field,
  validation,
  setQuotation,
  postFieldName,
  optionsArray,
  Icon,
  iconPose,
  boxWidth,
  style,className
}) => {
  const [value, setValue] = useState("");
  const [stateData, setStateData] = useState([]);
  const [serchKeyword, setSerchKeyword] = useState("");
  const [applyChange, setApplyChange] = useState(false);
  const [optionShow, setOptionShow] = useState(false);
  const width = `${boxWidth}` || ""
  const Name = isEdit ? (applyChange ? value : placeholder || "") : value;

  const onSelect = (data) => {
    const id = stateData.filter((v) => v.value == data)[0].id;
    console.log(data, id);
    setQuotation({ ...quotation, [postFieldName]: id });
  };

  const onHandleChange = (e) => {
    setOptionShow(true)
    setSerchKeyword(e.target.value)
    // setApplyChange(true);
    // setValue(data);
  };
  const onHandleClick = (data) => {
    setOptionShow(true)
    // setApplyChange(true);
    // setValue(data);
  };

  useEffect(() => {
    const body = () => {
      switch (field) {
        case "assign_to":
          return {
            tableName: "Users",
            fieldName: "user_name",
            isCustomer: "",
            role_id: "3",
            search: serchKeyword,
          };
          break;

        case "company_id":
          return {
            tableName: "Companies",
            fieldName: "company_name",
            search: serchKeyword,
          };
          break;

        default:
          return {
            tableName: "Tax",
            fieldName: "tax_type",
            search: serchKeyword,
          };
          break;
      }
    };

    if (!["status", "technical_issue"].includes(field)) {
      LoadCommonFields({
        setStates: setStateData,
        body: body(),
      });
    } else if (["status"].includes(field)) {
      setStateData(statusData);
    } else {
      setStateData(optionsArray);
    }
  }, [serchKeyword]);

  console.log("fgdsgfasgfs",optionShow);
  return (
    <div className= {`${style||"AutoCompleteBox"} ${className||""}`} style={{width:`${width}`}}>
      {iconPose != "end" ? (
        <p className="selectorIcon">
          {Icon?<Icon /> : ""}
        </p>
      ) : (
        ""
      )}

      {/* <AutoComplete
        value={Name}
        options={stateData}
        style={{ width: `100%` }}
        onSelect={onSelect}
        onSearch={(text) => setSerchKeyword(text)}
        onChange={onChange}
        placeholder={placeholder}
      /> */}

     <div className="searchInboxContainer" onBlur={()=>setOptionShow(false)}>
     <input type="text" className="searchInbox" onClick={onHandleClick} onChange={onHandleChange} placeholder={placeholder}/>

     <div className={`OptionBox ${optionShow?"":"d-none"}`}>
     {["surat","dang","navasari","mumbai","delhi","punjab","kashmir"].filter((f)=>f.includes(serchKeyword)).map((e)=>{return(<>
     
      <div className="OptionBox_item"><img className="optionImg" src={fort} alt="" /> &nbsp;{e}</div>
     </>)})}
     </div>
     </div>

      {iconPose == "end" ? (
        <p className="selectorIcon">
          <Icon />
        </p>
      ) : (
        ""
      )}
      <br />
      <br />
    </div>
  );
};

export default CommonSelector;

const statusData = [
  {
    user_name: "Pending",
    id: 0,
    label: "Opt1",
    text: "Pending",
    value: "Pending",
  },
  {
    user_name: "Done",
    id: 1,
    label: "Opt2",
    text: "Done",
    value: "Done",
  },
  {
    user_name: "Not Resolved",
    id: 2,
    label: "Opt3",
    text: "Not Resolved",
    value: "Not Resolved",
  },
];
