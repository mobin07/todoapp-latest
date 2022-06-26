import * as types from "./actiontype";


const getTodoListsRequest=()=>{
    return {type:types.GET_TODO_LISTS_REQUEST}
}
const getTodoListsSuccess=(payload)=>{
    return {type:types.GET_TODO_LISTS_SUCCESS,payload:payload}
};
const getTodoListsFailure=()=>{
    return {type:types.GET_TODO_LISTS_FAILURE}

}

const addTodoListsRequest=()=>{
    return {type:types.ADD_TODO_LISTS_REQUEST}
}
const addTodoListsSuccess=(payload)=>{
    return {type:types.ADD_TODO_LISTS_SUCCESS,payload}
};
const addTodoListsFailure=()=>{
    return {type:types.ADD_TODO_LISTS_FAILURE}

}

const toggleTodoListsRequest=()=>{
    return {type:types.TOGGLE_TODO_LISTS_REQUEST}
}
const toggleTodoListsSuccess=(payload)=>{
    return {type:types.TOGGLE_TODO_LISTS_SUCCESS,payload}
};
const toggleTodoListsFailure=()=>{
    return {type:types.TOGGLE_TODO_LISTS_FAILURE}

}

const removeTodoListsRequest=()=>{
    return {type:types.REMOVE_TODO_LISTS_REQUEST}
}
const removeTodoListsSuccess=(payload)=>{
    return {type:types.REMOVE_TODO_LISTS_SUCCESS,payload}
};
const removeTodoListsFailure=()=>{
    return {type:types.REMOVE_TODO_LISTS_FAILURE}

}

export {getTodoListsFailure,getTodoListsSuccess,getTodoListsRequest,
    addTodoListsRequest,addTodoListsFailure,addTodoListsSuccess,
toggleTodoListsRequest,toggleTodoListsSuccess,toggleTodoListsFailure,
removeTodoListsRequest,removeTodoListsSuccess,removeTodoListsFailure};