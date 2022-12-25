import Task from "./Task";
function TaskList({tasks,removeTask,doneTask}) {
  return (
    <div className="todo-list">
                {tasks.map(el=><Task removeTask={removeTask} doneTask={doneTask} key={el.id} el={el}/>)}
              </div>
  );
}
export default TaskList;
