import React, { Fragment, useContext } from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";

import { H5, Image } from "../../../../AbstractElements";
import TableContext from "../../../../_helper/Table";
import {
  ReactIcon,
  formatDate1,
} from "../../../Common/Component/helperFunction";

const ListingTable = ({ tableData, ClickOnEditIcon, ClickOnDeleteIcon }) => {
  const test = () => {
    console.log("tableData11254", tableData);
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <h5 onClick={test}>All Products</h5>
          </CardHeader>
          <div className="table-responsive MyListing" onClick={test}>
            <Table>
              <thead className="tableHead">
                <tr className="border-bottom-primary">
                  <th scope="col nameHeader">{"Product Name"}</th>
                  <th scope="col">{"Date"}</th>
                  <th scope="col">{"Price"}</th>
                  <th scope="col">{"Is Approved	"}</th>
                  <th scope="col">{"Status"}</th>
                  <th scope="col">{"Action"}</th>
                </tr>
              </thead>
              <tbody className="tableBody">
                {tableData &&
                  tableData?.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="userName">
                          {[""].includes(item?.product_name)
                            ? "-"
                            : item?.product_name}
                        </div>
                      </td>
                      <td>{formatDate1(item?.created_at)}</td>
                      <td>
                        {["null", "", null].includes(item?.price) ? (
                          <div className="rating">0.0</div>
                        ) : (
                          <div className="rating">{item?.price}</div>
                        )}
                      </td>
                      <td>{item?.is_approved}</td>
                      <td onClick={() => console.log(item)}>
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
                              onClick: () => ClickOnEditIcon({ item: item }),
                            }}
                          />
                          <ReactIcon
                            iconName={"AiFillDelete"}
                            attr={{
                              className: "AiFillDelete",

                              onClick: () => ClickOnDeleteIcon({ item: item }),
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
};

export default ListingTable;
