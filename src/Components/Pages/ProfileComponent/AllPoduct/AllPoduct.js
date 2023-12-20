import React, { useEffect, useState } from "react";
import ListingTable from "./ListingTable";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import {
  ChangeKeyNameOfObject,
  POST_API,
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";
import {
  API_ROOT_URL,
  DELETE_LIST_API,
  DELETE_PRODUCT_API,
  UPDATE_LISTING_API,
} from "../../../../Constant/api_constant";
import { ToastContainer } from "react-toastify";
import ProductUpdate from "../../Models/AllPoduct/ProductUpdate";
import DeleteModel from "../../Models/DeleteModel/DeleteModel";
import { TableSkelaton } from "../../../Common/Component/Sleleton/Skelaton";
import { PageContentManager } from "../../../Common/Component/DesignElement";

const AllPoduct = ({
  AllProduct,
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
  isProductLoading,
}) => {
  const [modal, setModel] = useState(false);
  const [d_modal, setD_Model] = useState(false);
  const [formData, setFormData] = useState({});
  const { data, last_page, links } = AllProduct;
  const [tableData, setTableData] = useState(data);
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );
  const toggle = () => {
    setModel(!modal);
  };

  const d_toggle = () => {
    setD_Model(!d_modal);
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
  const ClickOnDeleteIcon = ({ item }) => {
    setEditRecordData(item);
    d_toggle();
  };
  const OnDelete = () => {
    console.log("TestData 25025", editRecordData);
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${DELETE_PRODUCT_API}`,
      body: { product_id: editRecordData.id, token: RentalUserAuthToken },
    })
      .then((responce) => {
        ToastSuccess(responce);
        setEditRecordData({});
        setEditing(false);
        d_toggle();
      })
      .catch((error) => {
        ToastError(error);
        d_toggle();
      });
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
        <PageContentManager
          isLoading={isProductLoading}
          loader={<TableSkelaton />}
          contentArray={tableData}
          ContentBody={
            <ListingTable
              tableData={tableData}
              ClickOnEditIcon={ClickOnEditIcon}
              ClickOnDeleteIcon={ClickOnDeleteIcon}
            />
          }
          // pagination={
          //   <PaginationBar
          //     last_page={5}
          //     current_page={1}
          //     setCurrentPage={(setCurrentPage) => console.log("first")}
          //   />
          // }
        />
      </ContentBox>
      <ProductUpdate
        toggler={toggle}
        isOpen={modal}
        formData={formData}
        setFormData={setFormData}
        OnSubmitForm={OnSubmitForm}
      />
      <ToastContainer />
      <DeleteModel
        toggler={d_toggle}
        isOpen={d_modal}
        OnDelete={OnDelete}
        lablename={editRecordData["name"]}
      />
    </>
  );
};

export { AllPoduct };
