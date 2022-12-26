import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const tasks = useSelector(state => state.data)
  const filter = useSelector(state => state.filtredData)
 return (
    <div className="todo-list">
                {filter =='ALL'?tasks.map(el=><Task key={el.id} el={el}/>):filter=='done'?tasks.filter(el=>el.status==true).map(el=><Task key={el.id} el={el}/>):tasks.filter(el=>el.status==false).map(el=><Task key={el.id} el={el}/>)}
              </div>
  );
}
export default TaskList;
