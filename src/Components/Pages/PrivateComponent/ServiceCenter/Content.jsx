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
import Footer from "../../../../CommonElements/Footer/Footer";
import ServiceCard from "./ServiceCard";
import { BreadCum } from "../../../Common/Component/helperFunction";
import PaginationBar from "./Pagination";
import SearchBar from "../Home/SearchBar";

const Content = ({ AllProps }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);
  const { serviceData, setServiceData, toggle ,toggle2} = AllProps;
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="searchHeadBx w-90">
        {<SearchBar className="hideSearchbarOnDesktop" />}
      </div>

      <ContentBox className="">
        <FS4 attr={{ className: "lh-1" }}>
          {BreadCum(["Shimla", "Hotels in Shimla"])}
        </FS4>
      </ContentBox>
      <ContentBox className="">
        <FS10 attr={{ className: "lh-1" }}>Top Trendings For Your City </FS10>
      </ContentBox>
      <ContentBox className="">
        <div className="SeviceContainer">
          {TrandingList.map((item) => {
            return (
              <ServiceCard
                title={item.title}
                address1={item.address1}
                address2={item.address2}
                like={item.like}
                statics={item.static}
                view={item.view}
                share={item.share}
                picture={item.picture}
                AllProps={AllProps}
              />
            );
          })}
        </div>
      </ContentBox>
    </Fragment>
  );
};
export default Content;

const TrandingList = [
  {
    title: "Laptop Computer Repair & Services -sadhi Technologies",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture:
      "https://rentalzone.in/public/user-profile/1/profile-pic.png?v=1700541863",
  },
  {
    title: "Laptop Computer Repair & Services -sadhi Technologies",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture:
      "https://rentalzone.in/public/user-profile/1/profile-pic.png?v=1700541863",
  },
  {
    title: "Laptop Computer Repair & Services -sadhi Technologies",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture:
      "https://rentalzone.in/public/user-profile/1/profile-pic.png?v=1700541863",
  },
  {
    title: "Laptop Computer Repair & Services -sadhi Technologies",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture:
      "https://rentalzone.in/public/user-profile/1/profile-pic.png?v=1700541863",
  },
  {
    title: "Laptop Computer Repair & Services -sadhi Technologies",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture:
      "https://rentalzone.in/public/user-profile/1/profile-pic.png?v=1700541863",
  },
];
