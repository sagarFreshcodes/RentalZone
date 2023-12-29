import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import SearchBar from "./SearchBar";
import { BASE_ROUTE, SERVICE_CENTER_ROUTE } from "../../../../Route/RouthPath";
import Footer from "../../../../CommonElements/Footer/Footer";
import NotificationSlider from "../../../../Layout/Header/Leftbar/NotificationSlider";
import lptopImg from "../../../../assets/images/Essential/lptopImg.png";
import lptopImg3 from "../../../../assets/images/Essential/lptopImg3.png";
import lptopImg2 from "../../../../assets/images/Essential/lptopImg2.png";
import lptopImg4 from "../../../../assets/images/Essential/lptopImg4.png";
import {
  SelectCategory,
  SetCategory,
} from "../../../../Redux_Store/Actions/generalActions";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import {
  CallEventOnDisplay,
  CallFunctionOnScroll,
  GET_API,
  GetApi,
  ScrollHeight,
  SimpleAnimation,
} from "../../../Common/Component/helperFunction";
import { API_ROOT_URL, SITE_MAP_API } from "../../../../Constant/api_constant";
import { useRef } from "react";
const Content = ({ props }) => {
  const {
    homepage_category,
    HomPageData,
    StateData,
    location,
    GeneralData,
    ProductList,
  } = props;
  const dispatch = useDispatch();
  const productRef = useRef(null);
  const cateListRef = useRef(null);
  const navigate = useNavigate();
  const {
    single_banner_one,
    single_banner_two,
    single_banner_three,
    single_banner_four,
    banner_path,
    homepage_banners,
  } = HomPageData || {};
  const { ads_banners } = GeneralData.data.data || {};
  const { banner_image } = ads_banners ? ads_banners[0] || {} : {};
  const image_urls = homepage_banners ? homepage_banners : [];
  const bannerList = [
    {
      link:
        `${banner_path}/${single_banner_one?.image}` ||
        "https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/b2b.png?v=1.01?w=1920&q=75",
      title: "B2B",
      description: "Quik Quotes",
      backColor: "#0f7dd8",
      url: single_banner_one?.url,
    },
    {
      link:
        `${banner_path}/${single_banner_two?.image}` ||
        "	https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/web_repair_image.png?v=1.0?w=1920&q=75",
      title: "B2B",
      description: "Quik Quotes",
      backColor: "#2654a1",
      url: single_banner_two?.url,
    },
    {
      link:
        `${banner_path}/${single_banner_three?.image}` ||
        "	https://akam.cdn.jdmagicbox.com/images/icons/website/newhome/1/realestate.png?v=1.0?w=1920&q=75",
      title: "B2B",
      description: "Quik Quotes",
      backColor: "#6769d0",
      url: single_banner_three?.url,
    },
    {
      link:
        `${banner_path}/${single_banner_four?.image}` ||
        "	https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/web_doctor_image.png?v=1.0?w=1920&q=75",
      title: "B2B",
      description: "Quik Quotes",
      backColor: "#00ac7d",
      url: single_banner_four?.url,
    },
  ];

  const onCategorySelect = ({ category_data }) => {
    const { category_name, category_id, subdomain_slug, category_slug } =
      category_data || {};
    dispatch(
      SetCategory({
        categoryData: {
          name: category_name,
          type: "category",
          category_slug: category_slug,
          category_id: category_id,
          subdomain_slug: subdomain_slug,
        },
      })
    );

    dispatch(
      SelectCategory({
        categoryDetails: {
          category_id: category_id,
          category_slug: category_slug,
        },
      })
    );
    navigate(`${BASE_ROUTE}/${category_slug}-${location}/${category_id}`);
  };
  const test = async () => {};

  // window.addEventListener("scroll", function () {
  //   CallFunctionOnScroll({
  //     between: [500, 550],
  //     Call: () => SimpleAnimation({ className: ".cateIcon" }),
  //   });
  // });

  useEffect(() => {
    SimpleAnimation({ className: ".cateIcon" });
    CallEventOnDisplay({
      targetRef: productRef,
      Call: () =>
        SimpleAnimation({
          className: ".trandImgBox",
          scale1: 0.1,
          scale2: 1,
          edition: true,
          duration1: 1.5,
          duration2: 3,
        }),
    });

    CallEventOnDisplay({
      targetRef: cateListRef,
      Call: () =>
        SimpleAnimation({
          className: ".cateIcon",
          scale1: 0.1,
          scale2: 1,
          edition: true,
          duration1: 1.5,
          duration2: 3,
        }),
    });
  }, []);
  return (
    <Fragment className="searchHeadFragment">
      <div className="searchHeadBx">
        <div className="searchHeadline" onClick={test}>
          <FS10 attr={{ className: "searchAcross" }}>Search across</FS10>
          <div className="w-80">
            {" "}
            <NotificationSlider />
          </div>
        </div>
        {<SearchBar />}
      </div>
      <div className="spaceForSearchbar" />
      <ContentBox className="">
        <div className="top-bar">
          <div className="top-courosel">
            <Slider image_urls={image_urls} />
          </div>
          {bannerList?.map((i) => {
            return (
              <div
                className="bannerImg"
                style={{ backgroundColor: i?.backColor }}
              >
                <div className="banner-photo">
                  <div className="b_title">{i?.title}</div>
                  <div className="b_desc">{i?.description}</div>
                </div>
                <img src={i?.link} alt="" />
                <div className="banner-Explores">
                  <a href={i.url}>
                    <div
                      className="Explores_Box"
                      style={{ color: i?.backColor }}
                    >
                      <span className="e_title">{`Explore`}</span>
                      <span className="e_icon">{`>`}</span>
                    </div>{" "}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="banner_image-box">
          <img src={banner_image} alt="banner_image" />
        </div>
      </ContentBox>
      <ContentBox className="">
        {/* <H4 attrH4={{ className: "mb-3" }}>Rentalzone.in</H4> */}
        <div className="catContainer" ref={cateListRef}>
          {homepage_category?.map((item) => {
            return (
              <div className="catBox" key={item.id}>
                <div
                  className="catCard"
                  onClick={() =>
                    onCategorySelect({
                      category_id: item?.category_id,
                      category_slug: item?.category_slug,
                      category_data: item,
                    })
                  }
                >
                  <div className="cateIconBox shadowEffect1" onClick={test}>
                    <img
                      className="cateIcon"
                      src={item?.category_icon}
                      alt=""
                    />
                  </div>
                  <FS4>{item?.category_name}</FS4>
                </div>{" "}
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
        <div className="TrendingsContainer" ref={productRef}>
          {ProductList?.map((item) => {
            return (
              <TrandingCard
                title={item?.product_name}
                price={item?.price}
                address1={item?.address1}
                address2={item?.address2}
                like={item?.like}
                statics={item?.static}
                view={item?.view}
                share={item?.share}
                picture={
                  `${item?.product_image}`.includes("/")
                    ? item?.product_image
                    : lptopImg4
                }
                d1={item?.d1}
                d2={item?.d2}
                d3={item?.d3}
                d4={item?.d4}
                specification={[item?.description]}
                id={item.id}
                item={item}
              />
            );
          })}
          {/* {TrandingList.map((item) => {
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
                d1={item.d1}
                d2={item.d2}
                d3={item.d3}
                d4={item.d4}
                specification={item.specification}
              />
            );
          })} */}
        </div>
      </ContentBox>

      <ContentBox className="">
        <Footer />
      </ContentBox>
    </Fragment>
  );
};
export default Content;

const TrandingList = [
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
