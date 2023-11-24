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
const PaginationBar= () => {
  return (
    <Pagination
      className="pagination justify-content-center pagination-primary"
      aria-label="Page navigation example"
    >
      <PaginationItem>
        <PaginationLink href="#javascript">{Previous}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#javascript">{"1"}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#javascript">{"2"}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#javascript">{"3"}</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#javascript">{Next}</PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationBar;
