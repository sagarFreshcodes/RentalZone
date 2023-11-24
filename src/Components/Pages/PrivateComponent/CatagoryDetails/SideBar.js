import React from "react";
import { FS4, FS5 } from "../../../../CommonElements/Font/FS";
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
const SideBar = () => {
  return (
    <div className="cat-container">
      <div className="s_form">
        <FS4 attr={{className:"BoldText"}}>Get the list of best <span className="green_text">"Hotels"</span></FS4>
        <div className="input">
          <input type="text" placeholder="Name*" />
        </div>
        <div  className="input" >
          <input type="text"  placeholder="Mobile Number*" />
        </div>
        <button className="btn btn-success">Get Quotes Now</button>{" "}
      </div>

      <div className="sc_linkBox">
      {sidebarData.map((i) => {
        return (
          <>
            <div className="s_catTitleBox">
              <div className="s_catTitle">{i.title}</div>
              <div className="all_category">
                {i.category.map((c) => {
                  return (
                    <>
                      <div className="s_cat">{c}</div>
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
  );
};

export default SideBar;
