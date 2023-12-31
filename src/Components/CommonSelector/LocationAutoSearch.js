import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import fort from "../../assets/images/Essential/fort.png";
import {
  GetApi,
  SearchDirect,
  WaitFor,
} from "../Common/Component/helperFunction";
import { ApiLoader } from "../Common/Component/DesignElement";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationActions,
  SetLocation,
} from "../../Redux_Store/Actions/generalActions";
const LocationAutoSearch = ({
  placeholder,
  Icon,
  iconPose,
  boxWidth,
  style,
  className,
  OnSearchLocation,
}) => {
  const dispatch = useDispatch();
  const GeneralState = useSelector((state) => state.GeneralState);
  const { isLocationLoading, location, locationsList } = GeneralState;
  const { city_slug, name } = GeneralState?.location;
  const [serchKeyword, setSerchKeyword] = useState(name);
  const [optionShow, setOptionShow] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const width = `${boxWidth}` || "";
  const onHandleChange = (e) => {
    setSerchKeyword(e.target.value);
  };
  const onInputClick = (e) => {
    setOptionShow(true);
  };
  const onHandleClick = (e) => {
    setSerchKeyword(e.name);
    setOptionShow(false);
    OnSearchLocation({ locationData: e });
    dispatch(SetLocation({ locationData: e }));
    localStorage.setItem("locationData", JSON.stringify(e));
  };

  useEffect(() => {
    const Fun = () => {
      if (optionShow) {
        return dispatch(LocationActions({ serchKeyword: serchKeyword }));
      }
    };

    const timeout = setTimeout(() => {
      Fun();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [serchKeyword, optionShow]);

  useEffect(() => {
    setSerchKeyword(name);
  }, [name]);

  return (
    <div
      className={`${style || "AutoCompleteBox"} ${className || ""}`}
      style={{ width: `${width}` }}
    >
      {iconPose != "end" ? (
        <p className="selectorIcon cursorPointer">{Icon ? <Icon /> : ""}</p>
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
          value={serchKeyword}
        />
        <div
          className={`autoSearchLoader ${isLocationLoading ? "" : "d-none"}`}
        >
          <ApiLoader />
        </div>

        <div
          className={`OptionBox ${optionShow ? "" : "d-none"}`}
          onPointerLeave={() => setMouseOn(false)}
          onMouseMove={() => setMouseOn(true)}
        >
          {locationsList?.length > 0 ? (
            <>
              {locationsList?.map((e) => {
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
            </>
          ) : (
            <div className="OptionBox_item text-center">No records</div>
          )}
        </div>
      </div>

      {iconPose == "end" ? (
        <p className="selectorIcon cursorPointer">
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
