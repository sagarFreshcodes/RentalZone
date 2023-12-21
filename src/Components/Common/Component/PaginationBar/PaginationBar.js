import React from "react";
import { Pagination } from "antd";
const PaginationBar = ({ onChange, last_page, current_page }) => {
  return (
    <Pagination
      // showQuickJumper
      defaultCurrent={current_page}
      total={last_page}
      onChange={onChange}
    />
  );
};

export { PaginationBar };
