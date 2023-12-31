import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import fort from "../../assets/images/Essential/fort.png";
import {
  GetApi,
  POST_API,
  SearchDirect,
  ToastError,
  WaitFor,
} from "../Common/Component/helperFunction";
import { ApiLoader } from "../Common/Component/DesignElement";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationActions,
  SetLocation,
} from "../../Redux_Store/Actions/generalActions";
import {
  API_ROOT_URL,
  SEARCH_CITY_AREA_API,
} from "../../Constant/api_constant";
import axios from "axios";
const CommonAutoSelect = ({
  placeholder,
  Icon,
  iconPose,
  fieldName,
  boxWidth,
  style,
  className,
  OnSearchLocation,
  labelName,
  APIBody,
  ApiEndPoint,
  OnSelect,
  state,
}) => {
  const dispatch = useDispatch();
  const [optionList, setOptionList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [serchKeyword, setSerchKeyword] = useState("");
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
    setSerchKeyword(e[labelName]);
    setOptionShow(false);
    e[`fieldName`] = fieldName;
    OnSelect(e);
  };

  useEffect(() => {
    const chech = optionList.some((i) => i?.id == state[fieldName]);

    const Fun = async () => {
      //  !chech  is check some record exist in optionlist which id match with id which saved in form state(like formData); it usefull while we have only id of one option in state(especialy during update) ; we need lable in dropdown during page render
      if (!chech || optionShow) {
        setLoading(true);
        axios
          .post(`${API_ROOT_URL}/${ApiEndPoint}`, APIBody || {})
          .then((response) => {
            const ResponseData =
              labelName == "category_name"
                ? response?.data?.data?.category
                : response?.data?.data;
            setOptionList(ResponseData);
            setSerchKeyword(
              chech
                ? ResponseData?.filter((i) => i?.id == state[fieldName])[0][
                    labelName
                  ]
                : ""
            );
            setLoading(false);
          })
          .catch((error) => {
            ToastError(error);

            setLoading(false);
          });
      }
    };

    const timeout = setTimeout(() => {
      Fun();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [optionShow]);
  // }, [serchKeyword, optionShow]);
  useEffect(() => {
    const condition = optionList.some((i) => i?.id == state[fieldName]);
    if (condition) {
      optionList && optionList?.length > 0
        ? setSerchKeyword(
            optionList?.filter((i) => i?.id == state[fieldName])[0][labelName]
          )
        : console.log("first");
    }
  }, [optionList]);
  return (
    <div
      className={`${style || "CommonSelect form-control d-flex commonInput"} ${
        className || ""
      }`}
      style={{ width: `${width}` }}
    >
      <div
        className="searchInboxContainer"
        onBlur={() => setOptionShow(mouseOn ? true : false)}
      >
        <input
          type="text"
          className="searchInbox "
          onClick={onInputClick}
          onChange={onHandleChange}
          placeholder={placeholder}
          value={serchKeyword}
        />
        <div className={`autoSearchLoader ${loading ? "" : "d-none"}`}>
          <ApiLoader />
        </div>

        <div
          className={`OptionBox ${optionShow ? "" : "d-none"}`}
          onPointerLeave={() => setMouseOn(false)}
          onMouseMove={() => setMouseOn(true)}
        >
          {optionList?.length > 0 ? (
            <>
              {optionList
                .filter((i) =>
                  `${i[labelName]}`
                    .toLowerCase()
                    .includes(`${serchKeyword}`.toLowerCase())
                )
                ?.map((e) => {
                  return (
                    <>
                      <div
                        className="OptionBox_item"
                        onClick={() => onHandleClick(e)}
                      >
                        {/* <img className="optionImg" src={fort} alt="" /> &nbsp;{e?.name} */}

                        {(e[labelName] && e[labelName]) || e?.city}
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

      <br />
      <br />
    </div>
  );
};

export default CommonAutoSelect;

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

// css

// .CommonSelect {
//   position: relative;
//   display: flex;
//   border: solid 2px #958989;
//   border-radius: 5px;
//   justify-content: center;
//   align-items: center;
//   padding: 0 20px;
//   height: 2.5rem;
//   .selectorIcon {
//     position: relative;
//     top: 8px;
//     cursor: pointer;
//   }
//   .searchInboxContainer {
//     width: 100%;

//     .searchInbox {
//       width: 100%;
//       border: none;
//       text-transform: capitalize;
//     }

//     .autoSearchLoader {
//       display: flex;
//       position: absolute;
//       top: 10px;
//       right: 5px;
//     }

//     .OptionBox {
//       position: absolute;
//       border: solid 1px #979797;
//       border-radius: 6px;
//       width: 100%;
//       top: 3rem;
//       right: 1px;
//       background-color: white;
//       z-index: 7;
//       max-height: 18rem;
//       overflow-y: auto;

//       .OptionBox_item {
//         padding: 5px;
//         border: solid 1px #97979742;
//         cursor: pointer;
//       }
//     }
//   }
// }
