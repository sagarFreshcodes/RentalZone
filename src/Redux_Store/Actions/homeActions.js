// actions/exampleActions.js
import axios from "axios";
import { API_ROOT_URL, HOME_API } from "../../Constant/api_constant";
import { ActionType } from "../ReduxConstant"; 
export const HomePageApi = ({Location}) => {

  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: ActionType.ON_REQUEST });

      // Perform asynchronous operation (e.g., API call)
      // const response = await axios.get(`${API_ROOT_URL}``${HOME_API}`);
      const response = await axios.get(
        `http://laptops.rent/api/get-homepage?current_location=${Location}`
      );
      // Dispatch success action with received data
      dispatch({
        type: ActionType.ON_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      dispatch({
        type: ActionType.ON_FAILURE,
        payload: error.message,
      });
    }
  };
};
