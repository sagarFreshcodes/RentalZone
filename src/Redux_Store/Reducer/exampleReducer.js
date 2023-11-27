// reducers/exampleReducer.js
const initialState = {
    // Define your initial state here
    data: [],
    isLoading: false,
    error: null,
  };
  
  const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_EXAMPLE_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_EXAMPLE_SUCCESS':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case 'FETCH_EXAMPLE_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default exampleReducer;
  