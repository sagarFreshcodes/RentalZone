import React from "react";
import { FS3, FS4, FS6, FS8 } from "../Font/FS";
import { useDispatch, useSelector } from "react-redux";
const Footer = () => {
  const GeneralData = useSelector((state) => state?.GeneralState?.data?.data);
  const area_location = GeneralData?.area_location || [];
  const city_location = GeneralData?.city_location || [];
  const test = () => {
    console.log(city_location, area_location);
  };
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
            title={"City Locations"}
            linkTitleArray={city_location}
            boxWidth={"100%"}
            linkBoxWidth={`20%`}
          />
        </div>
      ) : (
        ""
      )}
<br /> 
      {area_location.length > 2 ? (
        <div>
          <FooterLinkBox2
            title={"Area Locations"}
            linkTitleArray={area_location}
            boxWidth={"100%"}
            linkBoxWidth={`20%`}
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
    <div className="footerLinkBox" style={{ width: boxWidth }}>
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer">
        {linkTitleArray?.map((i) => {
          return (
            <div
              className="linkBox"
              style={{ width: linkBoxWidth, minWidth: "8rem" }}
            >
              <FS3>
                ✔️<span className="curserPointer"> {i}</span>
              </FS3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FooterLinkBox2 = ({ title, linkTitleArray, boxWidth, linkBoxWidth }) => {
  return (
    <div className="footerLinkBox" style={{ width: boxWidth }}>
      <FS6> {title}</FS6>
      <br />
      <div className="linksContainer">
        {linkTitleArray?.map((i) => {
          return (
            <div
              className="linkBox"
              style={{ width: linkBoxWidth, minWidth: "8rem" }}
            >
              <FS3>
                ✔️<span className="curserPointer"> {i?.area_name}</span>
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
