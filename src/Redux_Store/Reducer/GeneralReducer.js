// reducers/exampleReducer.js
import { CATEGORY_DATA, LOCATION_DATA } from "../../Constant/general_constant";
import { ActionType } from "../ReduxConstant";

const initialState = {
  // Define your initial state here
  data: [],
  locationsList: [],
  ProductListData: {},
  categoryList: [],
  isLoading: false,
  isLocationLoading: false,
  isCategoryLoading: false,
  isProductListingLoading: false,
  isFAQLoading: false,
  error: null,
  category: CATEGORY_DATA,
  selectedCategory: { category_id: 2, category_slug: "computer-rental" },
  location: LOCATION_DATA,
  faqData: {},
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

    case ActionType.ON_REQUEST_FAQ_API:
      return {
        ...state,
        isFAQLoading: true,
        error: null,
      };
    case ActionType.ON_SUCCESS_FAQ_API:
      return {
        ...state,
        isFAQLoading: false,
        faqData: action.payload,
      };
    case ActionType.ON_FAILURE_FAQ_API:
      return {
        ...state,
        isFAQLoading: false,
        error: action.payload,
      };
    case ActionType.ON_REQUEST_PRODUCT_LIST:
      return {
        ...state,
        isProductListingLoading: true,
        error: action.payload,
      };

    case ActionType.ON_SUCCESS_PRODUCT_LIST:
      return {
        ...state,
        isProductListingLoading: false,
        ProductListData: action.payload,
      };
    case ActionType.ON_FAILURE_PRODUCT_LIST:
      return {
        ...state,
        isProductListingLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default GeneralReducer;
