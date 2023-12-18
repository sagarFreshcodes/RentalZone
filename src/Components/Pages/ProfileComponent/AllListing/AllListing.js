import React from "react";
import ListingTable from "./ListingTable";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";

const AllListing = ({ AllList }) => {
  return (
    <>
      <ContentBox>
        <br />
        <br />
        <ListingTable AllList={AllList} />
      </ContentBox>
    </>
  );
};

export { AllListing };
