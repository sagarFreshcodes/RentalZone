// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  GET_LIST_DETAILS_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
import {
  GetApi,
  ToastError,
} from "../../Components/Common/Component/helperFunction";

export const ListDetailsApi = ({ slug, listing_id }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.ON_FAILURE_LIST_DETAILS_API });
      const response = await GetApi(
        `${API_ROOT_URL}/${GET_LIST_DETAILS_API}?slug=${slug}&listing_id=${listing_id}`
      );

      // const response = await axios.get(
      //   `${API_ROOT_URL}/${GET_LIST_DETAILS_API}?slug=${slug}&listing_id=${listing_id}`
      // );
      dispatch({
        type: ActionType.ON_SUCCESS_LIST_DETAILS_API,
        payload: response?.data
        ,
      });
    } catch (error) { 
      ToastError(error);
      dispatch({
        type: ActionType.ON_REQUEST_LIST_DETAILS_API,
        payload: error.message,
      });
    }
  };
};
