import React from 'react'
import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom';
import { removeTodoListsRequest,removeTodoListsFailure, removeTodoListsSuccess, toggleTodoListsFailure, toggleTodoListsRequest, toggleTodoListsSuccess } from '../Redux/action';
import axios from "axios"
const SingleTodo = () => {
    const todos=useSelector(state=>state.todos);
    const dispatch=useDispatch();
    const {id}=useParams();
    const [currentTodo,setCurrentTodo]=useState({});
       

    
    const toggleStatus=(id,newStatus)=>{
        dispatch(toggleTodoListsRequest());
        axios.patch(`/todos/${id}`,{status:newStatus})
        .then((r)=>dispatch(toggleTodoListsSuccess(r.data)))
        .catch((e)=>dispatch(toggleTodoListsFailure(e)));

    };
    const removeTodo=(id)=>{
        dispatch(removeTodoListsRequest());
        axios
        .delete(`/todos/${id}`)
        .then((r)=>{
            dispatch(removeTodoListsSuccess(id));
            navigate("./")
        })
        .catch((e)=>dispatch(removeTodoListsFailure(e )));
    }

    useEffect(()=>{
        let currentTodo=todos.find((item)=>item.id ===Number(id));
        currentTodo && setCurrentTodo(currentTodo);

    },[todos,id])
  return (
    <div><h3>
        {currentTodo?.title}{currentTodo?.status ? "True" :"False"}
        </h3>
        <button onClick={()=>toggleStatus(currentTodo.id,!currentTodo.status)}>Toggle</button>
        <button onClick={()=>removeTodo(currentTodo.id)}>Remove</button>
        </div>
  )
}

export default SingleTodo