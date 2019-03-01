
import React from "react";
import AddTodo from './AddTodo';
import TodoListContainer from './TodoListContainer';
import Pager from './Pager'

const App = () => (
    <div>
            <AddTodo  />
            <TodoListContainer  />
            <Pager   />
    </div>
)

export default App;