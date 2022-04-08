import React, { useState } from "react";
import style from ".././style.module.css";
import customizedToast from "../js/customizeToast";
import { Container } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import CreateTodoController from "./CreateTodoController";
import TitleImage from "./TitleImage";
import DataView from "./DataView";
const ManualData = [
  {
    id: uuidv4(),
    title: "shopping",
    color: "info",
  },
  { id: uuidv4(), title: "watching Movie ", color: "danger" },
];
export default function Master() {
  let [datas, setDatas] = useState([...ManualData]);

  let getDate = (data) => {
    setDatas((p) => [data, ...datas]);
  };
  let deleteTodo = (id) => {
    setDatas(datas.filter((x) => x.id != id));
    toast("Todos deleted succesfully", customizedToast("info"));
  };

  let updateHandle = (id, value) => {
    setDatas(datas.map((x) => (x.id == id ? { ...x, title: value } : x)));
    toast("Todo was succesfully updated", customizedToast("success"));
  };
  return (
    <Container
      className={`d-flex  align-items-center flex-wrap justify-content-center ${style["container-height"]}`}
    >
      <div className={style["master"]}>
        <Container fluid="md">
          <TitleImage />
          <CreateTodoController getData={getDate} />
          <DataView
            datas={datas}
            deleteHandle={deleteTodo}
            getData={updateHandle}
          />
        </Container>
      </div>
      <ToastContainer />
    </Container>
  );
}
