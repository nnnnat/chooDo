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
    console.log('form toggle')
    state.form.active = h.toggle(state.form.active)
    emitter.emit('render')
  })

  // ==========================================================================
  // Todos State
  // ==========================================================================

  // toggle between complete and upcoming todos
  emitter.on('todos:toggle', () => {
    console.log('todos toggled')
    state.todos.upcoming = h.toggle(state.todos.upcoming)
    emitter.emit('render')
  })

  // a new todo is created
  emitter.on('todo:create', (todo) => {
    state.todos.data = h.add(state.todos.data, todo)
    console.log('todo created')
  })
}
