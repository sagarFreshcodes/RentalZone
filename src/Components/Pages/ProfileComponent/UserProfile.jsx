import React, { Fragment, useEffect, useState } from "react";
import ProfileModel from "../Models/Profile/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import {
  AllProductApi,
  MyListApi,
  SetUserProfile,
  UserActions,
} from "../../../Redux_Store/Actions/userActions";
import {
  Log_Out,
  POST_API,
  POST_FORMDATA_API,
  ReactIcon,
  ToastError,
  ToastSuccess,
} from "../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  CHECK_OTP,
  DELETE_PRODUCT_API,
  UPDATE_PASSWORD_API,
  UPDATE_PROFILE,
} from "../../../Constant/api_constant";
import { ToastContainer } from "react-toastify";
import { useNavigate, useNavigation } from "react-router";
import { HOME_ROUTE, LIST_BUSINESS_ROUTE } from "../../../Route/RouthPath";
import Profile from "./Profile/Profile";
import { AddListing } from "./AddListing/AddListing";
import { AllPoduct } from "./AllPoduct/AllPoduct";
import { AddPoduct } from "./AddPoduct/AddPoduct";
import { AllListing } from "./AllListing/AllListing";
import { ApiLoader } from "../../Common/Component/DesignElement";
import ChangePassword from "../Models/ChangePassword/ChangePassword";
import { Row, Col, Card, CardBody } from "reactstrap";
const UserProfilePage = ({}) => {
  const [url, setUrl] = useState("");
  const [navbarShow, setNavbarShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [page, setPage] = useState(1);
  const [listingCurrent_page, setListingCurrentPage] = useState(1);
  const [ProductCurrent_page, setProductCurrentPage] = useState(1);
  const [ProductLast_page, setProductLastPage] = useState(1);
  const [listingLast_page, setListingLastPage] = useState(1);
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );
  const [changePwd, setChangePwd] = useState({
    password: "",
    confirm_password: "",
  });
  const [modal, setModel] = useState(false);
  const [profileLoader, setProfileLoader] = useState(false);
  const [cp_modal, setCp_Model] = useState(false);
  const [loader, setLoader] = useState({
    profileLoader: false,
    logOutLoader: false,
    changePwd: false,
  });

  const [editRecordData, setEditRecordData] = useState({});
  const user_details = useSelector((state) => state.UserReducer.user_details);
  const userStateData = useSelector((state) => state.UserReducer);
  const loadingChange = (name, type) => {
    setLoader({ ...loader, [name]: type });
  };
  const cp_toggle = () => {
    setCp_Model(!cp_modal);
  };

  const { token, AllList, AllProduct, isProductLoading, isListingLoading } =
    userStateData || {
      AllList: [],
      AllProduct: [],
    };
  const dispatch = useDispatch();
  const RowData = {
    profile_banner: user_details?.profile_banner,
    profile_pic: user_details && user_details?.profile_pic,
    name: user_details && user_details?.name,
    email: user_details && user_details?.email,
    phone_number: user_details && user_details?.phone_number,
    user_website: user_details && user_details?.user_website,
    token: token,
    profile_banner_URL: user_details && user_details?.profile_banner,
    profile_pic_URL: user_details && user_details?.profile_pic,
  };
  const [formData, setFormData] = useState(RowData);

  const toggle = () => {
    setModel(!modal);
  };
  const history = useNavigate();

  const Logout = () => {
    Log_Out({
      Redirect: () => history(LIST_BUSINESS_ROUTE),
      loadingChange: loadingChange,
    });
  };
  const ButtonClick = ({ i, index }) => {
    Toggle();
    switch (index) {
      case 0:
        window.location.href = HOME_ROUTE;
        break;
      case 1:
        i.title == "Edit Profile" ? setModel(true) : console.log("");
        setPage(1);
        break;
      case 2:
        setPage(2);
        break;
      case 3:
        setPage(3);
        break;
      case 4:
        setPage(4);
        break;
      case 5:
        setPage(5);
        break;
      case 6:
        cp_toggle();
        break;
      case 7:
        Logout();
        break;
      default:
        break;
    }
  };

  const ChangePage = ({ pagenumber, data }) => {
    setPage(pagenumber);
    setEditRecordData(data);
  };
  const Toggle = () => {
    setNavbarShow(!navbarShow);
  };
  const OnSubmitForm = () => {
    loadingChange("profileLoader", true);
    const bodyFormData = new FormData();
    Object.keys(formData).map((i) => {
      bodyFormData.append(i, formData[i]);
    });

    POST_API({
      endPoint: `${API_ROOT_URL}/${UPDATE_PROFILE}`,
      body: bodyFormData,
    })
      .then((response) => {
        console.log("data123654", response?.data?.data[0]);
        loadingChange("profileLoader", false);
        SetUserProfile({
          profileData: response?.data?.data[0],
        });
        ToastSuccess(response);
        dispatch(SetUserProfile({ profileData: response?.data?.data[0] }));
        localStorage.setItem(
          "user_details",
          JSON.stringify({
            ...response?.data?.data[0],
            //   profile_pic:
            //     "https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp",
          })
        );
        setModel(!modal);
      })
      .catch((error) => {
        loadingChange("profileLoader", false);
        ToastError(error);
      });
  };
  const OnPwdChange = () => {
    loadingChange("changePwd", true);
    console.log("TestData 25025", editRecordData);
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${UPDATE_PASSWORD_API}`,
      body: { password: changePwd.password, token: RentalUserAuthToken },
    })
      .then((responce) => {
        ToastSuccess(responce);
        cp_toggle();
        loadingChange("changePwd", false);
      })
      .catch((error) => {
        ToastError(error);
        cp_toggle();
        loadingChange("changePwd", false);
      });
  };
  useEffect(() => {
    setFormData(RowData);
  }, [user_details]);

  useEffect(() => {
    if (![3, 5].includes(page)) {
      console.log("page", page);
      setEditRecordData({});
      setEditing(false);
    }
  }, [page]);

  useEffect(() => {
    const RentalUserAuthToken = localStorage.getItem("rentalUserAuthToken");
    console.log("2852", page);
    if (page == 2) {
      console.log("28524", page);
      dispatch(
        MyListApi({ Token: RentalUserAuthToken, page: listingCurrent_page })
      );
    } else if (page == 4) {
      console.log("28524", page);
      dispatch(
        AllProductApi({ Token: RentalUserAuthToken, page: ProductCurrent_page })
      );
    }

    setRentalUserAuthToken(localStorage.getItem("rentalUserAuthToken"));
  }, [page, editing, editRecordData, listingCurrent_page, ProductCurrent_page]);
  console.log("loader.logOutLoader", loader.logOutLoader);
  useEffect(() => {}, [loader]);
  return (
    <Fragment>
      <div className="user-profile ProfileComponent">
        <div className="ProfileNavbar">
          <ReactIcon
            iconName="AiOutlineMenu"
            attr={{
              className: "p_navbar_list",
              onClick: () => setNavbarShow(!navbarShow),
            }}
          />
          {[
            {
              title: "Home",
              btnType: "dark",
            },
            {
              title: page == 1 ? "Edit Profile" : "My Profile",
              btnType: "dark",
            },
            { title: "All Listing", btnType: "light" },
            {
              title:
                editing == "editListing" ? "Update Listing" : "Add Listing",
              btnType: "info",
            },
            { title: "All Product", btnType: "warning" },
            {
              title:
                editing == "editProduct" ? "Update Product" : "Add Product",
              btnType: "danger",
            },
            // { title: "Reviews", btnType: "success" },
            // { title: "Bookings", btnType: "secondary" },
            {
              title: "Change Password",
              btnType: "primary",
              isloader: true,
              loderCondition: loader.changePwd,
            },
            {
              title: "Logout",
              btnType: "dark",
              isloader: true,
              loderCondition: loader.logOutLoader,
            },
          ].map((i, index) => (
            <button
              type="button"
              key={index}
              class={`btn btn-outline-dark navbarButton1`}
              onClick={() => ButtonClick({ i: i, index: index })}
            >
              {i.title} {i.isloader && i.loderCondition ? <ApiLoader /> : ""}
            </button>
          ))}

          {[
            {
              title: "Home",
              btnType: "dark",
            },
            {
              title: page == 1 ? "Edit Profile" : "My Profile",
              btnType: "dark",
            },
            { title: "All Listing", btnType: "light" },
            {
              title:
                editing == "editListing" ? "Update Listing" : "Add Listing",
              btnType: "info",
            },
            { title: "All Product", btnType: "warning" },
            {
              title:
                editing == "editProduct" ? "Update Product" : "Add Product",
              btnType: "danger",
            },
            // { title: "Reviews", btnType: "success" },
            // { title: "Bookings", btnType: "secondary" },
            {
              title: "Change Password",
              btnType: "primary",
              isloader: true,
              loderCondition: loader.changePwd,
            },
            {
              title: "Logout",
              btnType: "dark",
              isloader: true,
              loderCondition: loader.logOutLoader,
            },
          ].map((i, index) => (
            <button
              key={index}
              type="button"
              class={`btn btn-outline-dark ${
                navbarShow ? "navbarButton2" : "navbarButton2Hide"
              }`}
              onClick={() => ButtonClick({ i: i, index: index })}
            >
              {i.title} {i.isloader && i.loderCondition ? <ApiLoader /> : ""}
            </button>
          ))}
        </div>
        <Card>
          {" "}
          <CardBody>
            {page == 1 ? (
              <Profile
                Toggle={Toggle}
                ButtonClick={ButtonClick}
                user_details={user_details}
                formData={formData}
                page={page}
                navbarShow={navbarShow}
                profileLoader={profileLoader}
              />
            ) : page == 2 ? (
              <AllListing
                AllList={AllList}
                editing={editing}
                setEditing={setEditing}
                ChangePage={ChangePage}
                setEditRecordData={setEditRecordData}
                editRecordData={editRecordData}
                isListingLoading={isListingLoading}
                listingCurrent_page={listingCurrent_page}
                setListingCurrentPage={setListingCurrentPage}
                listingLast_page={listingLast_page}
                setListingLastPage={setListingLastPage}
              />
            ) : page == 3 ? (
              <AddListing
                editing={editing}
                setEditing={setEditing}
                ChangePage={ChangePage}
                setEditRecordData={setEditRecordData}
                editRecordData={editRecordData}
              />
            ) : page == 4 ? (
              <AllPoduct
                AllProduct={AllProduct}
                editing={editing}
                setEditing={setEditing}
                ChangePage={ChangePage}
                setEditRecordData={setEditRecordData}
                editRecordData={editRecordData}
                isProductLoading={isProductLoading}
                ProductCurrent_page={ProductCurrent_page}
                setProductCurrentPage={setProductCurrentPage}
                ProductLast_page={ProductLast_page}
                setProductLastPage={setProductLastPage}
              />
            ) : (
              <AddPoduct
                editing={editing}
                setEditing={setEditing}
                ChangePage={ChangePage}
                setEditRecordData={setEditRecordData}
                editRecordData={editRecordData}
              />
            )}
          </CardBody>
        </Card>
      </div>
      <ProfileModel
        toggler={toggle}
        isOpen={modal}
        user_details={user_details}
        formData={formData}
        setFormData={setFormData}
        OnSubmitForm={OnSubmitForm}
        loader={loader.profileLoader}
      />
      <ToastContainer />
      <ChangePassword
        toggler={cp_toggle}
        isOpen={cp_modal}
        OnPwdChange={OnPwdChange}
        changePwd={changePwd}
        setChangePwd={setChangePwd}
        loader={loader.changePwd}
      />
    </Fragment>
  );
};

export default UserProfilePage;
