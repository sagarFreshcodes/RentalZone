import React from "react";
import { FS3, FS4, FS6, FS8 } from "../Font/FS";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useMemo } from "react";
import { GeneralActions } from "../../Redux_Store/Actions/generalActions";
import { BASE_ROUTE } from "../../Route/RouthPath";
import { slugConvertor } from "../../Components/Common/Component/helperFunction";
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
  const area_location_empty = area_location?.length == 0;
  const city_location_empty = city_location?.length == 0;
  const test = () => { 
  };


  const onCategorySelect = (data) => { 
    const placeSlug = slugConvertor(data?.area_name);
    navigate(
      `${BASE_ROUTE}/${SelectedCategory?.category_slug}-${placeSlug}/${SelectedCategory?.category_id}`,
      { state: { location: placeSlug } }
    );
  };

  useMemo(() => {
    if (area_location_empty || city_location_empty) {
      dispatch(GeneralActions());
    }
  }, [dispatch]);
  return (
    <div className="footerContainer">
      <div className="footerComponentBox" onClick={test}>
        <FS8 attr={{ className: "RentalzoneIn" }}>Rentalzone.in</FS8>
        <FooterLinkBox
          title={"Support & Help"}
          linkTitleArray={[
            "About Us",
            "FAQ",
            "Contact Us",
            "Seller Register",
            "Privacy Policy",
          ]}
          boxWidth={"20rem"}
          linkBoxWidth={`50%`}
        />
        <FooterLinkBox
          title={"Popular Services"}
          linkTitleArray={[
            "Computer Rental",
            "IPad Rental",
            "Printer Rental",
            "Laptop Rental",
          ]}
          boxWidth={"20rem"}
          linkBoxWidth={`50%`}
        />
        <FooterLinkBox
          title={"Cities Covered"}
          linkTitleArray={[
            "AC Rental",
            "Audio Rental",
            "Badge Printing Kiosk",
            "Badge Printing Kiosk",
            "Car Rental",
            "Display Rental",
            "Digital Signage Standee",
            "Furniture Rental",
            "MacBook Rental",
            "Projector Rental",
            "Server Rental",
            "UPS Rental",
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
    </div>
  );
};

export default Footer;

const FooterLinkBox = ({ title, linkTitleArray, boxWidth, linkBoxWidth }) => {
  return (
    <div className="footerLinkBox"  >
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer">
        {linkTitleArray?.map((i) => {
          return (
            <div
              className="linkBox" 
            >
              <FS3>
                <span className="cursorPointer"> {i}</span>
              </FS3>
            </div>
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
    <div className="footerLinkBox"  >
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer2">
        {linkTitleArray?.map((i) => {
          return (
            <div
              onClick={() => onCategorySelect(i)}
              className="linkBox" 
            >
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

const bombayAreas = [
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
  "Andheri",
  "Bandra",
  "Borivali",
  "Chembur",
  "Colaba",
  "Dadar",
  "Dharavi",
  "Goregaon",
  "Juhu",
  "Kandivali",
  "Kurla",
  "Malad",
  "Matunga",
  "Mulund",
  "Parel",
  "Santacruz",
  "Versova",
  "Vile Parle",
  "Wadala",
  "Worli",
  "Byculla",
  "Khar",
  "Mahim",
  "Sion",
  "Ghatkopar",
  "Powai",
  "Vikhroli",
  "Kanjurmarg",
  "Mahalaxmi",
  "Marine Lines",
  "Tardeo",
  "Grant Road",
  "Mazgaon",
  "Walkeshwar",
  "Bhuleshwar",
  "Kamathipura",
  "Pydhonie",
  "Cuffe Parade",
  "Nariman Point",
  "Fort",
  "Ballard Estate",
  "Churchgate",
  "Mantralaya",
  "Tardeo",
  "Malabar Hill",
  "Girgaon",
  "Kalbadevi",
  "Charni Road",
  "Opera House",
];
