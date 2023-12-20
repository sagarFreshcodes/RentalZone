import React, { useEffect, useState } from "react";
import ListingTable from "./ListingTable";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import {
  ChangeKeyNameOfObject,
  POST_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  UPDATE_LISTING_API,
} from "../../../../Constant/api_constant";
import { ToastContainer } from "react-toastify";
import ProductUpdate from "../../Models/AllPoduct/ProductUpdate";

const AllPoduct = ({
  AllProduct,
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
}) => {
  const [modal, setModel] = useState(false);
  const [formData, setFormData] = useState({});
  const { data, last_page, links } = AllProduct;
  const [tableData, setTableData] = useState(data);
  const toggle = () => {
    setModel(!modal);
  };

  const ClickOnEditIcon = ({ item }) => {
    setFormData(item);
    toggle();
    console.log(item);
  };
  const OnSubmitForm = () => {
    const PostObject = ChangeKeyNameOfObject({
      obj: formData,
      currentKeyName: "id",
      newKeyName: "listing_id",
    });
    const bodyFormData = new FormData();
    Object.keys(PostObject).map((i) => {
      bodyFormData.append(i, PostObject[i]);
    });

    POST_API({
      endPoint: `${API_ROOT_URL}/${UPDATE_LISTING_API}`,
      body: bodyFormData,
    })
      .then((response) => {
        ToastSuccess(response);
        toggle();
      })
      .catch((error) => {
        ToastError(error);
      });
  };
  useEffect(() => {
    setTableData(data);
  }, [AllProduct]);

  return (
    <>
      <ContentBox>
        <br />
        <br />
        <ListingTable tableData={tableData} ClickOnEditIcon={ClickOnEditIcon} />
      </ContentBox>
      <ProductUpdate
        toggler={toggle}
        isOpen={modal}
        formData={formData}
        setFormData={setFormData}
        OnSubmitForm={OnSubmitForm}
      />
      <ToastContainer />
    </>
  );
};

export { AllPoduct };
