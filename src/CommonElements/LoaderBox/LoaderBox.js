import { ApiGeneralLoader } from "../../Components/Common/Component/helperFunction";

const LoaderBox = (props) => {
  const { isLoading } = props;
  // ApiGeneralLoader
  return (
    <div className="LoaderBox" {...props.attr}>
      {isLoading ? <ApiGeneralLoader /> : props.children}
    </div>
  );
};

export { LoaderBox };
