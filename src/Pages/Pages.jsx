import React from 'react';
import {Route,Routes} from "react-router-dom"
import HomePage from './HomePage';
import SingleTodo from './SingleTodo';
const Pages = () => {
  return (
    
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/todo/:id" element={<SingleTodo/>}/>

    </Routes>
  )
}

export default Pages