// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  GET_BUSINESS_LIST_API,
  GET_HOMEPAGE_API,
  HOME_API,
  PRODUCT_LIST_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
import {
  GetApi,
  POST_FORMDATA_API,
  ToastError,
} from "../../Components/Common/Component/helperFunction";

export const RentalUserAuthToken = localStorage.getItem("rentalUserAuthToken");
export const HomePageApi = ({ Location }) => {
  return async (dispatch) => {
    dispatch({ type: ActionType.ON_REQUEST });
    try {
      const response = await GetApi(
        `${API_ROOT_URL}/${GET_HOMEPAGE_API}?current_location=${Location}`
      );

      const PRODUCT_LIST = await POST_FORMDATA_API({
        endPoint: `${API_ROOT_URL}/${PRODUCT_LIST_API}`,
        body: { token: RentalUserAuthToken },
      });
      dispatch({
        type: ActionType.ON_SUCCESS,
        payload: { ...response.data, PRODUCT_LIST: PRODUCT_LIST },
      });
    } catch (error) {
      ToastError(error);
      dispatch({
        type: ActionType.ON_FAILURE,
        payload: error.message,
      });
    }
  };
};

// export const BusinessListApi = ({category_slug,category_id,page,location}) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: ActionType.ON_REQUEST_SERVICE_LIST_API });
//       const response = await axios.get(
//         `${API_ROOT_URL}/${GET_BUSINESS_LIST_API}?category_slug=${category_slug}&category_id=${category_id}&current_location=${location}&page=${page}`
//       );
//       dispatch({
//         type: ActionType.ON_SUCCESS_SERVICE_LIST_API,
//         payload: response.data,
//       });
//     } catch (error) {
//       // Dispatch failure action if there's an error
//       ToastError(error);
//       dispatch({
//         type: ActionType.ON_FAILURE_SERVICE_LIST_API,
//         payload: error.message,
//       });
//     }
//   };
// };
