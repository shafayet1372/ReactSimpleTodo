import React from "react";
import style from "../style.module.css";
import { Row, Col } from "reactstrap";
import image from "../image/todo.png";
export default function Title() {
  return (
    <Row className="text-center">
      <Col>
        <img src={image} alt="sadsadsad" className={`${style.img} img-fluid`} />
      </Col>
    </Row>
  );
}
