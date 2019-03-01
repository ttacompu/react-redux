import React from "react";

const TodoItem = ({completed, text, onClick })=>(
    <li style={{textDecoration : completed ? 'line-through' : 'none', cursor : 'pointer'}} onClick={onClick}>{text}</li>
)

export default TodoItem;