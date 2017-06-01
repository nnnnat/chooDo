import html from 'choo/html'
import css from './form.css'

export default ({ mode, values: { id, complete, title, dueDate } }, emit) => {
  const submit = (e) => {
    e.preventDefault()
    if (mode === 'edit') emit('todo:edit', { id, title, dueDate, complete })
    else emit('todo:create', { id, title, dueDate, complete })
  }

  return html`<form class=${css.root} onsubmit=${submit}>
    <input type="text" value=${title} oninput=${(e) => emit('field:title', e.target.value)} />
    <input type="date" value=${dueDate} oninput=${(e) => emit('field:date', e.target.value)} />
    <button type="submit">submit</button>
  </form>`
}
