import React, { useEffect, useState } from "react";
import { CommonButton } from "../../../../CommonElements/Button";
import flag from "../../../../assets/images/Essential/AuthComponent/flag.png";
import axios from "axios";
import {
  ToastError,
  convertStringToIntegerOrString,
} from "../../../Common/Component/helperFunction";
export const PhoneInput = ({ onChange }) => {
  const [show, setShow] = useState(false);
  const [mouseOn, setMouseOn] = useState(false);
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [search, setSearch] = useState(defaultCountry?.name);
  const [mobile, setMobile] = useState("");
  const Toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((data) => {
        setCountryList(data?.data);
      })
      .catch((error) => {
        ToastError(error);
      });
  }, []);

  const onSelect = (e) => {
    setSearch(e?.name);
    setShow(false);
    setSelectedCountry(e);
  };
  const onHandleChange = (e) => {
    onChange(
      convertStringToIntegerOrString(
        `${selectedCountry?.callingCodes[0]}${e.target.value}`
      )
    );

    setMobile(e.target.value);
  };
  return (
    <div className="PhoneInput">
      <div className="phoneDialBox">
        <div className="flagDrop">
          {" "}
          <img
            onClick={Toggle}
            className="flag"
            src={selectedCountry?.flag}
            alt=""
          />{" "}
          <span>+{selectedCountry?.callingCodes[0]}</span>
          <div
            id="scroll-3"
            className={show ? "countryCodeBox" : "d-none"}
            onPointerLeave={() => setMouseOn(false)}
            onMouseMove={() => setMouseOn(true)}
          >
            <div className="countrysearch">
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                placeholder="Search here..."
                type="text"
              />
            </div>
            <br />
            {countryList
              ?.filter((i) =>
                `${i?.name}`.toLowerCase().includes(`${search}`.toLowerCase())
              )
              ?.map((i) => {
                return (
                  <>
                    {" "}
                    <div className="countryCode" onClick={() => onSelect(i)}>
                      {" "}
                      <div className="flagbox">
                        {" "}
                        <img className="flag" src={i?.flag} alt="" />{" "}
                      </div>
                      <div className="countryName">
                        ({i?.callingCodes[0]}) {i?.name}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
        &nbsp;
        <input
          onChange={onHandleChange}
          type="number"
          value={mobile}
          placeholder="Enter Mobile No."
          onBlur={() => setShow(mouseOn ? true : false)}
        />
      </div>

      <CommonButton>Start Now {`->`}</CommonButton>
    </div>
  );
};

export default PhoneInput;

const defaultCountry = {
  name: "India",
  topLevelDomain: [".in"],
  alpha2Code: "IN",
  alpha3Code: "IND",
  callingCodes: ["91"],
  capital: "New Delhi",
  altSpellings: ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 1380004385,
  latlng: [20, 77],
  demonym: "Indian",
  area: 3287590,
  gini: 35.7,
  timezones: ["UTC+05:30"],
  borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
  nativeName: "भारत",
  numericCode: "356",
  flags: {
    svg: "https://flagcdn.com/in.svg",
    png: "https://flagcdn.com/w320/in.png",
  },
  currencies: [
    {
      code: "INR",
      name: "Indian rupee",
      symbol: "₹",
    },
  ],
  languages: [
    {
      iso639_1: "hi",
      iso639_2: "hin",
      name: "Hindi",
      nativeName: "हिन्दी",
    },
    {
      iso639_1: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
  ],
  translations: {
    br: "India",
    pt: "Índia",
    nl: "India",
    hr: "Indija",
    fa: "هند",
    de: "Indien",
    es: "India",
    fr: "Inde",
    ja: "インド",
    it: "India",
    hu: "India",
  },
  flag: "https://flagcdn.com/in.svg",
  regionalBlocs: [
    {
      acronym: "SAARC",
      name: "South Asian Association for Regional Cooperation",
    },
  ],
  cioc: "IND",
  independent: true,
};
