import React from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
const sidebarData = [
  {
    title: "Popular Areas",
    category: [
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
    ],
  },
  {
    title: "Popular Areas",
    category: [
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
      "Himachal",
    ],
  },
];
const SideBar = ({ AllProps }) => {
  const { PopularArea } = AllProps;
  return (
    <ContentBox className="">
      <div className="cat-container">
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
          {[PopularArea,[]]?.map((i) => {
            return (
              <>
                <div className={`s_catTitleBox ${i?.length >0?"":"d-none"}`}>
                  <div className="s_catTitle">{`Popular Area`}</div>
                  <div className="all_category">
                    {i?.map((c) => {
                      return (
                        <>
                          <div className="s_cat">{c?.title}</div>
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
