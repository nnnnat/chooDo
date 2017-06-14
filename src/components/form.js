import html from 'choo/html'
import css from './form.css'
import { guid } from '../scripts/helper'

// todays date in yyyy-mm-dd format
const today = (new Date()).toISOString().slice(0, 10)

export default ({ active, edit, inputs: { title, due } }, emit) => {
  const submit = (e) => {
    e.preventDefault()
    if (edit) emit('todo:edit', { id: edit, title, due, complete: false })
    else emit('todo:create', { id: guid(), title, due, complete: false })
  }

  return html`<section class=${css.root} data-active=${active}>
    <form onsubmit=${submit}>

      <label for="title">Todo</label>
      <input type="text" name="title"
        autocomplete="off"
        placeholder="Task"
        value=${title}
        oninput=${(e) => emit('form:input', e.target)}
        onblur=${(e) => emit('form:input', e.target)} />
      <span class="error"></span>

      <label for="due">Due</label>
      <input type="date" name="due"
        placeholder="yyyy-mm-dd"
        min=${today}
        pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
        value=${due}
        oninput=${(e) => emit('form:input', e.target)}
        onblur=${(e) => emit('form:input', e.target)} />
      <span class="error"></span>

      <div className="group">
        <button class="invert" type="submit">${(edit) ? 'Edit' : 'Add'}</button>
        <button class="invert" type="reset" onclick=${() => emit('form:clear')}>Cancel</button>
      </div>

    </form>
  </section>`
}
