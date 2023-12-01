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
    name: "Computer Rental",
    type: "category",
    category_slug: "computer-rental",
    category_id: 2,
    subdomain_slug: "computer",
  },
  selectedCategory: { category_id: 2, category_slug: "computer-rental" },
  location: {
    name: "Mumbai,Maharashtra",
    original_city: "Mumbai",
    city_slug: "mumbai",
    state_slug: "maharashtra",
  },
};

const GeneralReducer = (state = initialState, action) => {
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
      return {
        ...state,
        isCategoryLoading: false,
        categoryList: action.payload,
      };
    case ActionType.ON_FAILURE_CATEGORY_API:
      return {
        ...state,
        isCategoryLoading: false,
        error: action.payload,
      };
    case ActionType.ON_CATEGORY_SELECT:
      return {
        ...state,
        selectedCategory: action.payload,
      };
    default:
      return state;
  }
};

export default GeneralReducer;
