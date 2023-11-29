// reducers/exampleReducer.js
import { ActionType } from "../ReduxConstant";

const initialState = {
  // Define your initial state here
  data: [],
  locationsList: [],
  categoryList: [],
  isLoading: false,
  isLocationLoading: false,
  isCategoryLoading: false,
  error: null,
  category: {
    name: "Computer Point",
    type: "listing",
    listing_slug: "computer-point",
    subdomain_slug: "laptop",
  },
  location: {
    name: "Mumbai,Maharashtra",
    original_city: "Mumbai",
    city_slug: "mumbai",
    state_slug: "maharashtra",
  },
};

const GeneralReducer = (state = initialState, action) => {
  console.log("redux SetLocation");
  switch (action.type) {
    // Header
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

    // Location
    case ActionType.ON_LOCATION_SET:
      return {
        ...state, 
        location: action.payload,
      };
    case ActionType.ON_REQUEST_LOCATION_API:
      return {
        ...state,
        isLocationLoading: true,
        error: null,
      };
    case ActionType.ON_SUCCESS_LOCATION_API:
      return {
        ...state,
        isLocationLoading: false,
        locationsList: action.payload,
      };
    case ActionType.ON_FAILURE_LOCATION_API:
      return {
        ...state,
        isLocationLoading: false,
        error: action.payload,
      };

    // Category

    case ActionType.ON_CATEGORY_SET: 
      return {
        ...state, 
        category: action.payload,
      };
    case ActionType.ON_REQUEST_CATEGORY_API: 
      return {
        ...state,
        isCategoryLoading: true,
        error: null,
      };
    case ActionType.ON_SUCCESS_CATEGORY_API:
      console.log("redux test LocationActions22");
      return {
        ...state,
        isCategoryLoading: false,
        categoryList: action.payload,
      };
    case ActionType.ON_FAILURE_CATEGORY_API:
      console.log("redux test LocationActions33");
      return {
        ...state,
        isCategoryLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GeneralReducer;
