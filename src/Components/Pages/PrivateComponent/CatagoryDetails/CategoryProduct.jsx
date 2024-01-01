import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { FileApi } from "../../../../api";
import lptopImg from "../../../../assets/images/Essential/lptopImg.png";
import lptopImg3 from "../../../../assets/images/Essential/lptopImg3.png";
import lptopImg2 from "../../../../assets/images/Essential/lptopImg2.png";
import lptopImg4 from "../../../../assets/images/Essential/lptopImg4.png";
import {
  FS10,
  FS3,
  FS4,
  FS6,
  FS8,
  FS9,
} from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import ProductCard from "./ProductCard";
import {
  CheckValidValue,
  formatDate1,
} from "../../../Common/Component/helperFunction";
const CategoryProduct = ({ allProps }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState([]);
  const [searchBarShow, setSearchBarShow] = useState(true);
  const { product_list } = allProps;
  useEffect(() => {
    axios.get(FileApi).then((response) => {
      setMyFile(response.data);
    });
  }, []);

  const test = () => {
    console.log("test2512", product_list);
  };
  return (
    <Fragment>
      <div className="cm_Box" onClick={test}>
        <ContentBox className="">
          <FS10 attr={{ className: "lh-1" }}>Product </FS10>
        </ContentBox>
        <ContentBox className="">
          <div className="ProductContainer">
            {/* {ProductList.map((item) => {
              return (
                <ProductCard
                  title={item.title}
                  address1={item.address1}
                  address2={item.address2}
                  like={item.like}
                  statics={item.static}
                  view={item.view}
                  share={item.share}
                  picture={item.picture}
                  d1={item.d1}
                  d2={item.d2}
                  d3={item.d3}
                  d4={item.d4}
                  specification={item.specification}
                />
              );
            })} */}
            {product_list &&
              product_list?.map((item) => {
                return (
                  <ProductCard
                    title={item?.product_name}
                    price={item?.price}
                    picture={
                      CheckValidValue(item.product_image)
                        ? item.product_image
                        : lptopImg
                    }
                    specification={[
                      `Brand: ${item.brand}`,
                      `Last Update: ${formatDate1(item?.updated_at)}`,
                      `Description: ${item.description}`,
                    ]}
                    id={item.id}
                    address1={item.address1}
                    address2={item.address2}
                    like={item.like}
                    statics={item.static}
                    view={item.view}
                    share={item.share}
                    d1={item.d1}
                    d2={item.d2}
                    d3={item.d3}
                    d4={item.d4}
                  />
                );
              })}
          </div>
        </ContentBox>
      </div>
    </Fragment>
  );
};
export default CategoryProduct;

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

const ProductList = [
  {
    title: "ASUS ROG Zephyrus M15 Gaming Laptop",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture: lptopImg,
    specification: [
      "Intel Core i7 10 Gen",
      "16GB/1TB SSD",
      "RTX 2060 6GB Graphics",
      `15.6" FHD 240Hz Display`,
    ],
    d1: "Intel Core i7 10 Gen",
    d2: " 16GB/1TB SSD",
    d3: " RTX 2060 6GB Graphics",
    d4: "15.6 FHD 240Hz Display",
  },
  {
    title: "ASUS ROG Zephyrus M15 Gaming Laptop",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    d1: "Intel Core i7 10 Gen",
    d2: " 16GB/1TB SSD",
    d3: " RTX 2060 6GB Graphics",
    d4: "15.6 FHD 240Hz Display",
    specification: [
      "Intel Core i7 10 Gen",
      "16GB/1TB SSD",
      "RTX 2060 6GB Graphics",
      `15.6" FHD 240Hz Display`,
    ],
    picture: lptopImg3,
  },
  {
    title: "ASUS ROG Zephyrus M15 Gaming Laptop",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    specification: [
      "Intel Core i7 10 Gen",
      "16GB/1TB SSD",
      "RTX 2060 6GB Graphics",
      `15.6" FHD 240Hz Display`,
    ],
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    d1: "Intel Core i7 10 Gen",
    d2: " 16GB/1TB SSD",
    d3: " RTX 2060 6GB Graphics",
    d4: "15.6 FHD 240Hz Display",
    star: "5",
    picture: lptopImg2,
  },

  {
    title: "ASUS ROG Zephyrus M15 Gaming Laptop",
    d1: "Intel Core i7 10 Gen",
    d2: " 16GB/1TB SSD",
    d3: " RTX 2060 6GB Graphics",
    d4: "15.6 FHD 240Hz Display",
    address1: "Laptop ipad Rental Services in Mumbai",
    address2: "Mira Road, Mumbai, Maharashtra, India.",
    specification: [
      "Intel Core i7 10 Gen",
      "16GB/1TB SSD",
      "RTX 2060 6GB Graphics",
      `15.6" FHD 240Hz Display`,
    ],
    static: "89",
    like: "98",
    view: "5522",
    share: "233",
    star: "5",
    picture: lptopImg4,
  },
];
