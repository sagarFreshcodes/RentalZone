import { ActionType } from "../ReduxConstant"; 
const initialState = { 
  data: [],
  isLoading: false,
  error: null,
};

const ListDetailsReducer = (state = initialState, action) => { 
  switch (action.type) {
    
    case ActionType.ON_FAILURE_LIST_DETAILS_API: 
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case ActionType.ON_SUCCESS_LIST_DETAILS_API: 
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case ActionType.ON_REQUEST_LIST_DETAILS_API: 
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ListDetailsReducer;
