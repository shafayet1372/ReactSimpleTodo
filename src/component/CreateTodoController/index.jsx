import React from "react";
import { Row } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import customizedToast from "../../js/customizeToast";
import CreateTodoForm from "../Form";
export default function Index({ getData }) {
  let randomColorGenerate = () => {
    const colors = ["info", "danger", "success", "warning", "primary"];
    let bgcolors = colors[Math.floor(Math.random() * colors.length)];
    return bgcolors;
  };

  let createTodo = (todosValue) => {
    let todo = {};
    todo.id = uuidv4();
    todo.title = todosValue;
    todo.color = randomColorGenerate();
    return todo;
  };
  let errorMessage = () => {
    toast("The field is empty! ", customizedToast("error"));
  };
  let successMessage = () => {
    toast("Todo created successfully ", customizedToast("success"));
  };
  let getValue = (todosValue) => {
    let todo = createTodo(todosValue);
    getData(todo);
    successMessage();
  };

  return (
    <Row>
      <CreateTodoForm
        placeholder="add your todo..."
        mode="create"
        getValue={getValue}
      />
    </Row>
  );
}
