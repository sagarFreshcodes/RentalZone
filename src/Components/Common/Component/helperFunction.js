import axios from "axios";
import {
  API_ROOT_URL,
  GET_CATEGORY_DROPDOWN_API,
  LOG_OUT,
} from "../../../Constant/api_constant";
import { toast } from "react-toastify";
import { BASE_ROUTE } from "../../../Route/RouthPath";
import { FS3, FS4, FS6 } from "../../../CommonElements/Font/FS";
import { Link } from "react-router-dom";
import { SelectCategory } from "../../../Redux_Store/Actions/generalActions";
import Chat from "../../../assets/images/Essential/Chat.png";
import Message from "../../../assets/images/Essential/Message.png";
import * as ReactIcons from "react-icons/ai";
import { RentalUserAuthToken } from "../../../Constant/general_constant";
import { useEffect, useState } from "react";
import ChatModel from "../../Pages/Models/Chat/Chat";
import GetQuotesModel from "../../Pages/Models/GetQuotes/GetQuotes";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { Spinner } from "../../../AbstractElements";
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

export const CheckValidValue = (value, defaultValue, notCheck) => {
  if (["null", null, undefined, "undefined", ""].includes(value)) {
    return defaultValue ? defaultValue : false;
  } else {
    return notCheck ? value : true;
  }
};

export const CheckValidImage = (value, defaultValue) => {
  if (["null", null, undefined, "undefined", ""].includes(value)) {
    return defaultValue ? defaultValue : false;
  } else {
    if (value.includes("/")) {
      return value;
    } else {
      return defaultValue;
    }
  }
};

export const ValidParamsForProductDetail = (
  location,
  defaultValue,
  notCheck
) => {
  if (
    ["null", null, undefined, "undefined", "", "NaN"].includes(
      +location.search.split("?")[1].split("=")[1]
    )
  ) {
    return defaultValue ? defaultValue : "invalid";
  } else {
    const validParams = +location.search.split("?")[1].split("=")[1];
    return validParams;
  }
};
export const ApiGeneralLoader = ({ loaderName }) => {
  return (
    <div className="loader-box ">
      <Spinner
        attrSpinner={{ className: loaderName || `loader-17 spinnerElement` }}
      />
    </div>
  );
};
export const GET_API = (endPoint) => {
  const HEADERS = {
    headers: {
      "Content-Type": "application/xml",
      // "Accept": "application/json",
      // 'Authorization': "AuthStr================="
      // Include any other required headers
    },
  };
  return new Promise((Response, Reject) => {
    axios
      .get(endPoint, HEADERS)
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
      "Content-Type": "application/json",
      // "Accept": "application/json",
      // 'Authorization': "AuthStr================="
      // Include any other required headers
    },
  };
  const response = await axios.post(endPoint, HEADERS);
  return response;
};

export const PostApiForRedux = async (endPoint, body) => {
  const HEADERS = {
    headers: {
      // "Content-Type": "application/json",
      // "Accept": "application/json",
      // 'Authorization': "AuthStr================="
      // Include any other required headers
    },
  };
  const bodyFormData = new FormData();
  Object.keys(body).map((i) => {
    bodyFormData.append(i, body[i]);
  });
  const response = await axios.post(endPoint, bodyFormData);
  return response;
};

export const POST_API = ({ endPoint, body }) => {
  const HEADERS = {
    headers: {
      // "Content-Type": "application/json",
      // "Accept": "application/json",
      // Authorization: RentalUserAuthToken,
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

export const POST_FORMDATA_API = ({ endPoint, body }) => {
  const bodyFormData = new FormData();
  Object.keys(body).map((i) => {
    bodyFormData.append(i, body[i]);
  });
  const HEADERS = {
    headers: {
      // "Content-Type": "application/json",
      // "Accept": "application/json",
      // Authorization: RentalUserAuthToken,
      // Include any other required headers
    },
  };
  return new Promise((Response, Reject) => {
    axios
      .post(endPoint, bodyFormData, HEADERS)
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
export const AddJsonLdScriptForSchema = ({ scriptData, scriptType }) => {
  const defaultScriptData = JSON.stringify({
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "RentalZone",
    url: "https://rentalzone-1d306.web.app/home",
    potentialAction: {
      "@type": "SearchAction",
      target: "{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  });
  const defaultScriptType = "application/ld+json";

  const script = document.createElement("script");
  script.type = scriptType || defaultScriptType;
  script.innerHTML = scriptData || defaultScriptData;

  document.head.appendChild(script);

  return () => {
    // Clean up the script when the component unmounts
    document.head.removeChild(script);
  };
};
export function AddMetaTagsToHead({
  page_title,
  meta_title,
  meta_description,
  meta_keywords,
}) {
  const metaTags = [
    {
      property: "og:description",
      content: meta_description,
    },
    {
      property: "og:image:width",
      content: "200",
    },
    {
      property: "og:image:height",
      content: "200",
    },
    {
      property: "og:title",
      content: meta_title,
    },
    {
      property: "og:url",
      content: "https://flatswala.in/bikes/tes-one-Surat/p/v29464",
    },
    {
      property: "og:image",
      itemprop: "image",
      content:
        "https://flatswala.in/public/ad_images/1/1644584104_download (3).jpeg",
    },
    {
      property: "og:site_name",
      content: "Zoomkr",
    },
    {
      property: "og:locale",
      content: "en_US",
    },
    {
      property: "fb:app_id",
      content: "1855120994738893",
    },
    {
      name: "SeoStatics",
      content: "Web SeoStatics",
    },
    {
      name: "target",
      content: "all",
    },
    {
      name: "audience",
      content: "all",
    },
    {
      name: "robots",
      content: "index,follow",
    },
    {
      name: "revisit",
      content: "1 days",
    },
    {
      name: "rating",
      content: "General",
    },
    {
      name: "resource-type",
      content: "document",
    },
    {
      name: "distribution",
      content: "Global",
    },
    {
      name: "author",
      content: "Zoomkr",
    },
    {
      "http-equiv": "X-UA-Compatible",
      content: "IE=edge",
    },
    {
      property: "al:android:package",
      content: "https://flatswala.in/bikes/tes-one-Surat/p/v29464",
    },
    {
      property: "al:android:url",
      content: "https://flatswala.in/bikes/tes-one-Surat/p/v29464",
    },
    {
      property: "al:android:app_name",
      content: "Instagram",
    },
    {
      property: "al:ios:url",
      content: "https://flatswala.in/bikes/tes-one-Surat/p/v29464",
    },
    {
      property: "al:ios:app_store_id",
      content: "12345",
    },
    {
      property: "al:ios:app_name",
      content: "Instagram",
    },
  ];
  const head = document.head;

  metaTags.forEach((tag) => {
    const metaTag = document.createElement("meta");

    // Set attributes based on the keys in the tag object
    Object.keys(tag).forEach((key, index) => {
      metaTag.setAttribute(`${key}`, tag[key]);
    });

    // Append the created meta tag to the head section
    head.appendChild(metaTag);
  });
}
export function UpdateSEO({
  page_title,
  meta_title,
  meta_description,
  meta_keywords,
  schemaData,
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

  AddMetaTagsToHead({
    page_title: page_title || defaultPageTitle,
    meta_title: meta_title || defaultMetaTitle,
    meta_description: meta_description || defaultMetaDescription,
    meta_keywords: meta_keywords || defaultMetaKeywords,
  });

  if (CheckValidValue(schemaData)) {
    AddJsonLdScriptForSchema({
      scriptData: schemaData?.scriptData,
      scriptType: schemaData?.scriptType,
    });
  } else {
    AddJsonLdScriptForSchema({});
  }
}
export const CategoryList = ({ setLoading, setState }) => {
  axios
    .post(`${API_ROOT_URL}/${GET_CATEGORY_DROPDOWN_API}`, {})
    .then((response) => {
      setState(response?.data?.data || []);
      setLoading(false);
    })
    .catch((error) => {
      ToastError(error);
      setLoading(false);
    });
};

export const HanggingBar = ({ allCategoryListFromParent, ListOfCategory }) => {
  const GeneralData = useSelector((state) => state?.GeneralState?.data?.data);
  const contact_button = GeneralData?.contact_button || 0;
  const [allCategoryList, setAllCategoryList] = useState([]);
  const [loading, setLoading] = useState([]);
  const [modal, setModel] = useState(false);
  const [chatModal, setChatModal] = useState(false);
  const [render, setRender] = useState(false);

  const toggle = () => {
    setModel(!modal);
  };
  const toggle2 = () => {
    setChatModal(!chatModal);
  };
  const OnDial = () => {
    document.location.href = `tel:${11111111111}`;
  };

  useEffect(() => {
    if (CheckValidValue(allCategoryListFromParent)) {
      setAllCategoryList(ListOfCategory);
    } else {
      CategoryList({ setLoading: setLoading, setState: setAllCategoryList });
    }
  }, []);

  useEffect(() => {
    CheckValidValue(allCategoryListFromParent)
      ? setAllCategoryList(ListOfCategory)
      : console.log("");
  }, [modal]);
  return (
    <>
      <div className="HanggingBar">
        <div
          className="ChatAction"
          onClick={contact_button == 1 ? toggle2 : OnDial}
        >
          <FS6 attr={{ className: "text-light ChatHover" }}>Chat </FS6>
          <img src={contact_button == 1 ? Chat : Message} alt="" />
        </div>
        <div className="MessagAction" onClick={toggle}>
          <FS6 attr={{ className: "text-light MessagHover" }}>
            Get Quotes Now
          </FS6>
          <img src={Message} alt="" />
        </div>
      </div>
      <GetQuotesModel
        toggler={toggle}
        isOpen={modal}
        loading={loading}
        allCategoryList={allCategoryList}
      />
      <ChatModel toggler={toggle2} isOpen={chatModal} />
    </>
  );
};

export const Log_Out = ({ Redirect, loadingChange }) => {
  loadingChange("logOutLoader", true);
  const bodyFormData = new FormData();
  const UserToken = localStorage.getItem("rentalUserAuthToken");
  bodyFormData.append("token", UserToken);
  POST_API({
    endPoint: `${API_ROOT_URL}/${LOG_OUT}`,
    body: bodyFormData,
  })
    .then((response) => {
      ToastSuccess(response);
      localStorage.removeItem("profileURL");
      localStorage.removeItem("token");
      localStorage.removeItem("auth0_profile");
      localStorage.removeItem("Name");
      localStorage.removeItem("rentalUserAuthToken");
      localStorage.removeItem("user_details");
      localStorage.setItem("authenticated", false);
      Redirect();
      loadingChange("logOutLoader", false);
    })
    .catch((error) => {
      ToastError(error);
      Redirect();
      loadingChange("logOutLoader", false);
    });
};

export const ReactIcon = ({ iconName, attr }) => {
  const Icon = iconName ? ReactIcons[iconName] : ReactIcons[`AiOutlineSmile`];
  return <Icon {...attr} />;
};

export function formatDate1(inputDate) {
  const date = new Date(inputDate);

  // Check if the date is invalid
  if (isNaN(date)) {
    return ""; // Return an empty string for an invalid date
  }

  const options = { day: "numeric", month: "short", year: "numeric" };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function ChangeKeyNameOfObject({ obj, currentKeyName, newKeyName }) {
  const newObj = { ...obj };
  if (newObj.hasOwnProperty(currentKeyName)) {
    newObj[newKeyName] = newObj[currentKeyName];
    delete newObj[currentKeyName];
  }
  return newObj;
}

export const GetCurrentChatTime = () => {
  // Get the current date/time

  const now = new Date();

  // Extract hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Convert hours to AM/PM format
  const amOrPm = hours >= 12 ? "pm" : "am";
  hours = hours % 12 || 12; // Convert hours to 12-hour format

  // Add leading zeros if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Construct the formatted time string
  const formattedTime = `${hours}:${minutes}:${seconds} ${amOrPm}`;

  return formattedTime;
};

export const SimpleAnimation = ({
  edition,
  className,
  duration1,
  duration2,
  scale1,
  scale2,
  delay1,
  delay2,
}) => {
  if (edition) {
    gsap.to(className, {
      duration: duration1 || 0.5,
      scale: scale1 || 0.5,
      delay: delay1 || duration1,
    });
    gsap.to(className, {
      scale: scale2 || 1,
      duration: duration2 || 3,
      delay: delay2 || 0.5,
    });

    gsap.to(className, {
      duration: 0.5,
      scale: 0.5,
    });
    gsap.to(className, {
      delay: 0.5,
      scale: 1,
      duration: 3,
    });
  } else {
    gsap.to(className, {
      duration: 0.5,
      scale: 0.5,
    });
    gsap.to(className, {
      delay: 0.5,
      scale: 1,
      duration: 3,
    });
  }
};

export const ScrollHeight = (direction) => {
  window.addEventListener("scroll", function () {
    // Get the current scroll position in the y-direction
    var scrollY = window.scrollY || window.pageYOffset;
    var scrollX = window.scrollX || window.pageYOffset;
    // Use scrollY for whatever measurement or action you need
    if (direction == "x") {
      return scrollX;
    } else {
      return scrollY;
    }
  });
};

export const CallFunctionOnScroll = ({
  upSide,
  downSide,
  equalTo,
  between,
  Call,
}) => {
  // Get the current scroll position in the y-direction
  var scrollY = window.scrollY || window.pageYOffset;
  // Use scrollY for whatever measurement or action you need
  if (upSide) {
    if (scrollY <= upSide) {
      Call();
    }
  } else if (downSide) {
    if (scrollY >= downSide) {
      Call();
    }
  } else if (equalTo && equalTo.length > 0) {
    if (equalTo.includes(scrollY)) {
      Call();
    }
  } else if (between && between.length == 2) {
    if (scrollY >= between[0] && scrollY <= between[1]) {
      Call();
    }
  }
};

export const CallEventOnDisplay = ({ targetRef, Call }) => {
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: "0px", // Margin around the root
    threshold: 0.5, // When 50% of the target is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Call your event or function when the target is visible
        Call();
      }
    });
  }, options);

  if (targetRef.current) {
    observer.observe(targetRef.current);
  }

  // Cleanup: disconnect the observer when component unmounts
  return () => {
    if (targetRef.current) {
      observer.unobserve(targetRef.current);
    }
  };
};
