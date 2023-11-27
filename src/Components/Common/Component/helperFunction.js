import axios from "axios";
import { API_ROOT_URL } from "../../../Constant/api_constant";

export function BreadCum(array) {
  if (!Array.isArray(array)) {
    return "Please provide an array as input.";
  }

  return array.join(" > ");
}

export const GET_API = (endPoint) => {
  return new Promise((Response, Reject) => {
    axios
    .get(`http://laptops.rent/api/get-homepage`)
      // .get(`${API_ROOT_URL}${endPoint}`)
      .then((res) => {
        Response(res);
      })
      .catch((error) => {
        Reject(error);
      });
  });
};


export const POST_API = ({ endPoint, body }) => {
  return new Promise((Response, Reject) => {
    axios
      .get(endPoint,body)
      .then((res) => {
        Response(res);
      })
      .catch((error) => {
        Reject(error);
      });
  });
};
