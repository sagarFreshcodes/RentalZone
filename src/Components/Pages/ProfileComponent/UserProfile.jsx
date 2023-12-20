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
  ReactIcon,
  ToastError,
  ToastSuccess,
} from "../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  CHECK_OTP,
  UPDATE_PROFILE,
} from "../../../Constant/api_constant";
import { RentalUserAuthToken } from "../../../Constant/general_constant";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import { LIST_BUSINESS_ROUTE } from "../../../Route/RouthPath";
import Profile from "./Profile/Profile";
import { AddListing } from "./AddListing/AddListing";
import { AllPoduct } from "./AllPoduct/AllPoduct";
import { AddPoduct } from "./AddPoduct/AddPoduct";
import { AllListing } from "./AllListing/AllListing";
const UserProfilePage = ({}) => {
  const [url, setUrl] = useState("");
  const [navbarShow, setNavbarShow] = useState(false);
  const [editing, setEditing] = useState(false);
  const [page, setPage] = useState(1);
  const [modal, setModel] = useState(false);
  const [editRecordData, setEditRecordData] = useState({});
  const user_details = useSelector((state) => state.UserReducer.user_details);
  const userStateData = useSelector((state) => state.UserReducer);
  const { token, AllList, AllProduct } = userStateData || {
    AllList: [],
    AllProduct: [],
  };
  const dispatch = useDispatch();
  const RowData = {
    profile_banner: user_details && user_details?.profile_pic,
    profile_pic: user_details && user_details?.profile_banner,
    name: user_details && user_details?.name,
    email: user_details && user_details?.email,
    phone_number: user_details && user_details?.phone_number,
    user_website: user_details && user_details?.user_website,
    token: token,
    profile_banner_URL: user_details && user_details?.profile_pic,
    profile_pic_URL: user_details && user_details?.profile_banner,
  };

  const [formData, setFormData] = useState(RowData);

  const toggle = () => {
    setModel(!modal);
  };
  const history = useNavigate();
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
  const Logout = () => {
    Log_Out({ Redirect: () => history(LIST_BUSINESS_ROUTE) });
  };
  const ButtonClick = ({ i, index }) => {
    Toggle();
    switch (index + 1) {
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
      case 9:
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
    const bodyFormData = new FormData();
    Object.keys(formData).map((i) => {
      bodyFormData.append(i, formData[i]);
    });

    POST_API({
      endPoint: `${API_ROOT_URL}/${UPDATE_PROFILE}`,
      body: bodyFormData,
    })
      .then((response) => {
        console.log("data123654", response);
        SetUserProfile({
          profileData: response?.data?.data[0],
        });
        ToastSuccess(response);
        dispatch(SetUserProfile({ profileData: response?.data?.data[0] }));
        localStorage.setItem(
          "user_details",
          JSON.stringify(response?.data?.data[0])
        );
        setModel(!modal);
      })
      .catch((error) => {
        ToastError(error);
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
      dispatch(MyListApi({ Token: RentalUserAuthToken }));
    } else if (page == 4) {
      console.log("28524", page);
      dispatch(AllProductApi({ Token: RentalUserAuthToken }));
    }
  }, [page]);

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
            { title: "Reviews", btnType: "success" },
            { title: "Bookings", btnType: "secondary" },
            { title: "Change Password", btnType: "primary" },
            { title: "Logout", btnType: "dark" },
          ].map((i, index) => (
            <button
              type="button"
              key={index}
              class={`btn btn-outline-dark navbarButton1`}
              onClick={() => ButtonClick({ i: i, index: index })}
            >
              {i.title}
            </button>
          ))}

          {[
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
            {
              title:
                editing == "editProduct" ? "Update Product" : "Add Product",
              btnType: "warning",
            },
            { title: "Add Product", btnType: "danger" },
            { title: "Reviews", btnType: "success" },
            { title: "Bookings", btnType: "secondary" },
            { title: "Change Password", btnType: "primary" },
            { title: "Logout", btnType: "dark" },
          ].map((i, index) => (
            <button
              key={index}
              type="button"
              class={`btn btn-outline-dark ${
                navbarShow ? "navbarButton2" : "navbarButton2Hide"
              }`}
              onClick={() => ButtonClick({ i: i, index: index })}
            >
              {i.title}
            </button>
          ))}
        </div>
        {page == 1 ? (
          <Profile
            Toggle={Toggle}
            ButtonClick={ButtonClick}
            user_details={user_details}
            formData={formData}
            page={page}
            navbarShow={navbarShow}
          />
        ) : page == 2 ? (
          <AllListing
            AllList={AllList}
            editing={editing}
            setEditing={setEditing}
            ChangePage={ChangePage}
            setEditRecordData={setEditRecordData}
            editRecordData={editRecordData}
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
      </div>
      <ProfileModel
        toggler={toggle}
        isOpen={modal}
        user_details={user_details}
        formData={formData}
        setFormData={setFormData}
        OnSubmitForm={OnSubmitForm}
      />
      <ToastContainer />
    </Fragment>
  );
};

export default UserProfilePage;
