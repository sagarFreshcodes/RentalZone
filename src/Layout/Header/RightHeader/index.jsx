import React, { Fragment, useState } from "react";

import Language from "./Language";
import Searchbar from "./Searchbar";
import Notificationbar from "./Notificationbar";
import MoonLight from "./MoonLight";
import CartHeader from "./CartHeader";
import BookmarkHeader from "./BookmarkHeader";
import UserHeader from "./UserHeader";
import { UL } from "../../../AbstractElements";
import { Col } from "reactstrap";
import SearchModal from "./SearchModel";
import SearchBar from "../../../Components/Pages/PrivateComponent/Home/SearchBar";
import { useLocation } from 'react-router-dom';
const RightHeader = (props) => {
  let location = useLocation();
  const [modal, setModel] = useState(false);
  const toggle = () => {
    modal ? setModel(false) : setModel(true);
  };

 const  onSearch = ()=>{
  toggle() 
 }
  return (
    <Fragment>
      <Col  className="nav-right pull-right right-header col-2 p-0 ms-auto" 
      > 
        <UL attrUL={{ className: "simple-list nav-menus flex-row" }}> 
          <UserHeader />
        </UL> 
      </Col> 
    </Fragment>
  );
};

export default RightHeader;
