import React, { useState } from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { useLocation, useNavigate } from "react-router";
import { BASE_ROUTE } from "../../../../Route/RouthPath";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetLocation } from "../../../../Redux_Store/Actions/generalActions";
import { Submit_quotes } from "../../Models/GetQuotes/get_quotes_helper";
import { ApiLoader } from "../../../Common/Component/DesignElement";
import { ToastError } from "../../../Common/Component/helperFunction";

const SideBar = ({ AllProps }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", number: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const CurrentUrlPath = location.pathname;
  const CurrentUrlSlug = CurrentUrlPath.split("/")[1]
    .split("-")
    .slice(0, 2)
    .join("-");
  const CurrentUrlcity = CurrentUrlPath.split("/")[1].split("-").slice(2, 3);
  const CurrentUrlCategory = CurrentUrlPath.split("/")[1]
    .split("-")
    .slice(0, 1);
  const GeneralState = useSelector((state) => state?.GeneralState);
  const CurrentLocation = GeneralState?.location;
  const SelectedCategory = GeneralState?.selectedCategory;
  const { category_id, category_slug } = SelectedCategory;
  const { city_slug } = CurrentLocation;
  const { PopularArea } = AllProps;

  const onCategorySelect = (link) => {
    const rightLink = `${link}`.split("/")[3];
    navigate(`${BASE_ROUTE}/${rightLink}/${category_id}`);
  };

  const onHandleChange = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setFormData({ ...formData, [name]: value });
  };
  const OnSubmitForm = () => {
    setLoading(true);
    const submitData = {
      [`listing_category[]`]: category_id,
      // individual_company: formData?.individual_company,
      // quantity: formData?.quantity,
      name: formData?.name,
      phone_number: formData?.number,
      // email: formData?.email,
      // location: formData?.location,
      // message: formData?.message,
    };
    if ([formData?.number, formData?.name].includes("")) {
      ToastError("Please fill data");
      setLoading(false);
    } else {
      if (formData?.number.length < 10) {
        ToastError("Please fill valid 10 digit mobile number");
        setLoading(false);
      } else {
        Submit_quotes({
          submitData: submitData,
          setLoading: setLoading,
          toggle: () => console.log(""),
        });
      }
    }
  };
  const FixedArea = [
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Mumbai`,
      link: `https://demo.rent/${CurrentUrlSlug}-mumbai`,
      area: "mumbai",
    },
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Navi mumbai`,
      link: `https://demo.rent/${CurrentUrlSlug}-navimumbai`,
      area: "navimumbai",
    },
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Near me`,
      link: `https://demo.rent/${CurrentUrlSlug}-near-me-${city_slug}`,
      area: `${city_slug}`,
    },
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Thane`,
      link: `https://demo.rent/${CurrentUrlSlug}-thane`,
      area: "thane",
    },
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Goregaon`,
      link: `https://demo.rent/${CurrentUrlSlug}-goregaon`,
      area: "goregaon",
    },
    {
      title: `${`${CurrentUrlSlug.split("-")[0]}`} Rental in Andheri`,
      link: `https://demo.rent/${CurrentUrlSlug}-andheri`,
      area: "andheri",
    },
  ];

  useEffect(() => {
    dispatch(
      SetLocation({
        locationData: {
          city_slug: CurrentUrlcity,
          name: CurrentUrlcity,
        },
      })
    );
  }, [CurrentUrlPath]);

  return (
    <ContentBox className="">
      <div className="cat-container">
        <div className="s_form">
          <FS4 attr={{ className: "BoldText" }}>
            Get the list of best{" "}
            <span className="green_text">
              "{`${CurrentUrlSlug}`.toUpperCase()}"
            </span>
          </FS4>
          <div className="input">
            <input
              name="name"
              type="text"
              onChange={onHandleChange}
              placeholder="Name*"
            />
          </div>
          <div className="input">
            <input
              name="number"
              type="number"
              onChange={onHandleChange}
              placeholder="Mobile Number*"
            />
          </div>
          <button className="btn btn-success" onClick={OnSubmitForm}>
            Get Quotes Now {loading ? <ApiLoader /> : ""}
          </button>{" "}
        </div>

        <div className="sc_linkBox">
          {[FixedArea, PopularArea]?.map((i, index) => {
            return (
              <>
                <div
                  className={`s_catTitleBox ${i?.length > 0 ? "" : "d-none"}`}
                >
                  <div className="s_catTitle">
                    {index == 0 ? `Browse From` : `Popular Area`}
                  </div>
                  <div className="all_category">
                    {i?.map((c) => {
                      return (
                        <>
                          <div
                            className="s_cat cursorPointer"
                            onClick={() => onCategorySelect(c?.link)}
                          >
                            {c?.title}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </ContentBox>
  );
};

export default SideBar;
