// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  COMMONPAGE_API,
  GET_SEARCH_DATA_API,
  HOME_API,
  SEARCH_CITY_AREA_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
import { ToastError } from "../../Components/Common/Component/helperFunction";
export const GeneralActions = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_COMMON_API });
      const response = await axios.get(`${API_ROOT_URL}/${COMMONPAGE_API}`);
      dispatch({
        type: ActionType.ON_SUCCESS_COMMON_API,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      dispatch({
        type: ActionType.ON_FAILURE_COMMON_API,
        payload: error.message,
      });
    }
  };
};

export const SetLocation = ({ locationData }) => {
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_LOCATION_SET,
      payload: locationData,
    });
  };
};

export const LocationActions = ({ serchKeyword }) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_LOCATION_API });
      const response = await axios.get(
        `${API_ROOT_URL}/${SEARCH_CITY_AREA_API}?keyword=${serchKeyword}`
      );
      dispatch({
        type: ActionType.ON_SUCCESS_LOCATION_API,
        payload: response?.data?.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      ToastError(error);
      dispatch({
        type: ActionType.ON_FAILURE_LOCATION_API,
        payload: error?.message,
      });
    }
  };
};

export const SetCategory = ({ categoryData }) => {
  console.log("redux serchKeyword", categoryData);
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_CATEGORY_SET,
      payload: categoryData,
    });
  };
};

export const SelectCategory = ({ categoryDetails }) => { 
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_CATEGORY_SELECT,
      payload: categoryDetails,
    });
  };
};

export const CategoryActions = ({ serchKeyword, location }) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_CATEGORY_API });
      // Perform asynchronous operation (e.g., API call)
      // const response = await axios.get(`${API_ROOT_URL}``${COMMONPAGE_API}`);

      const response = await axios.get(
        `${API_ROOT_URL}/${GET_SEARCH_DATA_API}?keyword=${serchKeyword}&current_location=${location}`
      );

      dispatch({
        type: ActionType.ON_SUCCESS_CATEGORY_API,
        payload: response?.data?.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      ToastError(error);
      dispatch({
        type: ActionType.ON_FAILURE_CATEGORY_API,
        payload: error?.message,
      });
    }
  };
};
