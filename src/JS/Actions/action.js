import { ADD_TASK} from "../Constants/actions-types";

export const addPost = newPost => {
    return {
        type: ADD_TASK,
        payload: newPost
    }
}