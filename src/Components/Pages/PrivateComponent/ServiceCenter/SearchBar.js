import React from "react";
import CommonSelector from "../../../CommonSelector/CommonSelector";
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { CardHeader, Form, Input, Media } from "reactstrap";
const SearchIcon = () => {
  return (
    <p className="SearchIconBox">
      <IoSearch className="react-icon-common" />
    </p>
  );
};

const LocationIcon = () => {
  return (
    <IoLocationOutline
      className="react-icon-common"
      style={{ fontSize: "25px" }}
    />
  );
};

const SearchBar = () => {
  return (
    <Media>
      <CommonSelector
        placeholder="Location"
        field={`status`}
        setQuotation={{}}
        quotation={{}}
        postFieldName={`status`}
        optionsArray={[]}
        Icon={LocationIcon}
        boxWidth="15rem"
      />
      &nbsp;&nbsp;&nbsp;
      <CommonSelector
        placeholder="Category, Listing, Product"
        field={`status`}
        setQuotation={{}}
        quotation={{}}
        postFieldName={`status`}
        optionsArray={[]}
        Icon={SearchIcon}
        iconPose="end"
      />
    </Media>
  );
};

export default SearchBar;
