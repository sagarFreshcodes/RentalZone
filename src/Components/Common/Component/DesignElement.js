import { AiOutlineClose } from "react-icons/ai";
import { FS10, FS12 } from "../../../CommonElements/Font/FS";
import noDataFound from "../../../assets/images/Essential/noDataFound.webp";
export const ApiLoader = () => {
  return (
    <div class="spinner-border spinner-border-sm" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export const CloseButton = (props) => {
  return <AiOutlineClose {...props.attr} />;
};

export const PageContentManager = ({
  isLoading,
  loader,
  noRecordElement,
  contentArray,
  ContentBody,
  pagination,
}) => {
  return (
    <>
      {isLoading ? (
        loader
      ) : [undefined, 0].includes(contentArray?.length) ? (
        noRecordElement ? (
          noRecordElement
        ) : (
          <>
            <img className="noDataFoundImg" src={noDataFound} alt="" />
          </>
        )
      ) : (
        <>
          {ContentBody}
          <br />
          {pagination}
        </>
      )}
    </>
  );
};

export const NoRecords = ({ lable }) => {
  const title = lable ? lable : "No Records";
  return (
    <>
      <div className="NoRecords">
        <FS10>{title} </FS10>
      </div>
    </>
  );
};
