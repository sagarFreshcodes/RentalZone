import React, { Fragment } from 'react';
import { Breadcrumbs } from '../../../../AbstractElements'; 
import { Card, Col, Container, Row } from 'reactstrap'; 
import Content from './Content';

const Home = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs parent='Apps' title='File Manager' mainTitle='File Manager' /> */}
      <Container fluid={true}>
        <Row> 
        {/* <FileSideBar /> */}
          <Col xl='12' md='12' className='box-col-9'>
            <div className='file-content'>
              <Card>
                < Content />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
export default Home;
