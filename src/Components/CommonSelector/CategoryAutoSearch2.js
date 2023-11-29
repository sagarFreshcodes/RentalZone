import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import fort from "../../assets/images/Essential/fort.png";
import { GetApi } from "../Common/Component/helperFunction";
import { ApiLoader } from "../Common/Component/DesignElement";
import { useDispatch, useSelector } from "react-redux";
import { SetLocation } from "../../Redux_Store/Actions/generalActions";
import { ActionType } from "../../Redux_Store/ReduxConstant";
const LoadCommonFields = ({ setStates, body }) => {};

const CategoryAutoSearch2 = ({
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
  className, setState,currentLocation
}) => {
  const dispatch = useDispatch();
  const LocatioInState = useSelector((state) => state ); 
  const [value, setValue] = useState("");

  const [stateData, setStateData] = useState([]);
  const [serchKeyword, setSerchKeyword] = useState("");
  const [applyChange, setApplyChange] = useState(false);
  const [optionShow, setOptionShow] = useState(false);
  const [blur, setBlur] = useState(false);
  const [leave, setLeave] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const [optionList, setOptionList] = useState([]);
  const [loader, setLoader] = useState(false);

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
  const onInputClick = (e) => {
    console.log(`LocatioInState`,LocatioInState);
    setOptionShow(true);
  };

  const onHandleClick = (e) => {
    setOptionShow(false);
    console.log("redux log",e);
    setState(e.name) 
   
  };

  useEffect(() => {
    setLoader(true);
    GetApi(`https://laptops.rent/api/get-search-data?keyword=${serchKeyword}&current_location=${currentLocation}`)
      .then((response) => {
        setOptionList(response.data.data);
        setLoader(false);
        console.log("2512", response.data.data);
      })
      .catch((error) => {
        setLoader(false);
        console.log(`2512`, error);
      });
  }, [serchKeyword]);

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

      <div
        className="searchInboxContainer"
        onBlur={() => setOptionShow(mouseOn ? true : false)}
      >
        <input
          type="text"
          className="searchInbox"
          onClick={onInputClick}
          onChange={onHandleChange}
          placeholder={placeholder}
          value={placeholder}
        />
        <div className={`CategorySearchLoader ${loader ? "" : "d-none"}`}>
          <ApiLoader />
        </div>

        <div
          className={`OptionBox ${optionShow ? "" : "d-none"}`}
          onPointerLeave={() => setMouseOn(false)}
          onMouseMove={() => setMouseOn(true)}
        >
          {optionList.map((e) => {
            return (
              <>
                <div
                  className="OptionBox_item"
                  onClick={() => onHandleClick(e)}
                >
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

export default CategoryAutoSearch2;

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
