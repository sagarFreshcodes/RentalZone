import React, { useEffect, useState } from "react";
import ListingTable from "./ListingTable";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import ListingUpdate from "../../Models/AllListing/ListingUpdate";
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
  UPDATE_LISTING_API,
} from "../../../../Constant/api_constant";
import { ToastContainer } from "react-toastify";
import DeleteModel from "../../Models/DeleteModel/DeleteModel";
import {
  MyListingSkelaton,
  SC_CardSkelaton,
  TableSkelaton,
} from "../../../Common/Component/Sleleton/Skelaton";
import { PageContentManager } from "../../../Common/Component/DesignElement";
import { PaginationBar } from "../../../Common/Component/PaginationBar/PaginationBar";

const AllListing = ({
  AllList,
  editing,
  setEditing,
  ChangePage,
  setEditRecordData,
  editRecordData,
  isListingLoading,
  listingCurrent_page,
  setListingCurrentPage,
  listingLast_page,
  setListingLastPage,
}) => {
  const [modal, setModel] = useState(false);
  const [d_modal, setD_Model] = useState(false);
  const [formData, setFormData] = useState({});
  const [loader, setLoader] = useState({ deleteLoader: false });
  const [current_page, setCurrentPage] = useState(1);
  const [RentalUserAuthToken, setRentalUserAuthToken] = useState(
    localStorage.getItem("rentalUserAuthToken")
  );
  const { data, last_page, links } = AllList;
  const [tableData, setTableData] = useState(data);
  const ChangeLoader = (loaderName, type) => {
    setLoader({ ...loader, [loaderName]: type });
  };
  const toggle = () => {
    setModel(!modal);
  };
  const d_toggle = () => {
    setD_Model(!d_modal);
  };
  const ClickOnEditIcon = ({ item }) => {
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
    const RowData = {
      listing_id: item.id,
      listing_name: item?.name,
      address: item?.address,
      country: item?.country,
      state: item?.state,
      city: item?.city,
      area: item?.area,
      pincode: item?.pincode,
      phone_number: item?.phone_number,
      email: item?.email,
      website: item?.website,
      contact_person: item?.contact_person,
      description: item?.description,
      rates_per: item?.rates_per,
      rates: item?.rates,
      listing_category: item?.listing_category || [1, 2],
      token: RentalUserAuthToken,
    };
    console.log("TestData 25025", TestData);

    console.log("RowData 25025", RowData);
    console.log("item 25025", item);
    setFormData(item);
    setEditing("editListing");
    ChangePage({ pagenumber: 3, data: RowData });
    console.log(item);
  };
  const ClickOnDeleteIcon = ({ item }) => {
    setEditRecordData(item);
    d_toggle();
  };
  const OnDelete = () => {
    ChangeLoader("deleteLoader", true);
    console.log("TestData 25025", editRecordData);
    POST_FORMDATA_API({
      endPoint: `${API_ROOT_URL}/${DELETE_LIST_API}`,
      body: { listing_id: editRecordData.id, token: RentalUserAuthToken },
    })
      .then((responce) => {
        ToastSuccess(responce);
        setEditRecordData({});
        setEditing(false);
        d_toggle();
        ChangeLoader("deleteLoader", false);
      })
      .catch((error) => {
        ToastError(error);
        d_toggle();
        ChangeLoader("deleteLoader", false);
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
    setListingLastPage(+last_page);
  }, [AllList]);

  return (
    <>
      <ContentBox>
        <br />
        <br />

        <PageContentManager
          isLoading={isListingLoading}
          loader={<TableSkelaton />}
          contentArray={tableData}
          ContentBody={
            <ListingTable
              tableData={tableData}
              ClickOnEditIcon={ClickOnEditIcon}
              ClickOnDeleteIcon={ClickOnDeleteIcon}
              isListingLoading={isListingLoading}
            />
          }
          pagination={
            // <PaginationBar
            //   last_page={last_page}
            //   current_page={listingCurrent_page}
            //   setCurrentPage={setListingCurrentPage}
            // />
            <PaginationBar
              onChange={setListingCurrentPage}
              last_page={last_page}
              current_page={listingCurrent_page}
            />
          }
        />
      </ContentBox>
      <ListingUpdate
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
        loader={loader.deleteLoader}
      />
    </>
  );
};

export { AllListing };
