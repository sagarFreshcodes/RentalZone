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

const CommonAutoSearch = ({
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
  style,
  className,
  options,
  setState
}) => {
  const [value, setValue] = useState("");
  const [stateData, setStateData] = useState([]);
  const [serchKeyword, setSerchKeyword] = useState("");
  const [applyChange, setApplyChange] = useState(false);
  const [optionShow, setOptionShow] = useState(false);
  const [optionData, setOptionData] = useState(options || []);
  const width = `${boxWidth}` || "";

  const onSelect = (data) => {
    const id = stateData.filter((v) => v.value == data)[0].id;
 
    setQuotation({ ...quotation, [postFieldName]: id });
  };

  const onHandleChange = (e) => {
    setOptionShow(true);
    setSerchKeyword(e.target.value);
    // setApplyChange(true);
    // setValue(data);
  };
  const onHandleClick = (data) => {
    setOptionShow(true);
 
  };
 
  return (
    <div
      className={`${style || "AutoCompleteBox"} ${className || ""}`}
      style={{ width: `${width}` }}
    >
      {iconPose != "end" ? (
        <p className="selectorIcon">{Icon ? <Icon /> : ""}</p>
      ) : (
        ""
      )}
      <div className="searchInboxContainer" onBlur={() => setOptionShow(false)}>
        <input
          type="text"
          className="searchInbox"
          onClick={onHandleClick}
          onChange={onHandleChange}
          placeholder={placeholder}
        />

        <div className={`OptionBox ${optionShow ? "" : "d-none"}`} >
          {optionData
            ?.filter((f) => f?.lable?.includes(serchKeyword))
            ?.map((e) => {
              return (
                <>
                  <div className="OptionBox_item"  >
                    {e.img ? (
                      <img className="optionImg" src={fort} alt="" />
                    ) : (
                      ""
                    )}
                    &nbsp;
                    {e?.lable}
                  </div>
                </>
              );
            })}
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

export default CommonAutoSearch;
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
