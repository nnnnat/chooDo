import html from 'choo/html'
// components
import form from './form'
import todo from './todo'
// css
import css from './view.css'

export default ({upcoming, todos, appName, formFields}, emit) => {
  const activeTodos = (upcoming) ? todos.filter((todo) => !todo.complete) : todos.filter((todo) => todo.complete)
  return html`<div class=${css.root}>
    ${header(emit)}
    <main class=${css.todos}>
      ${activeTodos.map((tData) => todo(tData, emit))}
    </main>
    ${footer()}
    <section class=${css.modal}>
      ${form(formFields, emit)}
    </section>
  </div>`
}

const header = (emit) => html`
  <header>
    <h1>ToDo 4</h1>
    <button onclick=${() => emit('todos:toggle')}>toggle</button>
  </header>`

const footer = () => html`
  <footer>
    <small>Todo 4 2017</small>
  </footer>`
