import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Filter from "./components/Filter";
import { Route, Routes } from "react-router-dom";
import EditTask from "./components/EditTask";

function App() {
  return (
    
    <Routes>
      <Route path="/" element={<div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <AddTask/>
              <Filter/>
              <TaskList/>
            </div>
          </div>
        </div>
      </div>
    </div>}/>
    <Route path="/edit/:id" element={<EditTask/>}/>
    </Routes>
  );
}

export default App;
