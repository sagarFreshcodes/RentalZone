import React, { Fragment, useLayoutEffect, useState } from "react";
import { Breadcrumbs } from "../../../../AbstractElements";
import { Card, Col, Container, Row } from "reactstrap";
import { useLocation } from "react-router";
import Content from "./Content";
import SideBar from "./SideBar";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Footer from "../../../../CommonElements/Footer/Footer";
import PaginationBar from "./Pagination";
import GetQuotesModel from "../../Models/GetQuotes/GetQuotes";
import ChatModel from "../../Models/Chat/Chat";
import getquot from "../../../../assets/images/Essential/getquot.png";
import wapp from "../../../../assets/images/Essential/wapp.png";
import { Image } from "../../../../AbstractElements";
import { FS3, FS4, FS6 } from "../../../../CommonElements/Font/FS";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BusinessListApi } from "../../../../Redux_Store/Actions/businessListActions";
import { BASE_ROUTE, HOME_ROUTE } from "../../../../Route/RouthPath";
import Skeleton from "react-loading-skeleton";
import { SelectCategory } from "../../../../Redux_Store/Actions/generalActions";
import call_w from "../../../../assets/images/Essential/call_w.png";
import {
  CategoryList,
  HanggingBar,
  ScrollUp,
  UpdateSEO,
  slugConvertor,
} from "../../../Common/Component/helperFunction";
import EditContactInfoModel from "../../Models/EditContactInfo/EditContactInfo";
import { LoaderBox } from "../../../../CommonElements/LoaderBox/LoaderBox";
const ServiceCenter = () => {
  const QueryParams = useLocation();
  const dispatch = useDispatch();
  const GeneralData = useSelector((state) => state?.GeneralState);
  const contact_button = GeneralData?.data?.data?.contact_button || 0;
  const CurrentLocation = GeneralData?.location?.city_slug;
  const ParamsList = `${QueryParams.pathname}`.split("/");
  const BusinessState = useSelector((state) => state.BusinessState);
  const BusinesssPageData = BusinessState?.service_data?.data || {};
  const { ads_banners } = GeneralData.data.data || {};
  const { banner_image } = ads_banners ? ads_banners[0] || {} : {};
  const {
    category_name,
    user_city,
    page_top_keyword,
    top_five_listings,
    all_listing,
    page_title,
    meta_title,
    meta_description,
    meta_keywords,
  } = BusinesssPageData || { top_five_listings: [], all_listing: {} };
  const featuredRecord = top_five_listings?.map((i) => {
    return { ...i, featured: true };
  });
  const BusinesssListing =
    all_listing?.data && top_five_listings
      ? [...featuredRecord, ...all_listing?.data]
      : all_listing?.data;
  const PopularArea = BusinessState?.service_data?.data?.popular_areas;
  const { isServiceLoading } = BusinessState;
  const [modal, setModel] = useState(false);
  const [chatModal, setChatModal] = useState(false);

  const [allCategoryList, setAllCategoryList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [serviceData, setServiceData] = useState({});
  const BreadcrumData = [
    { title: `${page_top_keyword} In ${user_city}`, link: `page_title` },
    { title: "home", link: `${HOME_ROUTE}` },
    {
      title: `${category_name}`,
      link: `${BASE_ROUTE}${QueryParams?.pathname}`,
    },
    {
      title: `(Find ${category_name},  ${category_name} hire,  ${page_top_keyword} in  ${user_city})`,
      link: `page_info`,
    },
  ];
  const toggle = () => {
    if (modal) {
      setModel(false);
    } else {
      setModel(true);
    }
  };
  const toggle2 = () => {
    if (chatModal) {
      setChatModal(false);
    } else {
      setChatModal(true);
    }
  };

  const AllProps = {
    toggle: toggle,
    toggle2: toggle2,
    setServiceData: setServiceData,
    serviceData: serviceData,
    BusinessState: BusinessState,
    BusinesssListing: BusinesssListing,
    PopularArea: PopularArea,
    BusinesssPageData: BusinesssPageData,
    BreadcrumData: BreadcrumData,
    isServiceLoading: isServiceLoading,
    user_city: user_city,
    page_top_keyword: page_top_keyword,
    all_listing: all_listing,
    banner_image: banner_image,
    currentPage,
    setCurrentPage,
  };
  const OnDial = () => {
    document.location.href = `tel:1111111111`;
  };
  const test = () => {
    console.log(`BusinesssPageData=>`, BusinesssPageData);
  };
  useEffect(() => {
    const GetBusinessList = ({
      CurrentLocation,
      category_slug,
      category_id,
      page,
    }) => {
      dispatch(
        BusinessListApi({
          location: QueryParams?.state?.location
            ? QueryParams?.state?.location
            : CurrentLocation,
          category_slug: category_slug,
          category_id: category_id,
          page: page,
        })
      );
    };
    GetBusinessList({
      CurrentLocation: CurrentLocation,
      category_slug: ParamsList[1],
      category_id: +ParamsList[2],
      page: currentPage,
    });

    const categoryIdByQueryParams = +`${QueryParams?.pathname}`
      .split("/")
      .slice(-1)[0];
    dispatch(
      SelectCategory({
        categoryDetails: {
          category_id: categoryIdByQueryParams,
          category_slug: slugConvertor(category_name),
        },
      })
    );

    ScrollUp();
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [QueryParams]);

  useEffect(() => {
    UpdateSEO({
      page_title: page_title,
      meta_title: meta_title,
      meta_description: meta_description,
      meta_keywords: meta_keywords,
    });
  }, [page_title, meta_title, meta_description, meta_keywords]);
  useLayoutEffect(() => {
    console.log("first78965 useLayoutEffect");
    CategoryList({ setLoading: setLoading, setState: setAllCategoryList });
  }, []);
  return (
    <>
      <Fragment>
        <LoaderBox isLoading={isServiceLoading}>
          {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
          <Container fluid={true}>
            <div className="servicePage" onClick={test}>
              {/* {isServiceLoading ? (
            <Skeleton height={1000} />
          ) : ( */}
              <div className="s_content">
                <Content AllProps={AllProps} />
              </div>
              {/* )} */}

              <div className="s_sidebar">
                <SideBar AllProps={AllProps} />
              </div>
            </div>

            <ContentBox className="">
              <Footer />
            </ContentBox>
            <br />
            <br />
            <div className="sc_fixedButton">
              {/* <button className="btn btn-light" onClick={toggle2}>
              <FS6>
                {" "}
                <Image attrImage={{ src: wapp, alt: "message" }} /> Chat{" "}
              </FS6>
            </button>{" "}
            <button className="btn btn-primary star" onClick={toggle}>
              {" "}
              <FS6>
                <Image attrImage={{ src: getquot, alt: "message" }} /> Get Quote
                Now{" "}
              </FS6>
            </button>{" "} */}
              <div
                className="sp_button_box
"
              >
                {" "}
                {contact_button == 1 ? (
                  <button className="btn btn-light" onClick={toggle2}>
                    <FS4>
                      {" "}
                      <Image
                        attrImage={{ src: wapp, alt: "message" }}
                      /> Chat{" "}
                    </FS4>
                  </button>
                ) : (
                  <button className="btn btn-success " onClick={OnDial}>
                    {" "}
                    <FS4>
                      {" "}
                      <Image attrImage={{ src: call_w, alt: "message" }} /> Call
                      Now{" "}
                    </FS4>
                  </button>
                )}
                <button className="btn btn-primary " onClick={toggle}>
                  {" "}
                  <FS4>Get Quote Now </FS4>
                </button>{" "}
              </div>
            </div>
          </Container>
        </LoaderBox>

        <GetQuotesModel
          serviceData={serviceData}
          toggler={toggle}
          isOpen={modal}
          loading={loading}
          // allCategoryList={allCategoryList}
        />

        <ChatModel
          serviceData={serviceData}
          toggler={toggle2}
          isOpen={chatModal}
        />
      </Fragment>{" "}
      <HanggingBar
        allCategoryListFromParent={true}
        ListOfCategory={allCategoryList}
      />
    </>
  );
};
export default ServiceCenter;
