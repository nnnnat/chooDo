import html from 'choo/html'
import todoEl from './todo'

// header component
export const headerEl = (upcoming, emit) =>
  html`<header>
    <h1>ToDo 4</h1>
    <div class="group">
      <button onclick=${() => emit('form:toggle')}>New Todo</button>
      <button onclick=${() => emit('todos:toggle')}>${(upcoming) ? 'Complete Todos' : 'Upcoming Todos'}</button>
    </div>
  </header>`

// main component
export const mainEl = (todos, emit) =>
  html`<main>
    ${todos.map((todo, i) => todoEl(todo, emit, i))}
  </main>`

// footer component
export const footerEl = () =>
  html`<footer>
    <small>Todo 4</small>
    <small>2017</small>
  </footer>`
