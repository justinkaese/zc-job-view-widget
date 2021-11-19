import React from 'react';
import { Card, Table, Tag, Dropdown, Menu, Button, Typography } from 'antd';
import { PlusOutlined, MoreOutlined, DeleteOutlined } from '@ant-design/icons';

import invoiceData from './Data';

const { Text } = Typography;

const purchaseOrderColumns = [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a>{text}</a>,
    width: 100,
    width: '10%',
  },
  {
    title: 'Date Sent',
    dataIndex: 'dateSent',
    key: 'dateSent',
    width: '55%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    align: 'right',
    width: '10%',
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <Tag color="red" key={status}>
        {status}
      </Tag>
    ),
    align: 'center',
    width: '15%',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => (
      <Dropdown overlay={menu} trigger={['click']}>
        <MoreOutlined overlay={menu} onClick={(e) => e.preventDefault()} />
      </Dropdown>
    ),
    align: 'center',
    width: '10%',
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1" icon={<DeleteOutlined />}>
      <a href="#">Delete</a>
    </Menu.Item>
  </Menu>
);

function Costs() {
  return (
    <>
      <Card bordered={false}>
        <p className="ant-descriptions-title">Costs</p>
        <p>Purchase Orders</p>
        <Table
          columns={purchaseOrderColumns}
          dataSource={invoiceData}
          pagination={false}
          footer={() => <Button size="small" icon={<PlusOutlined />}></Button>}
          size="middle"
        />
        <br />
        <p>Labour, Vehicles &amp; Inventory</p>
        <Table
          columns={purchaseOrderColumns}
          dataSource={invoiceData}
          pagination={false}
          footer={() => <Button size="small" icon={<PlusOutlined />}></Button>}
          size="middle"
        />
        <br />
        <p>Receipts</p>
        <Table
          columns={purchaseOrderColumns}
          dataSource={invoiceData}
          pagination={false}
          footer={() => <Button size="small" icon={<PlusOutlined />}></Button>}
          size="middle"
        />
      </Card>
    </>
  );
}

export default Costs;
