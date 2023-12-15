import axios from "axios";
import { API_ROOT_URL, LOG_OUT } from "../../../Constant/api_constant";
import { toast } from "react-toastify";
import { BASE_ROUTE } from "../../../Route/RouthPath";
import { FS3, FS4, FS6 } from "../../../CommonElements/Font/FS";
import { Link } from "react-router-dom";
import { SelectCategory } from "../../../Redux_Store/Actions/generalActions";
import Chat from "../../../assets/images/Essential/Chat.png";
import Message from "../../../assets/images/Essential/Message.png";
export function BreadCrum(array) {
  if (!Array.isArray(array)) {
    return "Please provide an array as input.";
  } else {
    if (array[0]?.title) {
      return (
        // <FS4 attr={{ className: "lh-1" }}>
        <div className="BreadCreumBox">
          {array?.map((i, index) => {
            return (
              <>
                {i?.link == `page_title` ? (
                  <div className={`BreadCreumTitle BreadCreumLable${index}`}>
                    <FS3 attr={{ className: "BoldText" }}>
                      {" "}
                      {i.title} {` >> `}{" "}
                    </FS3>
                    &nbsp;
                  </div>
                ) : i?.link == "page_info" ? (
                  <>
                    <div className={`BreadCreumTitle BreadCreumLable${index}`}>
                      <FS3 attr={{ className: "FW3" }}>
                        {" "}
                        {i.title} {array?.length == index + 1 ? " " : ` > `}{" "}
                      </FS3>
                      &nbsp;
                    </div>
                  </>
                ) : (
                  <>
                    <Link to={i?.link}>
                      <div
                        className={`BreadCreumTitle BreadCreumLable${index}`}
                      >
                        <FS3>
                          {" "}
                          {i.title}{" "}
                          {array?.length == index + 1
                            ? " "
                            : array[index + 1]?.link == "page_info"
                            ? ` - `
                            : ` > `}{" "}
                        </FS3>
                        &nbsp;
                      </div>
                    </Link>
                  </>
                )}
              </>
            );
          })}
        </div>
        // </FS4>
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
  const HEADERS = {
    headers: {
      // "Content-Type": "application/json",
      // "Accept": "application/json",
      // 'Authorization': "AuthStr================="
      // Include any other required headers
    },
  };
  const response = await axios.post(endPoint, HEADERS);
  return response;
  // return Promise(async (RESPONCE, REJECT) => {
  //   try {
  //     const response = await axios.get(endPoint, HEADERS);
  //     RESPONCE(response);
  //   } catch (error) {
  //     REJECT(error);
  //   }
  // });
};

export const POST_API = ({ endPoint, body }) => {
  const HEADERS = {
    headers: {
      // "Content-Type": "application/json",
      // "Accept": "application/json",
      // 'Authorization': "AuthStr================="
      // Include any other required headers
    },
  };
  return new Promise((Response, Reject) => {
    axios
      .post(endPoint, body, HEADERS)
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

export const SearchDirect = ({
  navigate,
  GeneralState,
  searchData,
  dispatch,
}) => {
  const CurrentLocation = GeneralState?.location?.city_slug;
  const CurrentCategory = GeneralState?.category;

  if (searchData) {
    if (searchData?.type == "category") {
      dispatch(
        SelectCategory({
          categoryDetails: {
            category_id: searchData?.category_id,
            category_slug: searchData?.category_slug,
          },
        })
      );
      return navigate(
        `${BASE_ROUTE}/${searchData?.category_slug}-${CurrentLocation}/${searchData?.category_id}`
      );
    } else if (searchData?.type == "listing") {
      return navigate(`${BASE_ROUTE}/${searchData?.listing_slug}`);
    }
  } else {
    if (CurrentCategory?.listing_slug) {
      return navigate(`${BASE_ROUTE}/${CurrentCategory?.listing_slug}`);
    } else {
      return navigate(
        `${BASE_ROUTE}/${CurrentCategory?.category_slug}-${CurrentLocation}/${CurrentCategory?.category_id}`
      );
    }
  }
};

export const SearchLocationDirect = ({
  navigate,
  GeneralState,
  dispatch,
  locationData,
}) => {
  const CurrentLocation = GeneralState?.location?.city_slug;
  const CurrentCategory = GeneralState?.category;
  const { city_slug, area_slug } = locationData;
  // if (locationData) {
  if (CurrentCategory?.type == "category") {
    dispatch(
      SelectCategory({
        categoryDetails: {
          category_id: CurrentCategory?.category_id,
          category_slug: CurrentCategory?.category_slug,
        },
      })
    );
    return navigate(
      `${BASE_ROUTE}/${CurrentCategory?.category_slug}-${
        area_slug || city_slug
      }/${CurrentCategory?.category_id}`
    );
  } else if (CurrentCategory?.type == "listing") {
    return navigate(`${BASE_ROUTE}/${CurrentCategory?.listing_slug}`);
  }
};

export const WaitFor = ({ time, functionality }) => {
  const timeout = setTimeout(() => {
    functionality();
  }, time);
  return () => clearTimeout(timeout);
};

export const ScrollUp = () => {
  window.scrollTo(0, 0);
};

export function convertStringToIntegerOrString(inputString) {
  // Check if the input string contains only numbers
  if (/^\d+$/.test(inputString)) {
    return parseInt(inputString, 10); // Convert the string to an integer
  } else {
    return inputString; // Return the input string as it is
  }
}

export function generateAscendingNumbers(n) {
  try {
    if (n <= 0) {
      return "Please provide a positive number greater than zero.";
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i);
    }

    return result;
  } catch (error) {
    return [1];
  }
}

export function UpdateSEO({
  page_title,
  meta_title,
  meta_description,
  meta_keywords,
}) {
  // Update Page Title
  const defaultPageTitle = "Computer On Rent | RentalZone.in";
  const defaultMetaTitle =
    "Computer On Rent, Laptop On Rent Near Me in Mumbai | RentalZone.in";
  const defaultMetaDescription =
    "RentalZone.in : Providing Laptop on Rent, Computer on Rent, Server on Rent, Car On Rent, Ac on Rent-Hire in Mumbai at low price. Find Top Rental Company online at Rentalzone.in";
  const defaultMetaKeywords =
    "Find Computer On Rent, Laptop On Rent, Server On Rent, MacBook On Rent, Printer On Rent, UPS On Rent, iPad On Rent, Display On Rent near me in Mumbai On RentalZone.in";

  document.title = page_title || defaultPageTitle;

  // Update Meta Title
  var metaTitleTag = document.querySelector('meta[name="title"]');
  if (metaTitleTag) {
    metaTitleTag.setAttribute("content", meta_title || defaultMetaTitle);
  } else {
    var newMetaTitleTag = document.createElement("meta");
    newMetaTitleTag.setAttribute("name", "title");
    newMetaTitleTag.setAttribute("content", meta_title || defaultMetaTitle);
    document.head.appendChild(newMetaTitleTag);
  }

  // Update Meta Description
  var metaDescTag = document.querySelector('meta[name="description"]');
  if (metaDescTag) {
    metaDescTag.setAttribute(
      "content",
      meta_description || defaultMetaDescription
    );
  } else {
    var newMetaDescTag = document.createElement("meta");
    newMetaDescTag.setAttribute("name", "description");
    newMetaDescTag.setAttribute(
      "content",
      meta_description || defaultMetaDescription
    );
    document.head.appendChild(newMetaDescTag);
  }

  // Update Meta Keywords
  var metaKeywordsTag = document.querySelector('meta[name="keywords"]');
  if (metaKeywordsTag) {
    metaKeywordsTag.setAttribute(
      "content",
      meta_keywords || defaultMetaKeywords
    );
  } else {
    var newMetaKeywordsTag = document.createElement("meta");
    newMetaKeywordsTag.setAttribute("name", "keywords");
    newMetaKeywordsTag.setAttribute(
      "content",
      meta_keywords || defaultMetaKeywords
    );
    document.head.appendChild(newMetaKeywordsTag);
  }
}

export const HanggingBar = () => {
  return (
    <>
      <div className="HanggingBar">
        <div className="ChatAction">
          <FS6 attr={{ className: "text-light ChatHover" }}>Chat...</FS6>
          <img src={Chat} alt="" />
        </div>
        <div className="MessagAction">
          <FS6 attr={{ className: "text-light MessagHover" }}>Message...</FS6>
          <img src={Message} alt="" />
        </div>
      </div>
    </>
  );
};

export const Log_Out = ({ Redirect }) => {
  const bodyFormData = new FormData();
  const UserToken = localStorage.getItem("rentalUserAuthToken");
  bodyFormData.append("token", UserToken);
  POST_API({
    endPoint: `${API_ROOT_URL}/${LOG_OUT}`,
    body: bodyFormData,
  })
    .then((response) => {
      localStorage.removeItem("profileURL");
      localStorage.removeItem("token");
      localStorage.removeItem("auth0_profile");
      localStorage.removeItem("Name");
      localStorage.removeItem("rentalUserAuthToken");
      localStorage.setItem("authenticated", false);
      ToastSuccess(response);
      Redirect();
    })
    .catch((error) => {
      ToastError(error);
    });
};
