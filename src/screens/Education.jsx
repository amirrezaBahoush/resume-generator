import { Col, Input, Row, Form, Card } from 'antd';
import React from 'react';
import AddEducation from './components/AddEducation';

const Education = () => {

  return (

    <Card title="سوابق تحصیلی و مدارک" className="basic__card">
      <AddEducation />
    </Card>

  )
}

export default Education;
