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

  const { BreadcrumData, props, ProductDetails, banner_image } = propsObject;

  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  const AllProps = {
    ProductDetails: ProductDetails,
    banner_image: banner_image,
  };
  const test = () => {
    console.log("props======>", ProductDetails);
  };
  return (
    <Fragment>
      <ContentBox attr={{ onClick: test }}>
        <FS4 attr={{ className: "lh-1", onClick: test }}>
          {BreadCrum(BreadcrumData)}
        </FS4>
      </ContentBox>
      <ContentBox className="">
        <div className="productContent">
          <ProductDetail AllProps={AllProps} />
          <SideBar AllProps={AllProps} />
        </div>
      </ContentBox>
    </Fragment>
  );
};
export default Content;
