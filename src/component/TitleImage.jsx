import React from "react";
import style from "../style.module.css";
import { Row, Col } from "reactstrap";
export default function Title() {
  return (
    <Row className="text-center">
      <Col>
        {" "}
        <img src="image/todo.png" alt="" className={`img-fluid ${style.img}`} />
      </Col>
    </Row>
  );
}
