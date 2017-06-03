import html from 'choo/html'
import css from './todo.css'
import { prettyDate } from '../scripts/helpers'

export default (todo, emit) => html`
  <div class=${css.root} id=${todo.id}>
    <div class=${css.info}>
      <h2><b>Due:</b> ${prettyDate(todo.dueDate)}</h2>
      <p>${todo.title}</p>
      <div class="button-group">
        <button class="secondary" onclick=${() => emit('form:edit', todo)}>Edit</button>
        <button class="secondary" onclick=${() => emit('todo:delete', todo)}>Delete</button>
      </div>
    </div>
    <button class="primary" onclick=${() => emit('todo:primary', todo)}>${(todo.complete) ? 'Undo' : 'Done'}</button>
  </div>`
