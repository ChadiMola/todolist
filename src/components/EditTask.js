import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { editTask } from "../JS/Actions/action";

function EditTask() {
  const [task, setTask] = useState("");
  const [user, setUser] = useState("");
  const { id } = useParams();
  const taskEdit = useSelector(state => state.data).find(el => el.id == id);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleClick = () => {
   dispatch(editTask(id,task,user))
   navigate("/")
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <input
                    type="text"
                    className="form-control add-task m-1"
                    placeholder={taskEdit.task}
                    onChange={e => setTask(e.target.value)}
                  />
                  <input
                    type="text"
                    className="form-control add-task m-1 "
                    placeholder={taskEdit.user}
                    onChange={e => setUser(e.target.value)}
                  />
                  <button
                    type="button"
                    className="m-1 btn btn-success"
                    onClick={handleClick}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="m-1 btn btn-danger"
                    onClick={()=>navigate("/")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTask;
