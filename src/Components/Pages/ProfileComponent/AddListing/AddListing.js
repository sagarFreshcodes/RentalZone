import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import Form1 from "./AddListingForms/Form1";
import Form2 from "./AddListingForms/Form2";
import Form3 from "./AddListingForms/Form3";
import Form4 from "./AddListingForms/Form4";
import Form5 from "./AddListingForms/Form5";
import Progressbar from "../../../Common/Component/FormProgress/Progressbar";

const AddListing = () => {
  const [formIndex, setFormIndex] = useState(1);
  const [formData, setFormData] = useState({
    listing_name: "",
    address: "",
    country: "",
    state: "",
    city: "",
    area: "",
    location: "",
    pincode: "",
    phone_number: "",
    email: "",
    website: "",
    contact_person: "",
    description: "",
    rates_per: "",
    rates: "",
    listing_category: "",
  });

  const ChangeFormIndex = (index) => {
    setFormIndex(index);
  };
  const NextPage = () => {
    setFormIndex(formIndex + 1);
  };

  const AllProps = {
    NextPage: NextPage,
    formData: formData,
    setFormData: setFormData,
  };
  const selectOn = (index) => {
    setFormIndex(index);
  };

  const test = () => {
    console.log(formData);
  };
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
