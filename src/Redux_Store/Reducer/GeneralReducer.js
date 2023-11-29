// reducers/exampleReducer.js
import { ActionType } from "../ReduxConstant";

const initialState = {
    // Define your initial state here
    data: [],
    isLoading: false, 
    error: null,
    location:"surat",
  };
  
  const GeneralReducer = (state = initialState, action) => {
    console.log("redux SetLocation" );
    switch (action.type) {
      case ActionType.ON_LOCATION_SET:
        console.log("redux SetLocation" );
        return {
          ...state,
          isLoading: true,
          error: null,
          location:action.payload
        };
      case ActionType.ON_REQUEST_COMMON_API:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case ActionType.ON_SUCCESS_COMMON_API:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case ActionType.ON_FAILURE_COMMON_API:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default GeneralReducer;
  