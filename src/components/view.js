import html from 'choo/html'
import css from './view.css'
import { headerEl, mainEl, footerEl } from './globals'
import formEl from './form'

export default ({todos, form}, emit) => {
  const activeTodos = (todos.upcoming) ? todos.data.filter((todo) => !todo.complete) : todos.data.filter((todo) => todo.complete)
  return html`<div class=${css.root}>
    ${headerEl(todos.upcoming, emit)}
    ${mainEl(activeTodos, emit)}
    ${footerEl()}
    ${formEl(form, emit)}
  </div>`
}
