import React, { Fragment } from 'react';

import Language from './Language';
import Searchbar from './Searchbar';
import Notificationbar from './Notificationbar';
import MoonLight from './MoonLight';
import CartHeader from './CartHeader';
import BookmarkHeader from './BookmarkHeader';
import UserHeader from './UserHeader';
import { UL } from '../../../AbstractElements';
import { Col } from 'reactstrap';

const RightHeader = () => {
  return (
    <Fragment>
      <Col xxl='5' xl='2' md='2'  sm='2' className='nav-right pull-right right-header col-2 p-0 ms-auto'>
        {/* <Col md="8"> */}
        <UL attrUL={{ className: 'simple-list nav-menus flex-row' }}>
          {/* <Language />
          <Searchbar />
          <BookmarkHeader />
          <MoonLight />
          <CartHeader /> */}
          <Notificationbar />
          <UserHeader />
        </UL>
        {/* </Col> */}
      </Col>
    </Fragment>
  );
};

export default RightHeader;
