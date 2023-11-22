import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";

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
  style
}) => {
  const [value, setValue] = useState("");
  const [stateData, setStateData] = useState([]);
  const [serchKeyword, setSerchKeyword] = useState("");
  const [applyChange, setApplyChange] = useState(false);
  const width = `${boxWidth}` || ""
  const Name = isEdit ? (applyChange ? value : placeholder || "") : value;

  const onSelect = (data) => {
    const id = stateData.filter((v) => v.value == data)[0].id;
    console.log(data, id);
    setQuotation({ ...quotation, [postFieldName]: id });
  };

  const onChange = (data) => {
    setApplyChange(true);
    setValue(data);
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

  return (
    <div className= {`${style||"AutoCompleteBox"}`} style={{width:`${width}`}}>
      {iconPose != "end" ? (
        <p className="selectorIcon">
          <Icon />
        </p>
      ) : (
        ""
      )}

      <AutoComplete
        value={Name}
        options={stateData}
        style={{ width: `100%` }}
        onSelect={onSelect}
        onSearch={(text) => setSerchKeyword(text)}
        onChange={onChange}
        placeholder={placeholder}
      />

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
