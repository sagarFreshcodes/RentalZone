import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { PlusSquare, Upload } from "react-feather";
import errorImg from "../../../../assets/images/search-not-found.png";
import { toast } from "react-toastify";
import { H4, H6, LI, P, UL, Image, H1, H3 } from "../../../../AbstractElements";
import { CardHeader, Form, Input, Media } from "reactstrap";
import { FileApi } from "../../../../api";
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

const Content = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);

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
  return (
    <Fragment>
      <CardHeader>
        <Media>
          <Form className="search-file form-inline">
            <div className="mb-0 form-group">
              <i className="fa fa-search"></i>
              <input
                className="form-control-plaintext"
                type="text"
                value={searchTerm}
                onChange={(e) => handleChange(e)}
                placeholder="Location"
              />
            </div>
          </Form>
          &nbsp;&nbsp;&nbsp;
          <Form className="search-file form-inline">
            <div className="mb-0 form-group">
              <i className="fa fa-search"></i>
              <input
                className="form-control-plaintext"
                type="text"
                // value={searchTerm}
                // onChange={(e) => handleChange(e)}
                placeholder="Category, Listing, Product"
              />
            </div>
          </Form>
        </Media>
      </CardHeader>

      <ContentBox className="">
        <H4 attrH4={{ className: "mb-3" }}>Rentalzone.in</H4>
        <div className="catContainer">
          {CategoryList2.map((item) => {
            return (
              <div className="catBox" key={item.id}>
                <div className="catCard">
                  <div className="cateIconBox">
                    <img className="cateIcon" src={item?.picture} alt="" />
                  </div>

                  <span attrH6={{ className: "mb-0" }}>{item?.title}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ContentBox>

      <ContentBox className="">
        <div className="catContainer2">
          {CategoryList.map((item) => {
            return (
              <div className="catBox2" key={item.id}>
                <div className="catCard2">
                  <div className="catImgBox">
                    <img className="cateIcon2" src={item?.picture} alt="" />
                  </div>

                  <span attrH6={{ className: "mb-0" }}>{item?.title}</span>
                </div>
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
              // <div className="TBox" key={item.id}>
              //   <div className="TCard">
              //     <div className="TImgBox ContentCenter">
              //       <img className="TIcon" src={item?.picture} alt="" />
              //     </div>
              //     <div className="TBox-right ContentCenter">
              //       <div className="d-flex">
              //         <div className="TR-info">
              //           <FS6 attr={{ className: "mb-0 BoldText" }}>
              //             {item?.title}
              //           </FS6>
              //           <FS4 attr={{ className: "mb-0 BoldText" }}>
              //             {item?.address1}
              //           </FS4>
              //           <FS3 attr={{ className: "mb-0" }}>{item?.address2}</FS3>
              //         </div>
              //         <div>🔖</div>
              //       </div>

              //       <div className="T-number">
              //         <div>📉 {item.static}</div>
              //         <div>❤️ {item.like}</div>
              //         <div>👁️ {item.view}</div>
              //         <div>📤 {item.share}</div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
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
        <div className="footerContainer">
          <div className="footerComponentBox">
            <FS8 attrH4={{ className: "mb-3" }}>Rentalzone.in</FS8>
            <FooterLinkBox
              title={"Support & Help"}
              linkTitleArray={[
                "About Us",
                "FAQ",
                "Contact Us",
                "Seller Register",
                "Privacy Policy",
              ]}
              boxWidth={"20rem"}
              linkBoxWidth={`50%`}
            />
            <FooterLinkBox
              title={"Popular Services"}
              linkTitleArray={[
                "Computer Rental",
                "IPad Rental",
                "Printer Rental",
                "Laptop Rental",
              ]}
              boxWidth={"20rem"}
              linkBoxWidth={`50%`}
            />
            <FooterLinkBox
              title={"Cities Covered"}
              linkTitleArray={[
                "AC Rental",
                "Audio Rental",
                "Badge Printing Kiosk",
                "Badge Printing Kiosk",
                "Car Rental",
                "Display Rental",
                "Digital Signage Standee",
                "Furniture Rental",
                "MacBook Rental",
                "Projector Rental",
                "Server Rental",
                "UPS Rental",
              ]}
              boxWidth={"20rem"}
              linkBoxWidth={`50%`}
            />
          </div>
          <br />
          <br />
          <div>
            <FooterLinkBox
              title={"Mumbai Locations"}
              linkTitleArray={bombayAreas}
              boxWidth={"100%"}
              linkBoxWidth={`10%`}
            />
          </div>
        </div>
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

const FooterLinkBox = ({ title, linkTitleArray, boxWidth, linkBoxWidth }) => {
  return (
    <div className="footerLinkBox" style={{ width: boxWidth }}>
      <FS8> {title}</FS8>
      <br /> <br />
      <div className="linksContainer">
        {linkTitleArray?.map((i) => {
          return (
            <div className="linkBox" style={{ width: linkBoxWidth }}>
              ✔️ {i}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const bombayAreas = [
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
];
