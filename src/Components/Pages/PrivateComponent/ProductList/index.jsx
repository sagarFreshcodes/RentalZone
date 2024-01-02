import React, { Fragment, useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { ProductListActions } from "../../../../Redux_Store/Actions/generalActions";
import LaptopPics from "../../../../assets/images/Essential/laptop.png";
import ProductCard from "./ProductCard";
import BackNavigation from "../../../Common/Component/BackNavigation";
import {
  ApiGeneralLoader,
  UpdateSEO,
} from "../../../Common/Component/helperFunction";
import { LoaderBox } from "../../../../CommonElements/LoaderBox/LoaderBox";
import { Breadcrumbs } from "../../../../AbstractElements";
import { ContentBox } from "../../../../CommonElements/ContentBox/ContentBox";
import { PRODUCT_LIST_ROUTE } from "../../../../Route/RouthPath";
const ProductList = () => {
  const GeneralData = useSelector((state) => state?.GeneralState);
  const { isProductListingLoading } = GeneralData;
  const {
    product_list,
    page_title,
    product_meta_title,
    product_meta_keywords,
    product_meta_description,
    schema,
  } = GeneralData?.ProductListData?.data || {};
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ProductListActions({ category_id: 8, local_city: "mumbai" }));
  }, []);
  const test = () => {
    console.log("object2512", product_list);
  };

  useEffect(() => {
    if (`${window.location.href}`.includes(PRODUCT_LIST_ROUTE)) {
      UpdateSEO({
        page_title: page_title,
        meta_title: product_meta_title,
        meta_keywords: product_meta_keywords,
        meta_description: product_meta_description,
        schemaData: {
          scriptData: schema[0],
          scriptType: "application/ld+json",
        },
      });
    }
  }, [
    page_title,
    product_meta_title,
    product_meta_keywords,
    product_meta_description,
  ]);
  return (
    <Fragment>
      <BackNavigation />
      <ContentBox attr={{ className: "ProductList" }}>
        <Breadcrumbs
          parent="Project"
          title="Product List"
          mainTitle="Product List"
        />

        <LoaderBox isLoading={isProductListingLoading}>
          <Container fluid={true}>
            <Row className="project-card">
              <Col sm="12" onClick={test}>
                <Card>
                  <CardBody>
                    <div className="TrendingsContainer">
                      {product_list &&
                        product_list?.map((item, index) => {
                          return (
                            <ProductCard
                              className={""}
                              title={item?.product_name}
                              price={item?.price}
                              address1={item?.address1}
                              address2={item?.address2}
                              like={item?.like}
                              statics={item?.static}
                              view={item?.view}
                              share={item?.share}
                              picture={
                                `${item?.product_image}`.includes("/")
                                  ? item?.product_image
                                  : LaptopPics
                              }
                              d1={item?.d1}
                              d2={item?.d2}
                              d3={item?.d3}
                              d4={item?.d4}
                              specification={[item?.description]}
                              id={item.id}
                              item={item}
                            />
                          );
                        })}
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </LoaderBox>
      </ContentBox>
    </Fragment>
  );
};

export default ProductList;
