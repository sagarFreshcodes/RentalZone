import React, { useState } from "react"; 
import { IoSearch, IoLocationOutline } from "react-icons/io5";
import { AiOutlineDown, AiFillBell } from "react-icons/ai";
import { CardHeader, Form, Input, Media } from "reactstrap";
import { useLocation } from 'react-router-dom';
import SearchModal from "./SearchModel";  
import CategoryAutoSearch from "../../../CommonSelector/CategoryAutoSearch";
import LocationAutoSearch from "../../../CommonSelector/LocationAutoSearch";
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

const SearchBar = ({ fun,className }) => {
  const [modal, setModel] = useState(false);
  const [currentLocation, setCurrentLocation] = useState("Bombay"); 
  const [currentCategory, setCurrentCategory] = useState("Category, Listing, Product"); 
  const [locationSearch, setLocationSearch] = useState(false);
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
