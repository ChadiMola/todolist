import { useDispatch } from "react-redux";
import { allTasks, doneTasks, searshTask, undoneTasks } from "../JS/Actions/action";

function Filter() {
  const dispatch = useDispatch()
return (
      <ul className="nav todo-nav">
                <li className="nav-item all-task active nav-link pointeur" onClick={()=>dispatch(allTasks())}>All</li>
                <li className="nav-item active-task nav-link pointeur" onClick={()=>dispatch(undoneTasks())}>Active</li>
                <li className="nav-item completed-task nav-link pointeur"onClick={()=>dispatch(doneTasks())}>Completed</li>
                <li className="ms-auto p-2 bd-highlight"><input onChange={(e)=>dispatch(searshTask(e.target.value))} type="text" className="form-control" placeholder="Search by Task or User"/></li>
              </ul>
  
  );
}
export default Filter;
