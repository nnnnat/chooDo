import html from 'choo/html'
import css from './globals.css'
import todoEl from './todo'

// header component
export const headerEl = (upcoming, emit) =>
  html`<header class=${css.header} >
    <h1>choo Do</h1>
    <div class="group">
      <button onclick=${() => emit('form:toggle')}>New Todo</button>
      <button onclick=${() => emit('todos:toggle')}>${(upcoming) ? 'Completed Todos' : 'Upcoming Todos'}</button>
    </div>
  </header>`

// main component
export const mainEl = (todos, emit) => {
  const noTodos = html`<h2 style="margin: auto;">No Todos</h2>`
  return html`<main class=${css.main}>
    ${(todos.length === 0) ? noTodos : todos.map((todo, i) => todoEl(todo, emit, i))}
  </main>`
}

// footer component
export const footerEl = () =>
  html`<footer class=${css.footer}>
    <small>choo Do</small>
    <small>2017</small>
  </footer>`

// loading component
export const loadingEl = () =>
  html`<svg class=${css.loader} x="0px" y="0px" viewBox="0 0 150 150">
    <circle class=${css.loaderDash} cx="75" cy="75" r="60"/>
  </svg>`
