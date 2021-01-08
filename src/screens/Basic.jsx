import { Col, Input, Row, Form, Card } from 'antd';
import React from 'react';


const Basic = () => {
  return (

    <Card title="اطلاعات شخصی" className="basic__card">
      <Row gutter={24}>
        <Col xs={24} lg={6}>
          <Form.Item
            name='firstName'
            label='نام'
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              }
            ]}
          >
            <Input placeholder="نام" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={6}>
          <Form.Item
            name='lastName'
            label="نام خانوادگی"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="نام خانوادگی" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={6}>
          <Form.Item
            name='birthPlace'
            label="محل تولد"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="محل تولد" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={6}>
          <Form.Item
            name='birthYear'
            label="سال تولد"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="سال تولد" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">
        <Col xs={24} lg={8}>
          <Form.Item
            name='email'
            label="ایمیل"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="ایمیل" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item
            name='mobile'
            label="شماره همراه"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="شماره همراه" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item
            name='website'
            label="وبسایت شخصی"
          >
            <Input placeholder="وبسایت شخصی" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">
        <Col xs={24} lg={8}>
          <Form.Item
            name='phoneNumber'
            label="تلفن محل سکونت"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="تلفن محل سکونت" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item
            name='province'
            label="استان محل سکونت"
          >
            <Input placeholder="استان محل سکونت" />
          </Form.Item>
        </Col>
        <Col xs={24} lg={8}>
          <Form.Item
            name='city'
            label="شهر محل سکونت"
            rules={[
              {
                required: true,
                message: 'فیلد اجباری می باشد',
              },
            ]}
          >
            <Input placeholder="شهر محل سکونت" />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24} className="mt-5">
        <Col xs={24} lg={24}>
          <Form.Item
            name='address'
            label="آدرس محل سکونت"
          >
            <Input.TextArea placeholder="آدرس محل سکونت" />
          </Form.Item>
        </Col>
      </Row>
    </Card>

  )
}

export default Basic;