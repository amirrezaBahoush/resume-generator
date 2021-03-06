import React, { useState } from 'react';
import './App.scss';
import { Col, Row, Typography, Steps, Button, message, Form } from 'antd';
import Basic from './screens/Basic';
import Experience from './screens/Experience';
import Education from './screens/Education';
import Skills from './screens/Skills';

const { Title } = Typography;
const { Step } = Steps;

function App() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1)
  }

  const steps = [
    {
      title: 'مرحله ی اول',
      content: <Basic />,
    },
    {
      title: 'مرحله ی دوم',
      content: <Experience />,
    },
    {
      title: 'مرحله ی سوم',
      content: <Education />,
    },
    {
      title: 'مرحله ی نهایی',
      content: <Skills />,
    }
  ];
  return (
    <div className="resume__wrapper">
      <Row justify="center">
        <Col xs={24} className="resume__titleWrapper text-center">
          <Title level={1}>Welcome To Resume Generator</Title>
        </Col>
      </Row>
      <Row>
        <Col className="resume__steps" >
          <Steps current={current} direction="vertical" responsive={true} onChange={setCurrent}>
            {steps.map(item => (
              <Step key={item.title} title={item.title} />
            ))}
          </Steps>
          <Form
            layout="vertical"
            name="advanced_search"
            className="ant-advanced-search-form"
          // onFinish={onFinish}
          >
            <div className="steps-content">{steps[current].content}</div>
          </Form>
        </Col>
      </Row>
      <Row justify="center" className="resume__btnWrapper">
        <Col>
          <div className="steps-action">
          {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                قبلی
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('پردازش با موفقیت به پایان رسید!')}>
                خروجی PDF
              </Button>
            )}
              {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                بعدی
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;