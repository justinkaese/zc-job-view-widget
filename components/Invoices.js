import React from 'react';
import { Card, Table, Tag, Dropdown, Menu, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  MoreOutlined,
  FilePdfOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import invoiceData from './Data';

const columns = [
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

function Invoices() {
  return (
    <>
      <Card bordered={false}>
        <p className="ant-descriptions-title">Invoices</p>
        <Table
          columns={columns}
          dataSource={invoiceData}
          pagination={false}
          footer={() => <Button icon={<PlusOutlined />}></Button>}
          size="middle"
        />
      </Card>
    </>
  );
}

export default Invoices;
