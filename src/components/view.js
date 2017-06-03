import html from 'choo/html'
import css from './view.css'
import formEl from './form'
import todoEl from './todo'

export default ({todos, form}, emit) => {
  const activeTodos = (todos.upcoming) ? todos.data.filter((todo) => !todo.complete) : todos.data.filter((todo) => todo.complete)
  return html`<div class=${css.root}>
    ${headerEl(todos.upcoming, emit)}

    <main class=${css.todos}>
      ${activeTodos.map((todo) => todoEl(todo, emit))}
    </main>

    ${footerEl()}
    ${formEl(form, emit)}
  </div>`
}

const headerEl = (upcoming, emit) => html`
  <header>
    <h1>ToDo 4</h1>
    <div class="button-group">
      <button onclick=${() => emit('form:toggle')}>New Todo</button>
      <button onclick=${() => emit('todos:toggle')}>${(upcoming) ? 'Complete Todos' : 'Upcoming Todos'}</button>
    </div>
  </header>`

const footerEl = () => html`
  <footer>
    <small>Todo 4</small>
    <small>©2017</small>
  </footer>`
