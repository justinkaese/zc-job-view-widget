import React from 'react';
import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';

function Draw() {
  const [visible, setVisible] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showLargeDrawer}>
        Open Drawer
      </Button>
      <Drawer
        title={`Drawer`}
        placement="right"
        onClose={onClose}
        visible={visible}
        mask={false}
        width={782}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default Draw;
