// actions/exampleActions.js
import axios from "axios";
import {
  API_ROOT_URL,
  COMMONPAGE_API,
  HOME_API,
} from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant";
export const GeneralActions = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST_COMMON_API });
      // Perform asynchronous operation (e.g., API call)
      // const response = await axios.get(`${API_ROOT_URL}``${COMMONPAGE_API}`);
      const response = await axios.get(
        `https://mail.laptops.rent/api/common-page`
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
  console.log("redux SetLocation" );
  return async (dispatch) => {
    dispatch({
      type: ActionType.ON_LOCATION_SET,
      payload: locationData,
    });
  };
};
