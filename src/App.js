import "./App.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Content from "./components/Content";
import CustInput from "./components/CustomInput";
import CustomButton from "./components/CustomButton";
import Swal from "sweetalert2";

function App() {
  const [value, setValue] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [todo, setTodo] = React.useState([]);
  const onCheckHandler = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
    const check = todo.find((item) => item.id === id);

    console.log(check);
    if (check && check.isCompleted) {
      Swal.fire({
        icon: "success",
        title: "Task re-activated successful",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Task Completed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const onDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setTodo((prevTodo) => prevTodo.filter((item) => item.id !== id));
        Swal.fire({
          title: "Deleted!",
          text: "Your Task has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // console.log(todo);
  React.useEffect(() => {
    if (isButtonClicked) {
      const lastId = todo.length > 0 ? todo[todo.length - 1].id : 0;
      // console.log(lastId?lastId+1:1,"vaibhavjnskjnksnajdndjhd");
      let newItem = {
        id: lastId ? lastId + 1 : 1,
        text: value,
        isCompleted: false,
      };
      // console.log(newItem, "new item");

      setTodo([...todo, newItem]);
      Swal.fire({
        icon: "success",
        title: "New task added successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
      setValue("");
      setIsButtonClicked(false);
    }
  }, [isButtonClicked, todo, value]);

  return (
    <div className="app-component">
      <div className="container">
        <div className="input-value d-flex justify-content-center w-100">
          <CustInput value={value} setValue={setValue} />
          <CustomButton isButtonClicked={setIsButtonClicked} />
        </div>
        <div className="customTabs ">
          <Tabs
            defaultActiveKey="All"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="All" title="All">
              <Content
                items={todo}
                onCheck={onCheckHandler}
                onDelete={onDeleteHandler}
              />
            </Tab>
            <Tab eventKey="Active" title="Active">
              <Content
                items={todo.filter((val) => val.isCompleted === false)}
                onCheck={onCheckHandler}
                onDelete={onDeleteHandler}
              />
            </Tab>
            <Tab eventKey="Completed" title="Completed">
              <Content
                items={todo.filter((val) => val.isCompleted === true)}
                onCheck={onCheckHandler}
                onDelete={onDeleteHandler}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
