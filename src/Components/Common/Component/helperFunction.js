import axios from "axios";
import { API_ROOT_URL } from "../../../Constant/api_constant";
import { toast } from "react-toastify";
import { BASE_ROUTE } from "../../../Route/RouthPath";
import { FS4 } from "../../../CommonElements/Font/FS";
import { Link } from "react-router-dom";
export function BreadCrum(array) {
  console.log("testb1");
  if (!Array.isArray(array)) {
    return "Please provide an array as input.";
  } else {
    if (array[0]?.title) {
      return (
        <FS4 attr={{ className: "lh-1" }}>
          <div className="BreadCreumBox">
            {array?.map((i, index) => {
              return (
                <>
                  <Link to={i?.link}>
                    <div className="BreadCreumTitle">
                      {i.title} {array?.length == index + 1 ? " " : ` > `}{" "}
                      &nbsp;
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </FS4>
      );
    } else {
      return array.join(" > ");
    }
  }
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

export const GetApi = async (endPoint) => {
  const response = await axios.get(endPoint);
  return response;
};

export const POST_API = ({ endPoint, body }) => {
  return new Promise((Response, Reject) => {
    axios
      .get(endPoint, body)
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
  warning?.response?.data?.message.query ||
  warning?.response?.data?.message?.level
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

export const slugConvertor = (string) => {
  return `${string}`.toLowerCase().split(" ").join("-");
};

export const SearchDirect = ({ navigate, GeneralState,searchData }) => {

  const CurrentLocation = GeneralState?.location?.city_slug;
  const CurrentCategory = GeneralState?.category;
  if (searchData?.type == "category") {
    console.log("searchData", searchData);
    return navigate(
      `${BASE_ROUTE}/${searchData?.category_slug}-${CurrentLocation}/${searchData?.category_id}`
    );
  } else if (searchData?.type == "listing") {
    console.log("searchData", searchData);
    return navigate(`${BASE_ROUTE}/${searchData?.listing_slug}`);
  }
};

export const WaitFor = ({ time, functionality }) => {
  const timeout = setTimeout(() => {
    functionality();
  }, time);
  return () => clearTimeout(timeout);
};
