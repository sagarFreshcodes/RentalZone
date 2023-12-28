import {
  API_ROOT_URL,
  STORE_QUOTES_API,
} from "../../../../Constant/api_constant";
import {
  POST_FORMDATA_API,
  ToastError,
  ToastSuccess,
} from "../../../Common/Component/helperFunction";

export const Submit_quotes = ({ submitData, setLoading, toggle }) => {
  POST_FORMDATA_API({
    endPoint: `${API_ROOT_URL}/${STORE_QUOTES_API}`,
    body: submitData,
  })
    .then((response) => {
      ToastSuccess(response);
      setLoading(false);
      toggle();
    })
    .catch((error) => {
      ToastError(error);
      setLoading(false);
    });
};
