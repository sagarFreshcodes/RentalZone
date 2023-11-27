// actions/exampleActions.js
import axios from 'axios';

export const fetchExampleData = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to signify the start of the request
      dispatch({ type: 'FETCH_EXAMPLE_REQUEST' });

      // Perform asynchronous operation (e.g., API call)
      const response = await axios.get('https://api.example.com/data');

      // Dispatch success action with received data
      dispatch({
        type: 'FETCH_EXAMPLE_SUCCESS',
        payload: response.data,
      });
    } catch (error) {
      // Dispatch failure action if there's an error
      dispatch({
        type: 'FETCH_EXAMPLE_FAILURE',
        payload: error.message,
      });
    }
  };
};
