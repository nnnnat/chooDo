import html from 'choo/html'
import css from './todo.css'
import { pDate } from '../scripts/helper'

export default (todo, emit, i) =>
  html`<div class=${css.root} id=${todo.id} style="animation-delay: ${50 - (i * 5)}0ms;">
    <div class=${css.info}>
      <h2><b>Due:</b> ${pDate(todo.due)}</h2>
      <p>${todo.title}</p>
      <div class="group">
        <button class="secondary" onclick=${() => emit('form:edit', todo)}>Edit</button>
        <button class="secondary" onclick=${() => emit('todo:delete', todo)}>Delete</button>
      </div>
    </div>
    <button class="primary" onclick=${() => emit('todo:primary', todo)}>${(todo.complete) ? 'Undo' : 'Done'}</button>
  </div>`
