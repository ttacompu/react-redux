import React from "react";
import { connect } from 'react-redux';
import {addTodoAction} from '../actions';


let AddTodo = ({dispatch}) =>{
    let input;
    
    return (
        <div>
             <input  ref={(node)=>{input = node}} />
             <button onClick={()=>{ 
                 if(input.value){
                    dispatch(addTodoAction(input.value)); 
                    input.value=""
                 }
                    }}>Add</button>
        </div>
    )
}

AddTodo =  connect()(AddTodo);

export  default AddTodo;