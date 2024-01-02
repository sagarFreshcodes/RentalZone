import React, { Fragment, useContext } from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";

import { H5, Image } from "../../../../AbstractElements";
import TableContext from "../../../../_helper/Table";
import {
  ReactIcon,
  formatDate1,
} from "../../../Common/Component/helperFunction";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";

const ListingTable = ({
  tableData,
  ClickOnEditIcon,
  ClickOnDeleteIcon,
  isListingLoading,
}) => {
  const test = () => {
    console.log("tableData11254", tableData);
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <h5 onClick={test}>My Listings</h5>
          </CardHeader>
          <ContentBox>
            <ContentBox>
              <div className="table-responsive MyListing" onClick={test}>
                <Table>
                  <thead className="tableHead">
                    <tr className="border-bottom-primary">
                      <th scope="col nameHeader">{"Listing Name"}</th>
                      <th scope="col">{"Date"}</th>
                      <th scope="col">{"Rating"}</th>
                      <th scope="col">{"Is Approved	"}</th>
                      <th scope="col">{"Status"}</th>
                      <th scope="col">{"Action"}</th>
                    </tr>
                  </thead>
                  <tbody
                    className={`tableBody ${
                      isListingLoading ? "BlurElement" : ""
                    }`}
                  >
                    {tableData &&
                      tableData?.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="userName">
                              {[""].includes(item?.name) ? "-" : item?.name}
                            </div>
                          </td>
                          <td>{formatDate1(item?.created_at)}</td>
                          <td>
                            {["null", "", null].includes(item?.rating) ? (
                              <div className="rating">0.0</div>
                            ) : (
                              <div className="rating">{item?.rating}</div>
                            )}
                          </td>
                          <td>{item?.is_approved}</td>
                          <td>
                            {["Yes"].includes(item?.is_active) ? (
                              <div className="active">Active</div>
                            ) : (
                              <div className="de-active">Deactive</div>
                            )}
                          </td>
                          <td>
                            <div className="TableAction">
                              {/* <ReactIcon
                            iconName={"AiFillEye"}
                            attr={{ className: "AiFillEye" }}
                          /> */}

                              <ReactIcon
                                iconName={"AiFillEdit"}
                                attr={{
                                  className: "AiFillEdit",
                                  onClick: () =>
                                    ClickOnEditIcon({ item: item }),
                                }}
                              />
                              <ReactIcon
                                iconName={"AiFillDelete"}
                                attr={{
                                  className: "AiFillDelete",
                                  onClick: () =>
                                    ClickOnDeleteIcon({ item: item }),
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>{" "}
            </ContentBox>
          </ContentBox>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ListingTable;
