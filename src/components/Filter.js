import { useDispatch } from "react-redux";
import { allTasks, doneTasks, undoneTasks } from "../JS/Actions/action";

function Filter({showAll}) {
  const dispatch = useDispatch()
return (
      <ul className="nav  todo-nav">
                <li className="nav-item all-task active nav-link pointeur" onClick={()=>dispatch(allTasks())}>All</li>
                <li className="nav-item active-task nav-link pointeur" onClick={()=>dispatch(undoneTasks())}>Active</li>
                <li className="nav-item completed-task nav-link pointeur"onClick={()=>dispatch(doneTasks())}>Completed</li>
                <li className="ms-auto p-2 bd-highlight"><input type="text" className="form-control" placeholder="Search"/></li>
              </ul>
  
  );
}
export default Filter;
