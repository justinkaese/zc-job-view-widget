import React from 'react';
import {
  Card,
  Descriptions,
  Button,
  Tag,
  Comment,
  Tooltip,
  List,
  Menu,
  Dropdown,
} from 'antd';
import { CommentOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';

const data = [
  {
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure).
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: <p>We supply a series of design principles</p>,
    datetime: (
      <Tooltip
        title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

const menu = (
  <Menu>
    <Menu.Item key="0" icon={<CommentOutlined />}>
      <a href="#">Add Comment</a>
    </Menu.Item>
  </Menu>
);

function Job() {
  return (
    <>
      <Card bordered={false}>
        <Descriptions
          bordered
          title="Job"
          size="small"
          column={2}
          extra={
            <Dropdown overlay={menu} trigger={['click']}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <Button overlay={menu}>Actions</Button>
              </a>
            </Dropdown>
          }
        >
          <Descriptions.Item label="Client" span={2}>
            T &amp; H Levai Pty Ltd
          </Descriptions.Item>
          <Descriptions.Item label="Contact">
            Tibor Levai
            <br />
            <small>
              <a>Tibor_Levai@thlevai.com</a>
            </small>
            <br />
            <small>
              <a>0412 227 371</a>
            </small>
          </Descriptions.Item>
          <Descriptions.Item label="Site">
            Logan River Parklands <br />
            <small>
              <a>Blackbird Street,Beenleigh,QLD,4207,Australia</a>
            </small>
            <br />
            <small>
              <a>-27.6993, 153.19315</a>
            </small>
          </Descriptions.Item>
          <Descriptions.Item label="Reference">TEST</Descriptions.Item>
          <Descriptions.Item label="Status">
            <Tag color="blue">Open</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="Description" span={2}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Descriptions.Item>
          <Descriptions.Item label="Comments" span={2}>
            <List
              className="comment-list"
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item) => (
                <li>
                  <Comment
                    actions={[
                      <Tooltip key="1">
                        <span
                          className="comment-action"
                          icon={<DeleteOutlined />}
                        >
                          <DeleteOutlined />
                          Delete
                        </span>
                      </Tooltip>,
                    ]}
                    author={item.author}
                    avatar={item.avatar}
                    content={item.content}
                    datetime={item.datetime}
                  />
                </li>
              )}
            />
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </>
  );
}

export default Job;
