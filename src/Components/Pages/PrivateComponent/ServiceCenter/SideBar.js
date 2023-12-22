import React from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { useLocation, useNavigate } from "react-router";
import { BASE_ROUTE } from "../../../../Route/RouthPath";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetLocation } from "../../../../Redux_Store/Actions/generalActions";

const SideBar = ({ AllProps }) => {
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
              "{`${CurrentUrlCategory}`.toUpperCase()}"
            </span>
          </FS4>
          <div className="input">
            <input type="text" placeholder="Name*" />
          </div>
          <div className="input">
            <input type="text" placeholder="Mobile Number*" />
          </div>
          <button className="btn btn-success">Get Quotes Now</button>{" "}
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
