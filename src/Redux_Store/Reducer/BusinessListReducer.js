import { ActionType } from "../ReduxConstant";

// reducers/exampleReducer.js
const initialState = {
    // Define your initial state here
    data: [],
    isLoading: false,
    service_data: [],
    isServiceLoading: false,
    error: null,
  };
  
  const BusinessReducer = (state = initialState, action) => {
    console.log("redux SetLocation" );
    switch (action.type) { 
        case ActionType.ON_REQUEST_SERVICE_LIST_API:
          return {
            ...state,
            isServiceLoading: true,
            error: null,
          };
        case ActionType.ON_SUCCESS_SERVICE_LIST_API:
          return {
            ...state,
            isServiceLoading: false,
            service_data: action.payload,
          };
        case ActionType.ON_FAILURE_SERVICE_LIST_API:
          return {
            ...state,
            isServiceLoading: false,
            error: action.payload,
          };
      default:
        return state;
    }
  };
  
  export default BusinessReducer;
  