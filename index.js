import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, BackTop, Space } from 'antd';
import 'antd/dist/antd.css';
import './index.css';

import Header from './components/Header';
import Stats from './components/Stats';
import Job from './components/Job';
import TabContent from './components/TabContent';
import Quotes from './components/Quotes';
import Costs from './components/Costs';
import Invoices from './components/Invoices';
import Notifications from './components/Notifications';
import Draw from './components/Draw';

ReactDOM.render(
  <>
    <Header />
    <div id="content">
      <Row gutter={[25, 25]}>
        <Col span={14}>
          <Space direction="vertical" size="large">
            <Job />
            <TabContent />
            <Quotes />
            <Costs />
            <Invoices />
          </Space>
        </Col>
        <Col span={10}>
          <Space direction="vertical" size="large">
            <Notifications />
            <Stats />
          </Space>
        </Col>
      </Row>
    </div>
    <Draw />
    <BackTop />
  </>,
  document.getElementById('container')
);
