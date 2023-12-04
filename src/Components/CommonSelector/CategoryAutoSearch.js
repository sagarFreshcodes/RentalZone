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
  CategoryActions,
  GeneralActions,
  LocationActions,
  SelectCategory,
  SetCategory,
  SetLocation,
} from "../../Redux_Store/Actions/generalActions";

const CategoryAutoSearch = ({
  placeholder,
  Icon,
  iconPose,
  boxWidth,
  style,
  className,
  OnSearchIcon,
}) => {
  const dispatch = useDispatch();
  const GeneralState = useSelector((state) => state.GeneralState);
  const { categoryList, category, isCategoryLoading } = GeneralState;
  const CategoryName = `${category?.name}`;
  const [serchKeyword, setSerchKeyword] = useState(CategoryName);
  const [optionShow, setOptionShow] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const width = `${boxWidth}` || "";
  const onHandleChange = (e) => {
    setSerchKeyword(e.target.value);
  };

  const onInputClick = (e) => {
    console.log(serchKeyword);
    setOptionShow(true);
  };
  const onHandleClick = (e) => {
    console.log("clickOnOption",e);
    setSerchKeyword(e.name);
    setOptionShow(false);
    OnSearchIcon({searchData:e});
    dispatch(SetCategory({ categoryData: e }));


    // dispatch(
    //   SelectCategory({
    //     categoryDetails: {
    //       category_id: category_id,
    //       category_slug: category_slug,
    //     },
    //   })
    // );
  };
 

  useEffect(() => {
    const Fun = () => {
      if (optionShow) {
        return dispatch(
          CategoryActions({
            serchKeyword: serchKeyword,
            location: CategoryName,
          })
        );
      }
    };
    WaitFor({ time: 1000, functionality: Fun });
  }, [serchKeyword, optionShow]);

  return (
    <div
      className={`${style || "AutoCompleteBox"} ${className || ""}`}
      style={{ width: `${width}` }}
    >
      {iconPose != "end" ? (
        <p className="selectorIcon cursorPointer" onClick={OnSearchIcon}>
          {Icon ? <Icon /> : ""}
        </p>
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
          className={`CategorySearchLoader ${
            isCategoryLoading ? "" : "d-none"
          }`}
        >
          <ApiLoader />
        </div>

        <div
          className={`OptionBox ${optionShow ? "" : "d-none"}`}
          onPointerLeave={() => setMouseOn(false)}
          onMouseMove={() => setMouseOn(true)}
        >
          {/* {categoryList?.map((e) => {
            return (
              <>
                <div
                  className="OptionBox_item"
                  onClick={() => onHandleClick(e)}
                >
                  {e?.name}
                </div>
              </>
            );
          })} */}

          {categoryList?.length > 0 ? (
            <>
              {categoryList?.map((e) => {
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
        <p className="selectorIcon cursorPointer" onClick={OnSearchIcon}>
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

export default CategoryAutoSearch;

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
