import React from 'react';
import { Card, Table, Tag, Dropdown, Menu, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  MoreOutlined,
  FilePdfOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

import quoteData from './Data';

const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number',
    render: (text) => <a>{text}</a>,
    width: '10%',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '40%',
  },
  {
    title: 'Date Sent',
    dataIndex: 'dateSent',
    key: 'dateSent',
    width: '15%',
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
    <Menu.Item key="0" icon={<FilePdfOutlined />}>
      <a href="#">Open PDF</a>
    </Menu.Item>
    <Menu.Item key="1" icon={<DeleteOutlined />}>
      <a href="#">Delete</a>
    </Menu.Item>
  </Menu>
);

function Quotes() {
  return (
    <>
      <Card bordered={false}>
        <p className="ant-descriptions-title">Quotes</p>
        <Table
          columns={columns}
          dataSource={quoteData}
          size="middle"
          footer={() => <Button icon={<PlusOutlined />}></Button>}
          pagination={false}
        />
      </Card>
    </>
  );
}

export default Quotes;
