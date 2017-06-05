import html from 'choo/html'
import css from './form.css'
import { guid } from '../scripts/helpers'

export default ({ active, edit, inputs: { title, due } }, emit) => {
  const submit = (e) => {
    e.preventDefault()
    if (edit) emit('todo:edit', { id: edit, title, due, complete: false })
    else emit('todo:create', { id: guid(), title, due, complete: false })
  }

  return html`<section class=${css.root} data-active=${active}>
    <form onsubmit=${submit}>

      <label for="title">
        <span>Todo</span>
        <input type="text" name="title" autocomplete="off" placeholder="Task" value=${title} oninput=${(e) => emit('form:input', e.target)} />
        <span class="error"></span>
      </label>

      <label for="due">
        <span>Due</span>
        <input type="date" name="due" placeholder="mm-dd-yyyy" value=${due} oninput=${(e) => emit('form:input', e.target)} />
        <span class="error"></span>
      </label>

      <div className="group">
        <button class="invert" type="submit">${(edit) ? 'Edit' : 'Add'}</button>
        <button class="invert" type="reset" onclick=${() => emit('form:clear')}>Cancel</button>
      </div>

    </form>
  </section>`
}
