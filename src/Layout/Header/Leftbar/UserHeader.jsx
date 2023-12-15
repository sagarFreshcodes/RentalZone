import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileText, LogIn, Mail, User, Activity } from "react-feather";
import man from "../../../assets/images/dashboard/profile.png";

import { LI, UL, Image, P } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import { Account, Admin, Inbox, LogOut, Taskboard } from "../../../Constant";
import { LIST_BUSINESS_ROUTE } from "../../../Route/RouthPath";
import { Log_Out } from "../../../Components/Common/Component/helperFunction";

const UserHeader = () => {
  const history = useNavigate();
  const [profile, setProfile] = useState("");
  const [name, setName] = useState("Emay Walter");
  const [mouseOn, setMouseOn] = useState(false);
  const [show, setShow] = useState(false);
  const { layoutURL } = useContext(CustomizerContext);
  const authenticated = JSON.parse(localStorage.getItem("authenticated"));
  const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"));

  useEffect(() => {
    setProfile(localStorage.getItem("profileURL") || man);
    setName(localStorage.getItem("Name") ? localStorage.getItem("Name") : name);
  }, []);

  const Logout = () => {
    Log_Out({ Redirect: () => history(LIST_BUSINESS_ROUTE) });
  };

  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  const OnShow = () => {
    setShow(!show);
  };

  const login = !["null", null, undefined, "undefined"].includes(
    localStorage.getItem("rentalUserAuthToken")
  );

  const clickOnFreeListing = () => {
    UserMenuRedirect(LIST_BUSINESS_ROUTE);
    console.log("first1235", login);
    console.log(
      "first1235 localStorage.getIte",
      localStorage.getItem("rentalUserAuthToken")
    );
  };
  return (
    <ul
      className="profile-nav onhover-dropdown pe-0 py-0"
      onClick={OnShow}
      // onPointerLeave={()=> setShow(false)}
    >
      <div className="media profile-media">
        <Image
          attrImage={{
            className: "b-r-10 m-0",
            src: `${authenticated ? auth0_profile.picture : profile}`,
            alt: "",
          }}
        />
        <div className="media-body">
          <span>{authenticated ? auth0_profile.name : name}</span>
          <P attrPara={{ className: "mb-0 font-roboto" }}>
            {Admin} <i className="middle fa fa-angle-down"></i>
          </P>
        </div>
      </div>
      <UL
        attrUL={{
          className: `simple-list profile-dropdown ${show ? "" : "d-none"}`,
        }}
      >
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/app/users/profile/${layoutURL}`
              ),
          }}
        >
          <User />
          <span>{Account} </span>
        </LI>
        <LI
          attrLI={{
            onClick: clickOnFreeListing,
            className: login ? "d-none" : "",
          }}
        >
          <Activity />
          <span>{`Free listing`} </span>
        </LI>
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/app/email-app/${layoutURL}`
              ),
          }}
        >
          <Mail />
          <span>{Inbox}</span>
        </LI>
        <LI
          attrLI={{
            onClick: () =>
              UserMenuRedirect(
                `${process.env.PUBLIC_URL}/app/todo-app/todo/${layoutURL}`
              ),
          }}
        >
          <FileText />
          <span>{Taskboard}</span>
        </LI>
        <LI attrLI={{ onClick: Logout, className: login ? "" : "d-none" }}>
          <LogIn />
          <span>{LogOut}</span>
        </LI>
      </UL>
    </ul>
  );
};

export default UserHeader;
