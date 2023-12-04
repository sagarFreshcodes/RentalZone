import { AiOutlineClose } from "react-icons/ai";
export const ApiLoader = () => {
  return (
    <div class="spinner-border spinner-border-sm" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};


export const CloseButton = (props) => {
  return (
    <AiOutlineClose  {...props.attr} />
  );
};
