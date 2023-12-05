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
import { BreadCrum } from "../../../Common/Component/helperFunction";
import PaginationBar from "./Pagination";
import SearchBar from "../Home/SearchBar";
import { Skeleton } from "antd";
import {
  SC_CardSkelaton,
  TestSkelaton,
} from "../../../Common/Component/Sleleton/Skelaton";
import {
  NoRecords,
  PageContentManager,
} from "../../../Common/Component/DesignElement";
const Content = ({ AllProps }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);
  const {
    BusinesssListing,
    BusinessState,
    serviceData,
    setServiceData,
    toggle,
    toggle2,
    BusinesssPageData,
    BreadcrumData,
    isServiceLoading,
  } = AllProps;

  const { page_title } = BusinesssPageData;
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);
  const test = () => {
    console.log(`BusinessState`, BusinessState);
    console.log(`BusinesssListing`, BusinesssListing);
    console.log(`BreadcrumData`, BreadcrumData);
  };

  return (
    <Fragment>
      <div className="searchHeadBx">
        {<SearchBar className="hideSearchbarOnDesktop" />}
      </div>
      <div className="spaceForSearchbar" />
      <ContentBox className="">{BreadCrum(BreadcrumData)}</ContentBox>
      <ContentBox className="">
        <FS10 attr={{ className: "lh-1", onClick: test }}>
          Top Trendings For Your City{" "}
        </FS10>
      </ContentBox>
      <ContentBox className="">
        <div className="SeviceContainer">
          <PageContentManager
            isLoading={isServiceLoading}
            loader={<SC_CardSkelaton />}
            // noRecordElement={<NoRecords />}
            contentArray={BusinesssListing}
            ContentBody={BusinesssListing?.map((item) => {
              return (
                <ServiceCard
                  address={item?.address}
                  area={item?.area}
                  area_name={item?.area_name}
                  category={item?.category}
                  city={item?.city}
                  city_name={item?.city_name}
                  contact_person={item?.contact_person}
                  country={item?.country}
                  description={item?.description}
                  email={item?.email}
                  id={item?.id}
                  is_approved={item?.is_approved}
                  listing_type={item?.listing_type}
                  main_listing_id={item?.main_listing_id}
                  name={item?.name}
                  phone_number={item?.phone_number}
                  pincode={item?.pincode}
                  rates={item?.rates}
                  rates_per={item?.rates_per}
                  show_mobile={item?.show_mobile}
                  show_on_area_page={item?.show_on_area_page}
                  show_website={item?.show_website}
                  slug={item?.slug}
                  state={item?.state}
                  user_id={item?.user_id}
                  website={item?.website}
                  AllProps={AllProps}
                  BreadcrumData={BreadcrumData}
                />
              );
            })}
            pagination={<PaginationBar />}
          />
          {/* {isServiceLoading ? (
            <SC_CardSkelaton />
          ) : [undefined, 0].includes(BusinesssListing?.length) ? (
            <>
              <NoRecords /> `gsggg`
            </>
          ) : (
            BusinesssListing?.map((item) => {
              return (
                <ServiceCard
                  address={item?.address}
                  area={item?.area}
                  area_name={item?.area_name}
                  category={item?.category}
                  city={item?.city}
                  city_name={item?.city_name}
                  contact_person={item?.contact_person}
                  country={item?.country}
                  description={item?.description}
                  email={item?.email}
                  id={item?.id}
                  is_approved={item?.is_approved}
                  listing_type={item?.listing_type}
                  main_listing_id={item?.main_listing_id}
                  name={item?.name}
                  phone_number={item?.phone_number}
                  pincode={item?.pincode}
                  rates={item?.rates}
                  rates_per={item?.rates_per}
                  show_mobile={item?.show_mobile}
                  show_on_area_page={item?.show_on_area_page}
                  show_website={item?.show_website}
                  slug={item?.slug}
                  state={item?.state}
                  user_id={item?.user_id}
                  website={item?.website}
                  AllProps={AllProps}
                  BreadcrumData={BreadcrumData}
                />
              );
            })
          )} */}
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
