import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { PlusSquare, Upload } from "react-feather";
import errorImg from "../../../../assets/images/search-not-found.png";
import { toast } from "react-toastify";
import { H4, H6, LI, P, UL, Image, H1, H3 } from "../../../../AbstractElements";
import { CardHeader, Form, Input, Media } from "reactstrap";
import { FileApi } from "../../../../api";
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
import TrandingCard from "./TrandingCard";
import Slider from "./Slider";
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import SearchBar from "./SearchBar";
import { SERVICE_CENTER_ROUTE } from "../../../../Route/RouthPath";
import Footer from "../../../../CommonElements/Footer/Footer";
import NotificationSlider from "../../../../Layout/Header/Leftbar/NotificationSlider";
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

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);

  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  const filelist = myfile
    .filter((data) => {
      if (searchTerm == null) {
        return data;
      } else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <LI attrLI={{ className: "file-box" }} key={i}>
          <div className="file-top">
            <i className={data.icon}></i>
            <i className="fa fa-ellipsis-v f-14 ellips"></i>
          </div>
          <div className="file-bottom">
            <H6>{data.name}</H6>
            <P attrPara={{ className: "mb-0 mb-1" }}>{data.size}</P>
            <P>
              <b>{"last open"} : </b>
              {data.modify}
            </P>
          </div>
        </LI>
      );
    });
  const getFile = () => {
    document.getElementById("upfile").click();
  };
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myfiles = [...myfile];
    if (selectedFile !== null) {
      myfiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: "fa fa-file-text-o txt-info",
      });
      setMyFile(myfiles);
      toast.success("File Upload Successfully !");
    } else {
      toast.error("Plese Select at least one file !");
    }
  };

  // Event listener to detect scroll
  window.addEventListener("scroll", function () {
    // Get the current scroll position in the y-direction
    var scrollY = window.scrollY || window.pageYOffset;

    // Use scrollY for whatever measurement or action you need

    // if (scrollY >= 100) {
    //   // setSearchBarShow(false);

    // } else {
    //   setSearchBarShow(true);
    // }
  });

  return (
    <Fragment className="searchHeadFragment">
 
        <div className="searchHeadBx">
          <div className="searchHeadline">
            <FS10 attr={{ className: "searchAcross" }}>Search across</FS10>
            <div className="w-80">
              {" "}
              <NotificationSlider />
            </div>
          </div>
          {<SearchBar />}
        </div> 

      <ContentBox className="">
        <div className="top-bar">
          <div className="top-courosel">
            <Slider />
          </div>
          <div className="top-img">
            {[1, 2, 3, 4].map((i) => {
              return (
                <img
                  src="https://img2.exportersindia.com/product_images/bc-full/2020/10/7958556/laptop-rental-service-1604068225-5622089.jpg"
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </ContentBox>
      <ContentBox className="">
        {/* <H4 attrH4={{ className: "mb-3" }}>Rentalzone.in</H4> */}
        <div className="catContainer">
          {CategoryList2.map((item) => {
            return (
              <div className="catBox" key={item.id}>
                <Link to={`${SERVICE_CENTER_ROUTE + "/" + `Dubai`}`}>
                  <div className="catCard">
                    <div className="cateIconBox">
                      <img className="cateIcon" src={item?.picture} alt="" />
                    </div>

                    <FS3  >{item?.title}</FS3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </ContentBox>

      <ContentBox className="">
        <div className="ContentCenter">
          <FS10>About Us</FS10>
        </div>
        <FS4 attr={{ className: "mb-3" }}>
          RentalZone.in : Providing Laptop on Rent, Computer on Rent, Server on
          Rent, Car On Rent, Ac on Rental-Hire in Mumbai at low price. Find Top
          Rental Company online at Rentalzone.in
        </FS4>
      </ContentBox>

      <ContentBox className="">
        <div className="ContentCenter">
          <FS10>Top Trendings For Your City</FS10>
        </div>
        <div className="TrendingsContainer">
          {TrandingList.map((item) => {
            return (
              <TrandingCard
                title={item.title}
                address1={item.address1}
                address2={item.address2}
                like={item.like}
                statics={item.static}
                view={item.view}
                share={item.share}
                picture={item.picture}
              />
            );
          })}
        </div>
      </ContentBox>

      <ContentBox className="">
        <Footer />
      </ContentBox>
    </Fragment>
  );
};
export default Content;

const CategoryList = [
  {
    title: "Computer Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Laptop Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Printer Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Apple Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Server Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "AC Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Car Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "CCTV Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "iPad Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Projector Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "UPS Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Furniture Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Audio Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
  {
    title: "Display Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_banquethall.png?w=256&q=75",
  },
];

const CategoryList2 = [
  {
    title: "Computer Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Laptop Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Printer Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Apple Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Server Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "AC Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Car Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "CCTV Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "iPad Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Projector Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "UPS Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Furniture Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Audio Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
  {
    title: "Display Rental",
    picture:
      "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75",
  },
];
const TrandingList = [
  {
    title: "It Rental Solution",
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
    title: "It Rental Solution",
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
    title: "It Rental Solution",
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
    title: "It Rental Solution",
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
    title: "It Rental Solution",
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
