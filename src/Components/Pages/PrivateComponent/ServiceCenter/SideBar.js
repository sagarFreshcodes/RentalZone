import React from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { useNavigate } from "react-router";
import { BASE_ROUTE } from "../../../../Route/RouthPath";
import { useSelector } from "react-redux";

const SideBar = ({ AllProps }) => {
  const navigate = useNavigate();
  const GeneralState = useSelector((state) => state?.GeneralState);
  const CurrentLocation = GeneralState?.location;
  const SelectedCategory = GeneralState?.selectedCategory;
  const { category_id } = SelectedCategory;
  const { city_slug } = CurrentLocation;
  const { PopularArea } = AllProps;

  const onCategorySelect = (link) => {
    console.log("2512", CurrentLocation);
    const rightLink = `${link}`.split("/")[3];
    navigate(`${BASE_ROUTE}/${rightLink}/${category_id}`);
    // navigate(`${BASE_ROUTE}/laptop-rental-haffkin-institute/3`);
  };



  const FixedArea = [
    {
      title: "Laptop Rental in Mumbai",
      link: "https://laptops.rent/laptop-rental-mumbai",
    },
    {
      title: "Laptop Rental in Thane",
      link: "https://laptops.rent/laptop-rental-thane",
    },
    {
      title: "Laptop Rental in Goregaon",
      link: "https://laptops.rent/laptop-rental-goregaon",
    },
    {
      title: "Laptop Rental in Andheri",
      link: "https://laptops.rent/laptop-rental-andheri",
    },
    {
      title: "Laptop Rental in Near me",
      link: `https://laptops.rent/laptop-rental-${city_slug}`,
    }, 
  ];
  return (
    <ContentBox className="">
      <div
        className="cat-container"
        onClick={() => console.log(`AllProps`, AllProps)}
      >
        <div className="s_form">
          <FS4 attr={{ className: "BoldText" }}>
            Get the list of best <span className="green_text">"Hotels"</span>
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
          {[ FixedArea,PopularArea]?.map((i,index) => {
            return (
              <>
                <div
                  className={`s_catTitleBox ${i?.length > 0 ? "" : "d-none"}`}
                >
                  <div className="s_catTitle">{index == 0 ?  `Browse From` :`Popular Area`}</div>
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


