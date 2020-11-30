import { Col, Input, Row, Form } from 'antd';
import React from 'react';


const Basic = () => {
  return (
    <Form
      // form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
    // onFinish={onFinish}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Form.Item
            name='firstName'
            label='First Name'
            rules={[
              {
                required: true,
                message: 'Please Fill The Input',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label={`Field`}
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="placeholder" />
          </Form.Item>
        </Col>
      </Row>

    </Form>
  )
}

export default Basic;
