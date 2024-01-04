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
import { PaginationBar } from "../../../Common/Component/PaginationBar/PaginationBar";
import { PageContentManager } from "../../../Common/Component/DesignElement";
import { SC_CardSkelaton } from "../../../Common/Component/Sleleton/Skelaton";
const ProductList = () => {
  const GeneralData = useSelector((state) => state?.GeneralState);
  const [currentPage, setCurrentPage] = useState(1);
  const { isProductListingLoading } = GeneralData;
  const {
    product_list,
    page_title,
    product_meta_title,
    product_meta_keywords,
    product_meta_description,
    schema,
  } = GeneralData?.ProductListData?.data || { schema: [] };

  const { last_page, data, current_page } = product_list || {
    data: [],
    current_page: 1,
    last_page: 1,
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      ProductListActions({
        category_id: 8,
        local_city: "mumbai",
        page: currentPage,
      })
    );
  }, [currentPage]);
  const test = () => {
    console.log("object2512", schema);
  };

  useEffect(() => {
    if (`${window.location.href}`.includes(PRODUCT_LIST_ROUTE) && schema[0]) {
      schema?.map((i) => {
        UpdateSEO({
          page_title: page_title,
          meta_title: product_meta_title,
          meta_keywords: product_meta_keywords,
          meta_description: product_meta_description,
          schemaData: {
            scriptData: JSON.stringify(i),
            scriptType: "application/ld+json",
          },
        });
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
                    <PageContentManager
                      isLoading={isProductListingLoading}
                      loader={<SC_CardSkelaton />}
                      contentArray={data}
                      ContentBody={
                        <div className="TrendingsContainer">
                          {product_list &&
                            data?.map((item, index) => {
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
                            })}{" "}
                        </div>
                      }
                      pagination={
                        <>
                          <PaginationBar
                            onChange={setCurrentPage}
                            last_page={last_page * 10}
                            current_page={currentPage}
                          />
                          {/* <PaginationBar2
                  last_page={last_page}
                  current_page={current_page}
                  setCurrentPage={setCurrentPage}
                /> */}
                        </>
                      }
                    />
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
