import html from 'choo/html'
import css from './view.css'
import { headerEl, mainEl, footerEl, loadingEl } from './globals'
import formEl from './form'

export default ({ todos: { loaded, upcoming, data }, form }, emit) => {
  const todos = data.filter((todo) => !todo.complete === upcoming)
  return html`<div class=${css.root}>
    ${headerEl(upcoming, emit)}
    ${(loaded) ? mainEl(todos, emit) : loadingEl()}
    ${footerEl()}
    ${formEl(form, emit)}
  </div>`
}
