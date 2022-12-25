function Filter({filter,showAll,search}) {
return (
      <ul className="nav  todo-nav">
                <li className="nav-item all-task active nav-link pointeur" onClick={()=>showAll()}>All</li>
                <li className="nav-item active-task nav-link pointeur" onClick={()=>filter(false)}>Active</li>
                <li className="nav-item completed-task nav-link pointeur"onClick={()=>filter(true)}>Completed</li>
                <li className="ms-auto p-2 bd-highlight"><input type="text" className="form-control" placeholder="Search"/></li>
              </ul>
  
  );
}
export default Filter;
