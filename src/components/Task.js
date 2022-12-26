import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { remTask } from "../JS/Actions/action";
import { useDispatch } from "react-redux";
import { TogTask } from "../JS/Actions/action";
import { useNavigate } from "react-router-dom";

function Task({ el }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <div className="todo-item">
        <div className="todo-item d-flex bd-highlight align-items-center p-0 m-0">
          <input
            className="checker p-2 bd-highlight align-self-center"
            type="checkbox"
            checked={el.status}
            onChange={() => dispatch(TogTask(el.id))}
          />
          <p className="p-2 bd-highlight">{el.task}</p>
          <p className="user p-2 bd-highlight">{el.user}</p>
          <div
            className=" ms-auto p-2 bd-highlight pointeur d-flex"
          >
            <div className="p-2 m-1 icon-close edit-todo-item" onClick={()=>navigate(`/edit/${el.id}`)}>
              <FontAwesomeIcon icon={faEdit}  />
            </div>
            <div className="icon-close remove-todo-item p-2 m-1"  onClick={() => dispatch(remTask(el.id))}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
