import React from "react";
import { FS3, FS4, FS6, FS8 } from "../Font/FS";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useMemo } from "react";
import {
  FAQActions,
  GeneralActions,
} from "../../Redux_Store/Actions/generalActions";
import { BASE_ROUTE, FAQ_ROUTE, SITEMAP } from "../../Route/RouthPath";
import { slugConvertor } from "../../Components/Common/Component/helperFunction";
import { Link } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const GeneralState = useSelector((state) => state?.GeneralState);
  const CurrentLocation = GeneralState?.location?.city_slug;
  const CurrentCategory = GeneralState?.category;
  const SelectedCategory = GeneralState?.selectedCategory;
  const GeneralData = useSelector((state) => state?.GeneralState?.data?.data);
  const area_location = GeneralData?.area_location || [];
  const city_location = GeneralData?.city_location || [];
  const top_cities = GeneralData?.top_cities || [];
  const area_location_empty = area_location?.length == 0;
  const city_location_empty = city_location?.length == 0;
  const top_cities_empty = top_cities?.length == 0;
  const test = () => {};

  const onCategorySelect = (data) => {
    const placeSlug = slugConvertor(data?.area_name);
    navigate(
      `${BASE_ROUTE}/${SelectedCategory?.category_slug}-${placeSlug}/${SelectedCategory?.category_id}`,
      { state: { location: placeSlug } }
    );
  };

  const onCitySelect = (data) => {
    const placeSlug = slugConvertor(data?.city);
    navigate(
      `${BASE_ROUTE}/${SelectedCategory?.category_slug}-${placeSlug}/${SelectedCategory?.category_id}`,
      { state: { location: placeSlug } }
    );
  };

  useMemo(() => {
    console.log("test2545");
    if (area_location_empty || city_location_empty) {
      dispatch(GeneralActions({ current_location: "mumbai" }));
    }
    dispatch(FAQActions());
  }, []);
  return (
    <div className="footerContainer">
      <div className="footerComponentBox" onClick={test}>
        <FS8 attr={{ className: "RentalzoneIn" }}>Rentalzone.in</FS8>
        <FooterLinkBox
          title={"Support & Help"}
          linkTitleArray={[
            { title: "About Us", link: "about-us" },
            { title: "FAQ", link: FAQ_ROUTE },
            { title: "Contact Us", link: "contact-us" },
            { title: "Seller Register", link: "seller-register" },
            { title: "Privacy Policy", link: "privacy-policy" },
            { title: "Site map", link: SITEMAP },
          ]}
          boxWidth={"20rem"}
          linkBoxWidth={`50%`}
        />
        <FooterLinkBox
          title={"Popular Services"}
          linkTitleArray={[
            { title: "Computer Rental", link: "computer-rental" },
            { title: "IPad Rental", link: "ipad-rental" },
            { title: "Printer Rental", link: "printer-rental" },
            { title: "Laptop Rental", link: "laptop-rental" },
          ]}
          boxWidth={"20rem"}
          linkBoxWidth={`50%`}
        />
        <FooterLinkBox
          title={"Cities Covered"}
          linkTitleArray={[
            { title: "AC Rental", link: "ac-rental" },
            { title: "Audio Rental", link: "audio-rental" },
            { title: "Badge Printing Kiosk", link: "badge-printing-kiosk" },
            { title: "Badge Printing Kiosk", link: "badge-printing-kiosk" },
            { title: "Car Rental", link: "car-rental" },
            { title: "Display Rental", link: "display-rental" },
            {
              title: "Digital Signage Standee",
              link: "digital-signage-standee",
            },
            { title: "Furniture Rental", link: "furniture-rental" },
            { title: "MacBook Rental", link: "macbook-rental" },
            { title: "Projector Rental", link: "projector-rental" },
            { title: "Server Rental", link: "server-rental" },
            { title: "UPS Rental", link: "ups-rental" },
          ]}
          boxWidth={"20rem"}
          linkBoxWidth={`50%`}
        />
      </div>
      <br />
      <br />

      {city_location.length > 2 ? (
        <div>
          <FooterLinkBox2
            title={"Mumbai Locations"}
            linkTitleArray={city_location}
            boxWidth={"100%"}
            linkBoxWidth={`20%`}
            onCategorySelect={onCategorySelect}
          />
        </div>
      ) : (
        ""
      )}
      <br />
      {area_location.length > 2 ? (
        <div>
          <FooterLinkBox2
            title={"Navi Mumbai Areas"}
            linkTitleArray={area_location}
            boxWidth={"100%"}
            linkBoxWidth={`20%`}
            onCategorySelect={onCategorySelect}
          />
        </div>
      ) : (
        ""
      )}
      <br />
      {top_cities.length > 2 ? (
        <div>
          <FooterLinkBox3
            title={"Top cities"}
            linkTitleArray={top_cities}
            boxWidth={"100%"}
            linkBoxWidth={`20%`}
            onCategorySelect={onCitySelect}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Footer;

const FooterLinkBox = ({ title, linkTitleArray, boxWidth, linkBoxWidth }) => {
  return (
    <div className="footerLinkBox">
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer">
        {linkTitleArray?.map((i) => {
          return (
            <Link to={i.link}>
              <div className="linkBox">
                <FS3>
                  <span className="cursorPointer"> {i.title}</span>
                </FS3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

const FooterLinkBox2 = ({
  title,
  linkTitleArray,
  boxWidth,
  linkBoxWidth,
  onCategorySelect,
}) => {
  return (
    <div className="footerLinkBox">
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer2">
        {linkTitleArray?.map((i) => {
          return (
            <div onClick={() => onCategorySelect(i)} className="linkBox">
              <FS3>
                <span className="cursorPointer"> {i?.area_name}</span>
              </FS3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FooterLinkBox3 = ({
  title,
  linkTitleArray,
  boxWidth,
  linkBoxWidth,
  onCategorySelect,
}) => {
  return (
    <div className="footerLinkBox">
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer2">
        {linkTitleArray?.map((i) => {
          return (
            <div onClick={() => onCategorySelect(i)} className="linkBox">
              <FS3>
                <span className="cursorPointer"> {i?.city}</span>
              </FS3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
