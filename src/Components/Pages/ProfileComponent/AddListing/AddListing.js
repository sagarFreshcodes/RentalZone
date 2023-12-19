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

  const ChangeFormIndex = (index) => {
    setFormIndex(index);
  };
  return (
    <ContentBox>
      <br />
      <br />
      <div className="AddListing">
        <Progressbar currentPage={"3"} />
        {formIndex == 2 ? (
          <Form2 />
        ) : formIndex == 3 ? (
          <Form3 />
        ) : formIndex == 4 ? (
          <Form4 />
        ) : formIndex == 5 ? (
          <Form5 />
        ) : (
          <Form1 />
        )}
      </div>
    </ContentBox>
  );
};

export { AddListing };
