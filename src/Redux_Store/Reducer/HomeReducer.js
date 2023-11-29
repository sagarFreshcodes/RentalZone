import { ActionType } from "../ReduxConstant";

// reducers/exampleReducer.js
const initialState = {
    // Define your initial state here
    data: [],
    isLoading: false,
    error: null,
  };
  
  const HomeReducer = (state = initialState, action) => {
    console.log("redux SetLocation" );
    switch (action.type) {
      case ActionType.ON_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case ActionType.ON_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case ActionType.ON_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default HomeReducer;
  