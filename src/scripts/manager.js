import { getTodos } from './helper'
import * as h from './handler'

export default (state, emitter) => {
  const todosState = () => ({
    loaded: false,
    upcoming: true,
    data: []
  })
  const formState = () => ({
    active: false,
    edit: undefined,
    errors: [],
    inputs: { title: '', due: '' }
  })
  const loadTodos = (todos) => {
    state.todos.data = todos
    state.todos.loaded = true
    emitter.emit('render')
  }
  state.todos = todosState()
  state.form = formState()

  // ==========================================================================
  // App State
  // ==========================================================================

  // page loaded app
  emitter.on('DOMContentLoaded', () => {
    getTodos().then(loadTodos).catch((err) => console.error(err))
    console.log('loaded')
  })

  // app has re-rendered
  emitter.on('render', () => {
    console.log('render')
  })

  // ==========================================================================
  // Form State
  // ==========================================================================

  // form toggles open or close
  emitter.on('form:toggle', () => {
    state.form.active = h.toggle(state.form.active)
    emitter.emit('render')
  })

  // prepping form for todo edit
  emitter.on('form:edit', ({ id, title, due }) => {
    state.form.active = h.toggle(state.form.active)
    state.form.edit = id
    state.form.inputs.title = title
    state.form.inputs.due = due
    emitter.emit('render')
  })

  // collecting any user enter input
  emitter.on('form:input', (input) => {
    state.form.inputs[input.name] = input.value
    emitter.emit('render')
  })

  // clearing the inputs, errors and closing form
  emitter.on('form:clear', () => {
    state.form = formState()
    emitter.emit('render')
  })

  // ==========================================================================
  // Todos State
  // ==========================================================================

  // toggle between complete and upcoming todos
  emitter.on('todos:toggle', () => {
    state.todos.upcoming = h.toggle(state.todos.upcoming)
    emitter.emit('render')
  })

  // a new todo is created
  emitter.on('todo:create', (todo) => {
    state.todos.data = h.add(state.todos.data, todo)
    emitter.emit('form:clear')
    emitter.emit('render')
  })

  // todo is completed
  emitter.on('todo:primary', (todo) => {
    state.todos.data = h.update(state.todos.data, todo)
    emitter.emit('render')
  })

  // todo is completed
  emitter.on('todo:delete', (todo) => {
    state.todos.data = h.remove(state.todos.data, todo)
    emitter.emit('render')
  })
}
