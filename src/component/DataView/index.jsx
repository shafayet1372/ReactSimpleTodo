import React, { useState } from "react";
import { Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars-2";
import { AiFillEdit } from "react-icons/ai";
import { MdAutoDelete } from "react-icons/md";
import style from "../../style.module.css";
import UpdateTodoForm from "../Form";

export default function Index({ datas, deleteHandle, getData }) {
  let [editId, setEditId] = useState(null);

  let editHandle = (id) => {
    setEditId(id);
  };

  let getUpdatedValue = (value) => {
    getData(editId, value);
    setEditId(null);
  };

  return (
    <Row className="my-5 overflow-hidden">
      <Col className="overflow-hidden">
        <Scrollbars style={{ height: 250, width: "100%" }}>
          <ListGroup>
            {datas.map((x) =>
              editId && editId == x.id ? (
                <ListGroupItem key={x.id} className="my-1">
                  <UpdateTodoForm
                    placeholder="update todo"
                    mode="update"
                    todosValue={x.title}
                    getValue={getUpdatedValue}
                  />
                </ListGroupItem>
              ) : (
                <ListGroupItem
                  key={x.id}
                  color={x.color}
                  className={`${style.listItem} my-1 d-flex justify-content-between`}
                >
                  <div>{x.title}</div>
                  <div>
                    <AiFillEdit
                      color="#0652DD"
                      size="1.5em"
                      className={`mx-2 ${style.iconHover}`}
                      onClick={() => editHandle(x.id)}
                    ></AiFillEdit>
                    <MdAutoDelete
                      onClick={() => deleteHandle(x.id)}
                      color="red"
                      size="1.5em"
                      className={`mx-2 ${style.iconHover}`}
                    />
                  </div>
                </ListGroupItem>
              )
            )}
          </ListGroup>
        </Scrollbars>
      </Col>
    </Row>
  );
}
