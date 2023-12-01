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
import CategoryCard from "./CategoryCard";
import lake from "../../../../assets/images/Essential/lake.png";
import desert from "../../../../assets/images/Essential/desert.png";
import play from "../../../../assets/images/Essential/play.png";
const CategoryMedia = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);

  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  return (
    <Fragment>
      <div className="cm_Box">
        <ContentBox className="">
          <FS10 attr={{ className: "lh-1" }}>Photos </FS10>
        </ContentBox>
        <ContentBox className="">
          <div className="MediaContainer">
            <div>
              <Image attrImage={{ src: desert, alt: "desert" }} />

              <div>
                <FS3 attr={{ className: "BoldText" }}>All</FS3>
                <FS3>1200 Photos</FS3>
              </div>
            </div>
            <div className="lakeVideo">
              <Image attrImage={{ src: lake, alt: "lake" }} />
              <div>
                <FS3 attr={{ className: "BoldText" }}>Video</FS3>
                <FS3>1200 Videos</FS3>
              </div>
              <Image
                attrImage={{ src: play, alt: "play", className: "play" }}
              />
            </div>
          </div>
        </ContentBox>
      </div>
    </Fragment>
  );
};
export default CategoryMedia;

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
];
