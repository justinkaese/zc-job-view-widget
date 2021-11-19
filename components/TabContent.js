import React from 'react';
import { Card, Tabs, Descriptions, Avatar, Tooltip } from 'antd';

const { TabPane } = Tabs;

const teamMembers = [
  <Tooltip title="Joe Bloggs" placement="top">
    <Avatar style={{ backgroundColor: '#f56a00' }}>JB</Avatar>
  </Tooltip>,
  <Tooltip title="Jane Doe" placement="top">
    <Avatar style={{ backgroundColor: '#1890ff' }}>JD</Avatar>
  </Tooltip>,
];

function TabContent() {
  return (
    <>
      <Card>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Schedule" key="1">
              <Descriptions bordered column={2} size="small">
                <Descriptions.Item label="Received">
                  16-11-2021
                </Descriptions.Item>
                <Descriptions.Item label="Due">16-11-2021</Descriptions.Item>
                <Descriptions.Item label="Persons Req.">2</Descriptions.Item>
                <Descriptions.Item label="Assigned To">
                  <Avatar.Group>{teamMembers}</Avatar.Group>
                </Descriptions.Item>
              </Descriptions>
            </TabPane>
            <TabPane tab="Site History" key="2">
              <p>Coming Soon</p>
            </TabPane>
            <TabPane tab="Assets" key="3">
              <p>Coming Soon</p>
            </TabPane>
          </Tabs>
        </div>
      </Card>
    </>
  );
}

export default TabContent;
