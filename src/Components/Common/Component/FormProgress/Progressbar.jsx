import React, { Fragment, useState } from "react";

const Progressbar = ({ currentPage }) => {
  const Page = currentPage ? currentPage : 2;
  const PrgressData = [1, 2, 3, 4, 5];
  return (
    <div className="progressBar">
      {PrgressData.map((i, index) => {
        return (
          <>
            <div className="pageProgresssComponent">
              <div
                className={Page >= index + 1 ? "pageRoung" : "RemainPageRoung"}
              >
                {i}
              </div>
              <div
                className={`${
                  Page >= index + 2
                    ? "pageProressLine"
                    : "RemainPageProressLine"
                } ${index == PrgressData.length - 1 ? "d-none" : ""}`}
              ></div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Progressbar;
