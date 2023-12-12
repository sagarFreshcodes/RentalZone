import React from "react";
import {
  Col,
  Card,
  CardBody,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { PaginationAlignment, Previous, Next } from "../../../../Constant";
import { generateAscendingNumbers } from "../../../Common/Component/helperFunction";
const PaginationBar = ({ current_page, last_page, setCurrentPage }) => {
  return (
    <Pagination
      className="pagination justify-content-center pagination-primary"
      aria-label="Page navigation example"
    >
      <PaginationItem>
        <PaginationLink href="#javascript">{Previous}</PaginationLink>
      </PaginationItem>

      {generateAscendingNumbers(last_page).map((i) => {
        return (
          <PaginationItem>
            <PaginationLink
              href="#javascript"
              onClick={() => setCurrentPage(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      <PaginationItem>
        <PaginationLink href="#javascript">{Next}</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationBar;
