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
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );
  const toggle = () => {
    setModel(!modal);
  };

  const ClickOnEditIcon = ({ item }) => {
    const TestData = {
      token: RentalUserAuthToken,
      product_name: "afaa",
      rent: "fsafs",
      description: "fasfas",
      brand: "ffasfs",
      model: "fsfs",
      meta_title: "fasfas",
      meta_desc: "fsfasf",
      listing: 1056,
      category: 8,
    };
    const RowData = {
      product_id: item.id,
      product_name: item?.product_name,
      rent: item?.rent,
      description: item?.description,
      brand: item?.brand,
      model: item?.model,
      meta_title: item?.meta_title,
      meta_desc: item?.meta_desc,
      listing: item?.listing_id,
      category: item?.category_id,
      token: RentalUserAuthToken,
    };
    // console.log("TestData 25025", TestData);

    // console.log("RowData 25025", RowData);
    console.log("item 25025", item);
    // setFormData(item);
    setEditing("editProduct");
    ChangePage({ pagenumber: 5, data: RowData });
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
    setRentalUserAuthToken(localStorage.getItem("rentalUserAuthToken"));
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
