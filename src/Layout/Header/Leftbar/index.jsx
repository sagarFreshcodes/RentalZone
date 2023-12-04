import React, { Fragment, useState, useLayoutEffect, useContext } from "react";
import { Col } from "reactstrap";
import { AlignCenter } from "react-feather";
import { Link } from "react-router-dom";
import { Image } from "../../../AbstractElements";
import CustomizerContext from "../../../_helper/Customizer";
import NotificationSlider from "./NotificationSlider";
import SearchBar, {
  SearchIcon,
} from "../../../Components/Pages/PrivateComponent/Home/SearchBar";
import UserHeader from "./UserHeader";
import { UL } from "../../../AbstractElements";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const Leftbar = () => {
  let location = useLocation();
  const state = useSelector((state) => state);
  const { layoutURL, setToggleIcon, toggleSidebar } =
    useContext(CustomizerContext);
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const [searchBarShow, setSearchBarShow] = useState(false);

  const width = useWindowSize();

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        if (window.innerWidth <= 991) {
          setToggleIcon(true);
        } else {
          setToggleIcon(false);
        }
      }
      window.addEventListener("resize", updateSize);
      updateSize();
      return () => window.removeEventListener("resize", updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      toggleSidebar(!toggle);
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper ";
      document.querySelector(".bg-overlay1").classList.add("active");
    } else {
      if (toggle) {
        toggleSidebar(!toggle);
        document.querySelector(".sidebar-wrapper").className =
          "sidebar-wrapper close_icon ";
      } else {
        console.log("991 54 else", toggle);
        toggleSidebar(!toggle);
        document.querySelector(".sidebar-wrapper").className =
          "sidebar-wrapper ";
      }
    }
  };

  // Event listener to detect scroll
  window.addEventListener("scroll", function () {
    // Get the current scroll position in the y-direction
    var scrollY = window.scrollY || window.pageYOffset;
    // Use scrollY for whatever measurement or action you need
    if (scrollY <= 175) {
      setSearchBarShow(false);
    } else {
      setSearchBarShow(true);
    }
  });
  return (
    <Fragment> 
        <div className="headerLogoSearchBox">
          <div
            className="logo-wrapper"
            onClick={() => {
              console.log(`state`, state);
            }}
          >
            {/* <Link to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}> */}
            <Link
              to={`${process.env.PUBLIC_URL}/dashboard/default/${layoutURL}`}
            >
              <Image
                attrImage={{
                  className: "logoImageClass",
                  src: `${require("../../../assets/images/logo/pconrent.png")}`,
                  alt: "",
                }}
              />
              <Image
                attrImage={{
                  className: "img-fluid for-dark",
                  src: `${require("../../../assets/images/logo/logo_dark.png")}`,
                  alt: "",
                }}
              />
            </Link>
          </div>

          {searchBarShow || !location.pathname.includes(`home`) ? (
            <div className="leftSearchbar">
              <SearchBar />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="UserHeaderBox">
          <UserHeader />
        </div> 
    </Fragment>
  );
};

export default Leftbar;
