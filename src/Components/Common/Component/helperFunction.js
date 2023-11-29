import axios from "axios";
import { API_ROOT_URL } from "../../../Constant/api_constant";
import { toast } from "react-toastify";
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

export const GetApi = (endPoint) => {
  return new Promise((Response, Reject) => {
    axios
    .get(endPoint)
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


export const ToastError = (error) => { 
  error?.response?.data?.message.query || error?.response?.data?.message?.level
    ? toast.error(error?.message)
    : error?.response?.data?.message
    ? toast.error(error?.response?.data?.message)
    : error?.message
    ? toast.error(error?.message)
    : error
    ? toast.error(error)
    : toast.error("Server Error");
  return null;
};

export const ToastSuccess = (response) => {
  response?.data?.data?.message
    ? toast.success(response?.data?.message)
    : response?.data?.message
    ? toast.success(response?.data?.message)
    : response?.message
    ? toast.success(response?.message)
    : response?.message
    ? toast.success(response?.message)
    : toast.success("Api call successfuly");

  return null;
};




export const ToastWarning = (warning) => { 
  warning?.response?.data?.message.query || warning?.response?.data?.message?.level
    ? toast.warning(warning?.message)
    : warning?.response?.data?.message
    ? toast.warning(warning?.response?.data?.message)
    : warning?.message
    ? toast.warning(warning?.message)
    : warning
    ? toast.warning(warning)
    : toast.warning("Something going wrong");
  return null;
};