import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

function Task({el,removeTask,doneTask}) {
  return (
    <> <div className="todo-item"><div className="todo-item d-flex bd-highlight p-0 m-0">
        <input
          className="checker p-2 bd-highlight align-self-center"
          type="checkbox"
          checked={el.status}
          onChange={()=>doneTask(el.id)}
        />
        <p className="p-2 bd-highlight">{el.task}</p><p className="user p-2 bd-highlight">{el.user}</p>
        <div className="icon-close remove-todo-item ms-auto p-2 bd-highlight pointeur" onClick={() => removeTask(el.id)}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
        </div>
        </div>
    </>
  );
}

export default Task;
