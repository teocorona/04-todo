import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('Aprender JS');
// const tarea2 = new Todo('Aprender JSSSSSS');

// todoList.nuevoTodo( tarea);
// todoList.nuevoTodo( tarea2);



// crearTodoHtml (tarea);
// crearTodoHtml (tarea2);

// todoList.todos.forEach( todo => crearTodoHtml(todo));
todoList.todos.forEach(  crearTodoHtml ); 
//es igual a la funcion de arriba porque el primer argumento es el mismo de la funcion callback

console.log( 'todos', todoList.todos)

