import { v4} from 'uuid';
const delay = (ms)=> new Promise((resolve) =>  setTimeout(resolve,ms) )
const fakeDatabase ={
    todos : [
        {
            id : v4(),
            text : 'first one',
            completed : false
        },
        {
            id : v4(),
            text : 'second one',
            completed : true
        },
        {
          id : v4(),
          text : 'third one',
          completed : true
      }
    ]
}

export const fetchTodos = (filter)=> delay(3000).then( () =>{
    if(Math.random() > 0.5){
      throw new Error('Boom!')
    }
    
    switch (filter) {
        case 'all':
          return fakeDatabase.todos;
        case 'active':
          return fakeDatabase.todos.filter(t => !t.completed);
        case 'completed':
          return fakeDatabase.todos.filter(t => t.completed);
        default:
          throw new Error(`Unknown filter: ${filter}`);
      }
});

export const addTodo = (text) =>
  delay(500).then(() =>{
    const todo ={
      id : v4(),
      text,
      completed : false
    }
    fakeDatabase.todos.push(todo);
    return todo;
  })

export const toggleTodo = (id) =>
  delay(500).then(() =>{
     const todo = fakeDatabase.todos.find(t => t.id === id)
     todo.completed = !todo.completed;
     return todo;
  })
