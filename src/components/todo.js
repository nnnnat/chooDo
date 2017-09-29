import html from 'choo/html'
import css from './todo.css'
import { pDate } from '../scripts/helper'

export default (todo, emit, i) => {
  const secondaryBtn = html`<div class="group">
    <button class="secondary" onclick=${() => emit('form:edit', todo)}>Edit</button>
    <button class="secondary" onclick=${() => emit('todo:delete', todo)}>Delete</button>
  </div>`

  return html`<div class=${css.root} id=${todo.id} style="animation-delay: ${50 - (i * 5)}0ms;">
    <div class=${css.info}>
      <h2><b>Due:</b> ${pDate(todo.due)}</h2>
      <p>${todo.title}</p>
      ${(!todo.complete) ? secondaryBtn : ''}
    </div>
    <button class="primary" onclick=${() =>
      emit('todo:primary', { id: todo.id, title: todo.title, due: todo.due, complete: !todo.complete })}>
      ${(todo.complete) ? 'Undo' : 'Done'}
    </button>
  </div>`
}
