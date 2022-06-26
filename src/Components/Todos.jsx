import React from 'react'
import { useEffect,useState} from 'react'
import { useDispatch } from 'react-redux'
import { getTodoListsFailure, getTodoListsRequest, getTodoListsSuccess } from '../Redux/action'
import AddTodo from './AddTodo'
import TodoLists from './TodoLists';
import axios from "axios"

const Todos = () => {
    const dispatch=useDispatch();
    const [todos,setTodos]=useState([])
    const getTodos=()=>{
        dispatch(getTodoListsRequest())
        axios
        .get("http://localhost:8080/todos")
        .then((r)=>{dispatch(getTodoListsSuccess(r.data));
        setTodos(r.data)})
        .catch((e)=>dispatch(getTodoListsFailure(e)));
        
    }
    useEffect(()=>{
        getTodos()
    },[])
    console.log(todos);
  return (
    <div>Todos
      <AddTodo/>
      <TodoLists  todoLists={todos}/>
    </div>
  )
}

export default Todos