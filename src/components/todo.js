import html from 'choo/html'
import css from './todo.css'

export default (todo, emit) => html`
  <div class=${css.root} id=${todo.id}>
    <h2>${todo.title}</h2>
    <p>${todo.dueDate}</p>
    <button onclick=${() => emit('form:edit', todo)}>Edit</button>
    <button onclick=${() => emit('todo:delete', todo)}>Delete</button>
    <button onclick=${() => emit('todo:primary', todo)}>Done</button>
  </div>`
