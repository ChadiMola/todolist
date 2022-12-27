import { useSelector } from "react-redux";
import Task from "./Task";

function TaskList() {
  const search = useSelector(state => state.search)
  const tasks = useSelector(state => state.data).filter(el =>el.task.toLowerCase().includes(search)||el.user.toLowerCase().includes(search))
  const filter = useSelector(state => state.filtredData)
 return (
    <div className="todo-list">
                {filter =='ALL'?tasks.map(el=><Task key={el.id} el={el}/>):filter=='done'?tasks.filter(el=>el.status==true).map(el=><Task key={el.id} el={el}/>):tasks.filter(el=>el.status==false).map(el=><Task key={el.id} el={el}/>)}
              </div>
  );
}
export default TaskList;
