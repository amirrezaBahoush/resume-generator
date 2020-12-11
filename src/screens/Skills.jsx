import { Col, Input, Row, Form, Card } from 'antd';
import React from 'react';
import AddSkills from './components/AddSkills';


const Skills = () => {
  return (

    <Card title="مهارت ها" className="basic__card">
      <AddSkills />
    </Card>

  )
}

export default Skills;
