// reducers/exampleReducer.js
import { CATEGORY_DATA, LOCATION_DATA } from "../../Constant/general_constant";
import { ActionType } from "../ReduxConstant";

const initialState = {
  // Define your initial state here
  profileData: [],
  isLoading: false,
  error: null,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    // Header
    case ActionType.ON_FAILURE_LOGIN_API:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case ActionType.ON_SUCCESS_LOGIN_API:
      return {
        ...state,
        isLoading: false,
        profileData: action.payload,
      };
    case ActionType.ON_CHANGE_USER_PROFILE_API:
      return {
        ...state,
        isLoading: false,
        profileData: {
          ...state.profileData,
          user_details: {
            ...state.profileData.user_details,
            ...action.payload,
          },
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
