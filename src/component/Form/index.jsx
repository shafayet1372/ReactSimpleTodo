import React from "react";
import { Col, Input, Button } from "reactstrap";
import { IoAdd } from "react-icons/io5";
import { MdSecurityUpdateGood } from "react-icons/md";
import { toast } from "react-toastify";
import { useState } from "react";
import customizedToast from "../../js/customizeToast";
export default function Index({ getValue, placeholder, mode, ...rest }) {
  let [todosValue, setTodosValue] = useState(
    mode == "update" ? rest.todosValue : ""
  );
  let changeHandle = (e) => {
    setTodosValue((p) => e.target.value);
  };
  let errorMessage = () => {
    toast("The field is empty! ", customizedToast("error"));
  };
  let submitHandle = () => {
    if (!todosValue) {
      errorMessage();
      return;
    } else {
      if (mode == "create") {
        getValue(todosValue);
        setTodosValue("");
        return;
      }
      getValue(todosValue);
    }
  };
  return (
    <Col className="d-flex">
      <Input
        placeholder={placeholder}
        value={todosValue}
        onChange={changeHandle}
      />
      <Button color="success" onClick={submitHandle}>
        {mode == "create" ? (
          <IoAdd style={{ color: "white" }} />
        ) : (
          <MdSecurityUpdateGood style={{ color: "white" }} />
        )}
      </Button>
    </Col>
  );
}
