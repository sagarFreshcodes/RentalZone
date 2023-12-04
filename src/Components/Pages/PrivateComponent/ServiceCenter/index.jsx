import React, { Fragment, useState } from "react";
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
import { FS3, FS6 } from "../../../../CommonElements/Font/FS";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BusinessListApi } from "../../../../Redux_Store/Actions/businessListActions";
import { BASE_ROUTE, HOME_ROUTE } from "../../../../Route/RouthPath";
import Skeleton from "react-loading-skeleton";
import { SelectCategory } from "../../../../Redux_Store/Actions/generalActions";
import { slugConvertor } from "../../../Common/Component/helperFunction";
const ServiceCenter = () => {
  const QueryParams = useLocation();
  const dispatch = useDispatch();
  const GeneralData = useSelector((state) => state?.GeneralState);
  const CurrentLocation = GeneralData?.location?.city_slug;
  const ParamsList = `${QueryParams.pathname}`.split("/");
  const BusinessState = useSelector((state) => state.BusinessState);
  const BusinesssPageData = BusinessState?.service_data?.data || {};
  const { category_name, user_city, page_top_keyword } = BusinesssPageData;
  const BusinesssListing = BusinessState?.service_data?.data?.all_listing?.data;
  const PopularArea = BusinessState?.service_data?.data?.popular_areas;
  const { isServiceLoading } = BusinessState;
  const [modal, setModel] = useState(false);
  const [chatModal, setChatModal] = useState(false);
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
    BusinesssPageData: { BusinesssPageData },
    BreadcrumData: BreadcrumData,
    isServiceLoading: isServiceLoading,
    user_city: user_city,
    page_top_keyword: page_top_keyword,
  };

  const test = () => {
    console.log(`BusinessState`, BusinessState);
    console.log(
      `BusinesssListing`,
      `${QueryParams.pathname}`.split("/").slice(-1)[0]
    );
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
      page: 1,
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
  }, []);
  return (
    <Fragment>
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
          <PaginationBar />
        </ContentBox>
        <ContentBox className="">
          <Footer />
        </ContentBox>
        <br />
        <br />
        <div className="sc_fixedButton">
          <button className="btn btn-light" onClick={toggle2}>
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
          </button>{" "}
        </div>
      </Container>
      <GetQuotesModel
        serviceData={serviceData}
        toggler={toggle}
        isOpen={modal}
      />

      <ChatModel
        serviceData={serviceData}
        toggler={toggle2}
        isOpen={chatModal}
      />
    </Fragment>
  );
};
export default ServiceCenter;
