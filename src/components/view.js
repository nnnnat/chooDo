import html from 'choo/html'
import css from './view.css'
import { headerEl, mainEl, footerEl, loader } from './globals'
import formEl from './form'

export default ({ todos: { loaded, upcoming, data }, form }, emit) => {
  const activeTodos = (upcoming) ? data.filter((todo) => !todo.complete) : data.filter((todo) => todo.complete)
  return html`<div class=${css.root}>
    ${headerEl(upcoming, emit)}
    ${(loaded) ? mainEl(activeTodos, emit) : loader() }
    ${footerEl()}
    ${formEl(form, emit)}
  </div>`
}
