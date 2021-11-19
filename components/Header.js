import React from 'react';
import { PageHeader, Tag, Button } from 'antd';

function Header() {
  return (
    <PageHeader
      className="site-page-header"
      ghost={false}
      title="16415 - Logan River Parklands"
      tags={[
        <Tag key="1" color="blue">
          Inspection
        </Tag>,
        <Tag key="2" color="black">
          AUD
        </Tag>,
      ]}
      extra={[
        <Button key="1">Drive</Button>,
        <Button key="1" type="primary">
          Edit
        </Button>,
      ]}
    />
  );
}

export default Header;
