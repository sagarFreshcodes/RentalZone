import React, { Fragment, useEffect, useState } from "react";
import { Col, Card, Row } from "reactstrap";
import CountUp from "react-countup";
import { H6, Image, LI, UL } from "../../../AbstractElements";
import {
  BOD,
  ContactUs,
  ContactUsNumber,
  DDMMYY,
  Designer,
  Email,
  Follower,
  Following,
  LocationDetails,
  MarekjecnoMailId,
  MarkJecno,
  Location,
} from "../../../Constant";
import ProfileModel from "../Models/Profile/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { SetUserProfile } from "../../../Redux_Store/Actions/userActions";
import {
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  CHECK_OTP,
  UPDATE_PROFILE,
} from "../../../Constant/api_constant";
const UserProfilePage = ({}) => {
  const [url, setUrl] = useState("");

  const [page, setPage] = useState(1);
  const [modal, setModel] = useState(false);
  const user_details = useSelector((state) => state.UserReducer.user_details);
  const dispatch = useDispatch();
  const RowData = {
    profileBanner: user_details && user_details?.profile_pic,
    profilePic: user_details && user_details?.profile_banner,
    user_name: user_details && user_details?.name,
    email: user_details && user_details?.email,
    phoneNumber: user_details && user_details?.phone_number,
    website: user_details && user_details?.user_website,
  };

  const [formData, setFormData] = useState(RowData);
  const toggle = () => {
    setModel(!modal);
  };
  const readUrl = (event) => {
    if (event.target.files.length === 0) return;
    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      setUrl(reader.result);
    };
  };

  const ButtonClick = (i) => {
    console.log("user_details", user_details);
    // dispatch(SetUserProfile({ profileData: { email: 11111 } }));
    // const user_details = JSON.stringify(response.data.data.user_details);
    // localStorage.setItem("user_details", user_details);
    switch (i.title) {
      case "Edit Profile":
        setModel(true);
        break;
      default:
        break;
    }
  };

  const OnSubmitForm = () => {
    const bodyFormData = new FormData();
    Object.keys(formData).map((i) => {
      bodyFormData.append(i, formData[i]);
    });

    POST_API({
      endPoint: `${API_ROOT_URL}/${UPDATE_PROFILE}`,
      body: bodyFormData,
    })
      .then((response) => {
        // const user_details = JSON.stringify(response.data.data.user_details);

        // SaveUserAuthToken({
        //   token: response.data.data.token,
        //   user_details: user_details,
        // });
        ToastSuccess(response);

        // dispatch(
        //   UserActions({ status: "success", profileData: response.data.data })
        // );
        setModel(!modal);
      })
      .catch((error) => {
        ToastError(error);
      });

    setModel(!modal);
  };
  useEffect(() => {
    setFormData(RowData);
  }, [user_details]);
  return (
    <Fragment>
      <div className="user-profile ProfileComponent">
        <div className="ProfileNavbar">
          {[
            {
              title: page == 1 ? "Edit Profile" : "My Profile",
              btnType: "dark",
            },
            { title: "All Listing", btnType: "light" },
            { title: "Add Listing", btnType: "info" },
            { title: "All Product", btnType: "warning" },
            { title: "Add Product", btnType: "danger" },
            { title: "Reviews", btnType: "success" },
            { title: "Bookings", btnType: "secondary" },
            { title: "Change Password", btnType: "primary" },
            { title: "Logout", btnType: "dark" },
          ].map((i) => (
            <button
              type="button"
              class={`btn btn-outline-dark`}
              onClick={() => ButtonClick(i)}
            >
              {i.title}
            </button>
          ))}
        </div>
        <Card className="hovercard text-center">
          {/* <CardHeader className="cardheader"> */}
          <Image
            attrImage={{
              className: "img-fluid rounded",
              src: `${require("../../../assets/images/other-images/profile-style-img3.png")}`,
              alt: "gallery",
            }}
          />
          {/* </CardHeader> */}
          <div className="user-image">
            <div className="avatar">
              <Image
                attrImage={{
                  className: "step1",
                  alt: "",
                  src: `${
                    url ? url : require("../../../assets/images/user/7.jpg")
                  }`,
                }}
              />
            </div>
            <div
              className="icon-wrapper step2"
              data-intro="Change Profile image here"
            >
              <i
                className="icofont icofont-pencil-alt-5"
                onChange={(e) => readUrl(e)}
              >
                <input
                  className="upload"
                  type="file"
                  onChange={(e) => readUrl(e)}
                />
              </i>
            </div>
          </div>
          <div className="info">
            <Row className="step3" data-intro="This is the your details">
              <Col sm="6" lg="4" className="order-sm-1 order-xl-0">
                <Row>
                  <Col md="6">
                    <div className="ttl-info text-start">
                      <H6>
                        <i className="fa fa-envelope me-2"></i>
                        {`Name`}
                      </H6>
                      <span>{formData?.user_name}</span>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="ttl-info text-start ttl-sm-mb-0">
                      <H6>
                        <i className="fa fa-calendar me-2"></i>
                        {Email}
                      </H6>
                      <span>{formData.email}</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col sm="12" lg="4" className="order-sm-0 order-xl-1">
                <div className="user-designation">
                  <div className="title">
                    <a target="_blank" href="#javascript">
                      {ContactUs}
                    </a>
                  </div>
                  <div className="desc mt-2">{formData.phoneNumber}</div>
                </div>
              </Col>
              <Col sm="6" lg="4" className="order-sm-2 order-xl-2">
                <Row>
                  <Col md="6">
                    <div className="ttl-info text-start ttl-xs-mt">
                      <H6>
                        <i className="fa fa-phone me-2"></i>
                        {`Website`}
                      </H6>
                      <span>{formData?.website}</span>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="ttl-info text-start ttl-sm-mb-0">
                      <H6>
                        <i className="fa fa-location-arrow me-2"></i>
                        {Location}
                      </H6>
                      <span>{user_details?.user_location}</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <hr />
            <div
              className="social-media step4"
              data-intro="This is your Social details"
            >
              <UL
                attrUL={{
                  horizontal: true,
                  className:
                    "simple-list list-inline d-flex justify-content-center simple-list",
                }}
              >
                <LI attrLI={{ className: "border-0 list-inline-item" }}>
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook"></i>
                  </a>
                </LI>
                <LI attrLI={{ className: "border-0  list-inline-item" }}>
                  <a href="https://accounts.google.com/">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </LI>
                <LI attrLI={{ className: "border-0  list-inline-item" }}>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter"></i>
                  </a>
                </LI>
                <LI attrLI={{ className: "border-0  list-inline-item" }}>
                  <a href="https://www.instagram.com/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </LI>
                <LI attrLI={{ className: "border-0  list-inline-item" }}>
                  <a href="https://dashboard.rss.com/auth/sign-in/">
                    <i className="fa fa-rss"></i>
                  </a>
                </LI>
              </UL>
            </div>
            <div className="follow">
              <Row>
                <Col col="6" className="border-end text-center">
                  <CountUp end={25869} className="follow-num counter d-grid" />
                  <span>{Follower}</span>
                </Col>
                <Col col="6" className="text-center">
                  <CountUp end={659887} className="follow-num counter d-grid" />
                  <span>{Following}</span>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
      </div>
      <ProfileModel
        toggler={toggle}
        isOpen={modal}
        user_details={user_details}
        formData={formData}
        setFormData={setFormData}
        OnSubmitForm={OnSubmitForm}
      />
    </Fragment>
  );
};

export default UserProfilePage;