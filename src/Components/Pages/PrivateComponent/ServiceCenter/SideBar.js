import React from "react";
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
        <p>Get the list of best "Hotels"</p>
        <div className="input">
          <input type="text" placeholder="Name*" />
        </div>
        <div  className="input" >
          <input type="text"  placeholder="Mobile Number*" />
        </div>
        <button className="btn btn-success">Get Quotes Now</button>{" "}
      </div>
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
  );
};

export default SideBar;
