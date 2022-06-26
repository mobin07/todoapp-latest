import React from 'react';
import {Link} from "react-router-dom"

const TodoLists = ({todoLists}) => {
  return (
    <div>
        {todoLists.map((item)=>{
            return (
                <div>
                    <Link><div key={item.id}>{item.title}</div></Link>
               
                </div>
            )
        })}

    </div>
  )
}

export default TodoLists