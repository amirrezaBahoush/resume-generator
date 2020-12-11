import { Col, Input, Row, Form, Card } from 'antd';
import React from 'react';


const Basic = () => {
  return (

    <Card title="اطلاعات شخصی" className="basic__card">
      <Row gutter={24}>
        <Col span={8}>
          <Form.Item
            name='firstName'
            label='نام'
            rules={[
              {
                required: true,
                message: 'Please Fill The Input',
              }
            ]}
          >
            <Input placeholder="نام" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="نام خانوادگی"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="نام خانوادگی" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="field"
            label="ایمیل"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="ایمیل" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="استان محل سکونت"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="استان محل سکونت" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="شهر محل سکونت"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="شهر محل سکونت" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="field"
            label="تلفن محل سکونت"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="تلفن محل سکونت" />
          </Form.Item>
        </Col>

      </Row>
      <Row gutter={24} className="mt-5">
        <Col span={24}>
          <Form.Item
            name="field"
            label="آدرس محل سکونت"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="آدرس محل سکونت" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="محل تولد"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="محل تولد" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name={`field`}
            label="سال تولد"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="سال تولد" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            name="field"
            label="شماره همراه"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="شماره همراه" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">

        {/* <Col span={8}>
          <Form.Item
            name="field"
            label="وبسایت شخصی"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="وبسایت شخصی" />
          </Form.Item>
        </Col> */}
        {/* <Col span={8}>
          <Form.Item
            name="field"
            label="ایمیل"
            rules={[
              {
                required: true,
                message: 'Input something!',
              },
            ]}
          >
            <Input placeholder="ایمیل" />
          </Form.Item>
        </Col> */}
      </Row>
    </Card>

  )
}

export default Basic;
