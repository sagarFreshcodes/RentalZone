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
import { useRef } from "react";
import TrandigCardSlider from "./TrandigCardSlider";
const Content = ({ props }) => {
  const {
    homepage_category,
    HomPageData,
    StateData,
    location,
    GeneralData,
    ProductList,
    allCategoryList,
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
    // dispatch(
    //   SetCategory({
    //     categoryData: {
    //       name: category_name,
    //       type: "category",
    //       category_slug: category_slug,
    //       category_id: category_id,
    //       subdomain_slug: subdomain_slug,
    //     },
    //   })
    // );

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
    // CallEventOnDisplay({
    //   targetRef: productRef,
    //   Call: () =>
    //     SimpleAnimation({
    //       className: ".trandImgBox",
    //       scale1: 0.1,
    //       scale2: 1,
    //       edition: true,
    //       duration1: 1.5,
    //       duration2: 3,
    //     }),
    // });

    // CallEventOnDisplay({
    //   targetRef: cateListRef,
    //   Call: () =>
    //     SimpleAnimation({
    //       className: ".cateIcon",
    //       scale1: 0.1,
    //       scale2: 1,
    //       edition: true,
    //       duration1: 1.5,
    //       duration2: 3,
    //     }),
    // });
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

      <TrandigCardSlider
        ProductList={ProductList || []}
        produ
        ctRef={productRef}
      />
      {/* <div className="animatedSlider">
        <SwipeCarousel />
      </div> */}

      <ContentBox className="">
        <Footer allCategoryList={allCategoryList} />
      </ContentBox>
    </Fragment>
  );
};
export default Content;
