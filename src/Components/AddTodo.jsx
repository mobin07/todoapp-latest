import React,{useState} from 'react'
import { addTodoListsFailure, addTodoListsRequest, addTodoListsSuccess } from '../Redux/action';
import axios from "axios"
import {useDispatch} from "react-redux"
const AddTodo = () => {
  const dispatch=useDispatch();

    const[todo,setTodo]=useState("");
    const addTodo=(payload)=>{
        dispatch(addTodoListsRequest());
        axios
        .post("http://localhost:8080/todos",payload)
        .then((r)=>dispatch(addTodoListsSuccess(r.data)))
        .catch((e)=>dispatch(addTodoListsFailure(e)));
    };

    const handleAdd=()=>{
      
        // if(todo){
            const payload={title:todo,status:false}
            addTodo(payload);
            setTodo("");
        // }
    }
  return (
    <div>AddTodo
     <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Add text here.." />   
    <button onClick={handleAdd}>Add</button>
    </div>
  )

}

export default AddTodo
