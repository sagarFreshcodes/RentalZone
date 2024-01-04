// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  COMMONPAGE_API,
  FAQ_API,
  GET_PRODUCT_API,
  GET_SEARCH_DATA_API,
  HOME_API,
  SEARCH_CITY_AREA_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
import {
  GetApi,
  ToastError,
} from "../../Components/Common/Component/helperFunction";
export const GeneralActions = ({ current_location }) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_COMMON_API });
      const response = await GetApi(
        `${API_ROOT_URL}/${COMMONPAGE_API}?current_location=mumbai`
      );
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

      const response = await GetApi(
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
      const response = await GetApi(
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

export const FAQActions = () => {
  console.log("test2545FAQActions");
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_FAQ_API });
      const response = await GetApi(`${API_ROOT_URL}/${FAQ_API}`);
      dispatch({
        type: ActionType.ON_SUCCESS_FAQ_API,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      dispatch({
        type: ActionType.ON_FAILURE_FAQ_API,
        payload: error.message,
      });
    }
  };
};

export const ProductListActions = ({ category_id, local_city, page }) => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_PRODUCT_LIST });
      // {{laptop_url}}api/get-product?category_id=8&user_local_city=mumbai
      const response = await GetApi(
        `${API_ROOT_URL}/${GET_PRODUCT_API}?category_id=${category_id}&user_local_city=${local_city}&page=${page}`
      );
      dispatch({
        type: ActionType.ON_SUCCESS_PRODUCT_LIST,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      dispatch({
        type: ActionType.ON_FAILURE_PRODUCT_LIST,
        payload: error.message,
      });
    }
  };
};
