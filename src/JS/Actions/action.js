import { ADD_TASK, DONE_TASKS, UNDONE_TASKS,REMOVE_TASK,TOGGLE_TASK, ALL_TASKS,EDIT_TASK, SEARSH_TASK} from "../Constants/action-types";

export const addTask= (id,task,user) => {
    return {
        type: ADD_TASK,
        payload: {id,task, user,status:false}
    }
}
export const remTask= remTask => {
    return {
        type: REMOVE_TASK,
        payload: remTask
    }
}
export const TogTask= Task => {
    return {
        type: TOGGLE_TASK,
        payload: Task
    }
}
export const doneTasks =()=>{
    return{
        type: DONE_TASKS,
        payload: 'done'
    }
}
export const undoneTasks =()=>{
    return{
        type: UNDONE_TASKS,
        payload:'undone'
    }
}
export const allTasks =()=>{
    return{
        type: ALL_TASKS,
        payload:'ALL'
    }
}
export const editTask=(id,task,user)=>{
    return{
        type: EDIT_TASK,
        payload:{id,task,user}
    }
}
export const searshTask=(payload)=>{
    return{
        type:SEARSH_TASK,
        payload
    }
}