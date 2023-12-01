import React, { useState } from "react";
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { AiOutlineDown, AiFillBell } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { CardHeader, Form, Input, Media } from "reactstrap";
import SearchModal from "./SearchModel";
import CategoryAutoSearch from "../../../CommonSelector/CategoryAutoSearch";
import LocationAutoSearch from "../../../CommonSelector/LocationAutoSearch";
import { useSelector } from "react-redux";
import { SearchDirect } from "../../../Common/Component/helperFunction";
export const SearchIcon = () => {
  return (
    <p className="SearchIconBox">
      <IoSearch className="react-icon-common" />
    </p>
  );
};

const LocationIcon = () => {
  return (
    <IoLocationOutline
      className="react-icon-common"
      style={{ fontSize: "25px" }}
    />
  );
};

const SearchBar = ({ fun, className }) => {
  const [modal, setModel] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Bombay");
  const [currentCategory, setCurrentCategory] = useState(
    "Category, Listing, Product"
  );
  const [locationSearch, setLocationSearch] = useState(false);
  const GeneralState = useSelector((state) => state?.GeneralState);
  const navigate = useNavigate();

  const toggle = () => {
    if (modal) {
      setLocationSearch(false);
      setModel(false);
    } else {
      setModel(true);
    }
  };

  const toggle2 = () => {
    locationSearch ? setLocationSearch(false) : setLocationSearch(true);
  };

  const OnSearchIcon = () => {
    SearchDirect({ navigate, GeneralState });
  };
  return (
    <>
      <div className={`SearchBar ${className}`}>
        <LocationAutoSearch
          placeholder={currentLocation}
          field={`status`}
          setQuotation={{}}
          quotation={{}}
          postFieldName={`status`}
          optionsArray={[]}
          Icon={LocationIcon}
          boxWidth="15rem"
          className="location"
          setState={setCurrentLocation}
          OnSearchIcon={OnSearchIcon}
        />

        <CategoryAutoSearch
          placeholder={currentCategory}
          field={`status`}
          setQuotation={{}}
          quotation={{}}
          postFieldName={`status`}
          optionsArray={[]}
          Icon={SearchIcon}
          iconPose="end"
          setState={setCurrentCategory}
          currentLocation={currentLocation}
          OnSearchIcon={OnSearchIcon}
        />
      </div>

      <div className="SearchBar2" onClick={toggle}>
        {!modal ? (
          <CategoryAutoSearch
            placeholder={currentCategory}
            field={`status`}
            setQuotation={{}}
            quotation={{}}
            postFieldName={`status`}
            optionsArray={[]}
            Icon={SearchIcon}
            iconPose="end"
            setState={setCurrentCategory}
            OnSearchIcon={OnSearchIcon}
            currentLocation={currentLocation}
          />
        ) : null}

        <SearchModal isOpen={modal} title={`ModalTitle`} toggler={toggle}>
          <div className="serchElement">
            <div>
              <AiOutlineDown
                className="react-icon-common backIcon"
                onClick={toggle}
              />{" "}
            </div>
            <div>
              {" "}
              <IoLocationOutline
                className="react-icon-common "
                style={{ fontSize: "25px" }}
              />{" "}
              Mumbai{" "}
              <AiOutlineDown
                className={`react-icon-common  ${
                  locationSearch ? "locationDrop" : ""
                }`}
                onClick={toggle2}
              />{" "}
            </div>
            <div>
              {" "}
              <AiFillBell
                className="react-icon-common "
                style={{ fontSize: "25px" }}
              />{" "}
            </div>
          </div>
          <br />
          <div>
            {locationSearch ? (
              <LocationAutoSearch
                placeholder="Location"
                field={`status`}
                setQuotation={{}}
                quotation={{}}
                postFieldName={`status`}
                optionsArray={[]}
                boxWidth="15rem"
                className="w-100"
                setState={setCurrentLocation}
                OnSearchIcon={OnSearchIcon}
              />
            ) : (
              <CategoryAutoSearch
                placeholder={currentCategory}
                field={`status`}
                setQuotation={{}}
                quotation={{}}
                postFieldName={`status`}
                optionsArray={[]}
                Icon={SearchIcon}
                iconPose="end"
                className="w-100"
                setState={setCurrentCategory}
                currentLocation={currentLocation}
                OnSearchIcon={OnSearchIcon}
              />
            )}
          </div>

          <div className=""></div>
        </SearchModal>
      </div>
    </>
  );
};

export default SearchBar;
