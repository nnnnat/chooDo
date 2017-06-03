import html from 'choo/html'
import css from './form.css'

export default ({ active, mode, fields: { id, complete, title, dueDate } }, emit) => {
  const submit = (e) => {
    e.preventDefault()
    if (mode === 'edit') emit('todo:edit', { id, title, dueDate, complete })
    else emit('todo:create', { id, title, dueDate, complete })
  }

  return html`<section class=${css.root} data-active=${active}>
    <form onsubmit=${submit}>

      <label for="title">Todo:</label>
      <input type="text" name="title" value=${title} oninput=${(e) => emit('field:title', e.target.value)} />

      <label for="date">Due Date:</label>
      <input type="date" name="date" value=${dueDate} oninput=${(e) => emit('field:date', e.target.value)} />

      <div className="button-group">
        <button type="submit">${(mode === 'edit') ? 'Edit' : 'Add'}</button>
        <button onclick=${() => emit('form:clear')}>Cancel</button>
      </div>

    </form>
  </section>`
}
