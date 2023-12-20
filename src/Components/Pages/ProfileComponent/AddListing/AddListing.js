import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Form1 from "./AddListingForms/Form1";
import Form2 from "./AddListingForms/Form2";
import Form3 from "./AddListingForms/Form3";
import Form4 from "./AddListingForms/Form4";
import Form5 from "./AddListingForms/Form5";
import Progressbar from "../../../Common/Component/FormProgress/Progressbar";
import {
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import {
  ADD_LIST_API,
  API_ROOT_URL,
  UPDATE_LISTING_API,
} from "../../../../Constant/api_constant";

const AddListing = ({
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
}) => {
  const [formIndex, setFormIndex] = useState(1);
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );

  const RowData =
    editing == "editListing"
      ? editRecordData
      : {
          listing_name: "",
          address: "",
          country: "",
          state: "",
          city: "",
          area: "",
          pincode: "",
          phone_number: "",
          email: "",
          website: "",
          contact_person: "",
          description: "",
          rates_per: "",
          rates: "",
          listing_category: "",
        };
  const TestData = {
    listing_name: "Raghav Computers",
    address: "fasfasfasf",
    country: 101,
    state: 21,
    city: 673,
    area: 425,
    pincode: 12364,
    phone_number: 1236547895,
    email: "admin@gmail.com",
    website: "google.com",
    contact_person: "afasfasfas",
    description: "Description",
    rates_per: "property",
    rates: 10001,
    listing_category: "[3, 4, 7, 9]",
    mobile: 7982165765,
    token: RentalUserAuthToken,
  };
  const [formData, setFormData] = useState(RowData);
  const ChangeFormIndex = (index) => {
    setFormIndex(index);
  };
  const NextPage = () => {
    setFormIndex(formIndex + 1);
  };

  const OnSubmit = () => {
    const Apiurl = editing == "editListing" ? UPDATE_LISTING_API : ADD_LIST_API;
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${Apiurl}`,
      body: formData,
    })
      .then((responce) => {
        ToastSuccess(responce);
        setEditRecordData({});
        setEditing(false);
      })
      .catch((error) => {
        ToastError(error);
      });
  };
  const AllProps = {
    NextPage: NextPage,
    formData: formData,
    setFormData: setFormData,
    OnSubmit: OnSubmit,
  };
  const selectOn = (index) => {
    setFormIndex(index);
  };

  const test = () => {
    console.log("formData 25025", formData);
    console.log("editRecordData 25025", editRecordData);
  };

  useEffect(() => {
    setRentalUserAuthToken(localStorage.getItem("rentalUserAuthToken"));
  }, []);
  return (
    <ContentBox>
      <br />
      <br />
      <div className="AddListing" onClick={test}>
        <Progressbar currentPage={formIndex} selectOn={selectOn} />
        {formIndex == 2 ? (
          <Form2 AllProps={AllProps} />
        ) : formIndex == 3 ? (
          <Form3 AllProps={AllProps} />
        ) : formIndex == 4 ? (
          <Form4 AllProps={AllProps} />
        ) : formIndex == 5 ? (
          <Form5 AllProps={AllProps} />
        ) : (
          <Form1 AllProps={AllProps} />
        )}
      </div>
    </ContentBox>
  );
};

export { AddListing };

// {
//   listing_name: "test bhavin",
//   address: "surat adajan",
//   country: 101,
//   state: 10,
//   city: 2,
//   area: "surat adajan",
//   location: "surat parvat patya adajan",
//   pincode: 3950006,
//   phone_number: 3423432423,
//   email: "bhavin@freshcodes.in",
//   website: "www.google.com",
//   contact_person: 90909090,
//   description: "aasdasd test check one",
//   rates_per: 12,
//   rates: 32,
//   listing_category: "Laptop Rental",
// }

// {
//   "listing_name": "Raghav Computers",
//   "address": "fasfasfasf",
//   "country": 101,
//   "state": 21,
//   "city": 673,
//   "area": 425,
//   "pincode": 12364,
//   "phone_number": "",
//   "email": "admin@gmail.com",
//   "website": "google.com",
//   "contact_person": "afasfasfas",
//   "description": "Description",
//   "rates_per": "property",
//   "rates": 10001,
//   "listing_category": [],
//   "mobile": 7982165765
// }
