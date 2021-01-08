import React, { useState, useEffect } from "react";
import { Form, Row, Col, Input, Select } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import './index.scss'

const { Option } = Select;

const AddSkills = (props) => {
  const [rowsArray, setRowsArray] = useState([]);

  useEffect(() => {
  }, [rowsArray])

  const add = async () => {
    setRowsArray(prevRows => {
      const newRow = htmlMarkup(prevRows.length + 1);
      const newRows = [...prevRows, newRow]
      return newRows;
    })
  }

  const remove = (e, num) => {
    setRowsArray(prevRows => {
      const rows = [...prevRows];
      delete rows[num];
      return rows;
    })
  }

  const htmlMarkup = number => {
    return (
      <Row className={`addBox-wrapper number-${number}`} key={number}>
        <Col xs={24}>
          {number !== 0 &&
            <Row className="mb-3 d-flex align-items-center">
              <Col xs={24} lg={12}>
                <FontAwesomeIcon
                  className="addBox-wrapper__icon addBox-wrapper__minus"
                  icon={faMinusCircle}
                  onClick={(e) => remove(e, number - 1)}
                />
              </Col>
              <Col xs={12}></Col>
            </Row>}
          <Row gutter={24} className="mt-5">
            <Col xs={24} lg={12}>
              <Form.Item
                label={`skillName-${number}`}
                label="نام مهارت"
                rules={[
                  {
                    required: true,
                    message: 'فیلد اجباری می باشد',
                  },
                ]}
              >
                <Input placeholder="نام مهارت" />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label={`skillLevel-${number}`}
                label="سطح"
                rules={[
                  {
                    required: true,
                    message: 'فیلد اجباری می باشد',
                  },
                ]}
              >
                <Select defaultValue="beginner" >
                  <Option value="beginner">مبتدی</Option>
                  <Option value="intermediate">متوسط</Option>
                  <Option value="advanced">
                    پیشرفته
                  </Option>
ز                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }

  return (
    <Row className="addBox-wrapper">
      <Col xs={24}>
        <Row className="mb-3 d-flex align-items-center">
          <Col xs={24} lg={12}>
            {/* <h4 className="addBox-wrapper__title">
              پیوست فایل (ها)
            </h4> */}
          </Col>
          <Col xs={24} lg={12} className="d-flex justify-content-end">
            <FontAwesomeIcon
              className="addBox-wrapper__icon"
              icon={faPlusCircle}
              onClick={add}
            />
          </Col>
        </Row>
        <>
          {htmlMarkup(0)}
          {rowsArray.map(item => item)}
        </>
      </Col>
    </Row>
  );
}

export default AddSkills;