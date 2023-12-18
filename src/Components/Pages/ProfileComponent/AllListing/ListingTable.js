import React, { Fragment, useContext } from "react";
import { Col, Card, CardHeader, Table } from "reactstrap";

import { H5, Image } from "../../../../AbstractElements";
import TableContext from "../../../../_helper/Table";

const ListingTable = () => {
  const { data } = useContext(TableContext);

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <H5>Basic Table With Border Bottom Color</H5>
            <span>
              {" "}
              {"Use a class"} <code> {"table"} </code> {"to any table, and"}{" "}
              <code> {".border-bottom-*"} </code>{" "}
              {"class for Border bottom color"}
            </span>
          </CardHeader>
          <div className="table-responsive">
            <Table>
              <thead>
                <tr className="border-bottom-primary">
                  <th scope="col">{"Id"}</th>
                  <th scope="col">{"Listing Name"}</th>
                  <th scope="col">{"Date"}</th>
                  <th scope="col">{"Rating"}</th>
                  <th scope="col">{"Is Approved	"}</th>
                  <th scope="col">{"Status"}</th>
                  <th scope="col">{"Action"}</th>
                  <th scope="col">{"Preview"}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id} className={`border-bottom-${item.color}`}>
                    <th scope="row">{item.id}</th>
                    <td>
                      <Image
                        attrImage={{
                          className: "img-30 me-2",
                          src: require(`../../../../assets/images/user/${item.image}`),
                          alt: "user",
                        }}
                      />
                      {item.first_name}
                    </td>
                    <td>{item.last_name}</td>
                    <td>{item.user_name}</td>
                    <td>{item.role}</td>
                    <td>{item.company}</td>
                    <td>
                      <span className={`badge badge-light-${item.badgeColor}`}>
                        {item.language}
                      </span>
                    </td>
                    <td>{item.country}</td>
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
