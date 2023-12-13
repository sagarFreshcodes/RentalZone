import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { PlusSquare, Upload } from "react-feather";
import errorImg from "../../../../assets/images/search-not-found.png";
import { toast } from "react-toastify";
import { H4, H6, LI, P, UL, Image, H1, H3 } from "../../../../AbstractElements";
import { CardHeader, Form, Input, Media } from "reactstrap";
import { FileApi } from "../../../../api";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FS10,
  FS3,
  FS4,
  FS6,
  FS8,
  FS9,
} from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { BreadCrum } from "../../../Common/Component/helperFunction";
import ProductDetail from "./ProductDetail";
import SideBar from "./SideBar";

const Content = ({ propsObject }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);
  const { BreadcrumData } = propsObject;
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  return (
    <Fragment>
      <ContentBox className="">
        <FS4 attr={{ className: "lh-1" }}>{BreadCrum(BreadcrumData)}</FS4>
      </ContentBox>
      <ContentBox className="">
        <div className="productContent">
          <ProductDetail/>
          <SideBar/>
        </div>
      </ContentBox>
    </Fragment>
  );
};
export default Content;

 
