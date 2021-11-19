import React from 'react';
import { Statistic, List, Card } from 'antd';

const data = [
  {
    id: 1,
    title: 'Approved Quotes',
    description: 'All quotes with an approved status',
    value: 1500.0,
  },
  {
    id: 2,
    title: 'Cost',
    description: 'Sum of all incurred costs',
    value: 525.75,
  },
  {
    id: 3,
    title: 'Invoices',
    description: 'Sum of all invoices',
    value: 1500.0,
  },
  {
    id: 4,
    title: 'Gross Profit',
    description: 'Invoices minus costs',
    value: 974.25,
  },
  {
    id: 5,
    title: 'Est. Net Profit',
    description: '???',
    value: 583.29,
  },
];

function Stats() {
  return (
    <>
      <Card bordered={false}>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta
                title={item.title}
                description={<small>{item.description}</small>}
              />
              <div>{<Statistic value={item.value} precision={2} />}</div>
            </List.Item>
          )}
        />
      </Card>
    </>
  );
}

export default Stats;
