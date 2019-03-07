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

export const fetchTodos = (filter)=> delay(500).then( () =>{
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