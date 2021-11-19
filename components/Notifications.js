import React from 'react';
import { Card, Alert } from 'antd';

function Notifications() {
  return (
    <>
      <Card bordered={false}>
        <Alert
          message="NHVR Requirments"
          description="This site is greater than 100 km (2864.40 km) from our home depot. If a heavy vehicle is to be used, a logbook must be completed."
          type="warning"
          showIcon
        />
      </Card>
    </>
  );
}

export default Notifications;
