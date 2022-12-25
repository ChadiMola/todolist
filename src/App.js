import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Filter from "./components/Filter";
import { useEffect, useState } from "react";

import data from "./data";
import { useSelector } from "react-redux";

function App() {
  const tasksz = useSelector(state => state.data)
  const [tasks, setNewTasks] = useState(data);
  const [show, setShow] = useState(tasks);
  const addTask = (task, user) => {
    setNewTasks([
      ...tasks,
      { id: tasks.length + 1, task: task, user: user, status: false },
    ]);
  };
  const removeTask = (e) => {
    setNewTasks(tasks.filter((el) => el.id !== e));
  ;
  };
  const filter = (act) => {
    act
      ? setShow(tasks.filter((el) => el.status === true))
      : setShow(tasks.filter((el) => el.status === false));
  };
  const doneTask = (e) => {
    setNewTasks(
      [...tasks, (tasks[e - 1].status = !tasks[e - 1].status)].slice(
        0,
        tasks.length
      )
    );
  };
  const showAll = () => setShow(tasks);

useEffect(() => {
  setShow(tasks)

}, [tasks])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <AddTask/>
              <Filter filter={filter} showAll={showAll} />
              <TaskList
                tasks={tasksz}
                doneTask={doneTask}
                removeTask={removeTask}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
