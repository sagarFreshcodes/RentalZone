// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  COMMONPAGE_API,
  GET_SEARCH_DATA_API,
  HOME_API,
  MY_LIST_API,
  SEARCH_CITY_AREA_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
import {
  GetApi,
  POST_API,
  ToastError,
} from "../../Components/Common/Component/helperFunction";

export const UserActions = ({ status, profileData }) => {
  return async (dispatch) => {
    switch (status) {
      case "success":
        dispatch({
          type: ActionType.ON_SUCCESS_LOGIN_API,
          payload: profileData,
        });
        break;
      case "fail":
        dispatch({
          type: ActionType.ON_FAILURE_LOGIN_API,
          payload: profileData,
        });
        break;
      default:
        break;
    }
  };
};

export const SetUserProfile = ({ profileData }) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_CHANGE_USER_PROFILE_API,
      payload: profileData,
    });
  };
};

export const SetToken = ({ Token }) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_CHANGE_TOKEN_API,
      payload: Token,
    });
  };
};

export const MyListApi = ({ Location }) => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionType.ON_FAILURE_MY_LIST_API });

      const response = await GetApi(
        `${API_ROOT_URL}/${MY_LIST_API}`
        // `${API_ROOT_URL}/${GET_HOMEPAGE_API}?category_slug=computer-rental-mumbai&category_id=2&page=1&user_local_city=Navimumbai&user_local_city_slug=navimumbai&user_local_area=Best Staff Colony&user_local_area_slug=best-staff-colony`
      );
      dispatch({
        type: ActionType.ON_SUCCESS_MY_LIST_API,
        payload: response.data,
      });
    } catch (error) {
      ToastError(error);
      dispatch({
        type: ActionType.ON_REQUEST_MY_LIST_API,
        payload: error.message,
      });
    }
  };
};
// export const LocationActions = ({ serchKeyword }) => {
//   return async (dispatch) => {
//     try {
//       // Dispatch an action to signify the start of the request
//       dispatch({ type: ActionType.ON_REQUEST_LOCATION_API });

//       const response = await GetApi(
//         `${API_ROOT_URL}/${SEARCH_CITY_AREA_API}?keyword=${serchKeyword}`
//       );
//       dispatch({
//         type: ActionType.ON_SUCCESS_LOCATION_API,
//         payload: response?.data?.data,
//       });
//     } catch (error) {
//       // Dispatch failure action if there's an error
//       ToastError(error);
//       dispatch({
//         type: ActionType.ON_FAILURE_LOCATION_API,
//         payload: error?.message,
//       });
//     }
//   };
// };

// export const SetCategory = ({ categoryData }) => {
//   return async (dispatch) => {
//     dispatch({
//       type: ActionType.ON_CATEGORY_SET,
//       payload: categoryData,
//     });
//   };
// };

// export const SelectCategory = ({ categoryDetails }) => {
//   return async (dispatch) => {
//     dispatch({
//       type: ActionType.ON_CATEGORY_SELECT,
//       payload: categoryDetails,
//     });
//   };
// };

// export const CategoryActions = ({ serchKeyword, location }) => {
//   return async (dispatch) => {
//     try {
//       // Dispatch an action to signify the start of the request
//       dispatch({ type: ActionType.ON_REQUEST_CATEGORY_API });
//       const response = await GetApi(
//         `${API_ROOT_URL}/${GET_SEARCH_DATA_API}?keyword=${serchKeyword}&current_location=${location}`
//       );
//       dispatch({
//         type: ActionType.ON_SUCCESS_CATEGORY_API,
//         payload: response?.data?.data,
//       });
//     } catch (error) {
//       // Dispatch failure action if there's an error
//       ToastError(error);
//       dispatch({
//         type: ActionType.ON_FAILURE_CATEGORY_API,
//         payload: error?.message,
//       });
//     }
//   };
// };
