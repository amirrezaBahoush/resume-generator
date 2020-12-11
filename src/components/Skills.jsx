import { Col, Input, Row, Form, Card } from 'antd';
import React from 'react';


const Skills = () => {
  return (

    <Card title="مهارت ها" className="basic__card">
      <Row gutter={24} className="mt-5">
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="نام اداره"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="نام اداره" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="مدت حضور"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="مدت حضور" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="field"
            label="سمت شغلی"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="سمت شغلی" />
          </Form.Item>
        </Col>

      </Row>
    </Card>

  )
}

export default Skills;
