import { useState } from "react";
import { useDispatch } from "react-redux";
function AddTask({ addTask }) {
  const [task, setTask] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control add-task m-1"
          placeholder="New Task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          className="form-control add-task m-1 "
          placeholder="User"
          onChange={(e) => setUser(e.target.value)}
        />
        <button
          type="button"
          className="m-1 btn btn-success"
          onClick={task && user?() => dispatch({type:"ADD_TASK",payload:{id:5,task, user,status:false}}):null}
        >
          Add
        </button>
      </div>
    </>
  );
}
export default AddTask;
