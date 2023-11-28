import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import fort from "../../assets/images/Essential/fort.png";
import { GetApi } from "../Common/Component/helperFunction";
const LoadCommonFields = ({ setStates, body }) => {};

const LocationAutoSearch = ({
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
}) => {
  const [value, setValue] = useState("");
  const [stateData, setStateData] = useState([]);
  const [serchKeyword, setSerchKeyword] = useState("");
  const [applyChange, setApplyChange] = useState(false);
  const [optionShow, setOptionShow] = useState(false);
  const [optionList, setOptionList] = useState([]);
  const width = `${boxWidth}` || "";
  const Name = isEdit ? (applyChange ? value : placeholder || "") : value;

  const onSelect = (data) => {
    const id = stateData.filter((v) => v.value == data)[0].id;
    console.log(data, id);
    setQuotation({ ...quotation, [postFieldName]: id });
  };

  const onHandleChange = (e) => {
    setSerchKeyword(e.target.value);
  };
  const onHandleClick = (data) => {
    setOptionShow(true);
  };

  // useEffect(() => {
  //   GetApi(`https://laptops.rent/api/search-city-area?keyword=${serchKeyword}`)
  //     .then((response) => {
  //       setOptionList(response.data.data);
  //       console.log("2512", response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(`2512`, error);
  //     });
  // }, [serchKeyword]);

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

        <div className={`OptionBox ${true ? "" : "d-none"}`}>
          {optionList.map((e) => {
            return (
              <>
                <div className="OptionBox_item">
                  {/* <img className="optionImg" src={fort} alt="" /> &nbsp;{e?.name} */}

                  {e?.name}
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

export default LocationAutoSearch;

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
