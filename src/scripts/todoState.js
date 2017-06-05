import { bogusTodos } from './helpers'

export default (state, emitter) => {
  const ogState = () => ({ upcoming: true, data: bogusTodos })
  state.todos = ogState()

  emitter.on('DOMContentLoaded', () => {
    console.log('content loaded')
  })

  emitter.on('render', () => {
    console.log('render')
  })

  // ==========================================================================
  // Todo List Events
  // ==========================================================================

  /**
   * toggle todos event handler takes no params
   * state.upcoming value is toggled
   * emits the todos refresh event
   */
  emitter.on('todos:toggle', () => {
    state.todos.upcoming = !state.todos.upcoming
    emitter.emit('todos:refresh')
  })

  /**
   * refresh todos event handler takes no params
   * state.todos.data is sorted by due date
   * emits the render event
   */
  emitter.on('todos:refresh', () => {
    state.todos.data.sort((a, b) => a.due > b.due)
    emitter.emit('render')
  })

  // ==========================================================================
  // Todo CRUD Events
  // ==========================================================================

  /**
   * new todo event handler takes a todo obj as a param
   * state.todos.data gets new array with new todo obj
   * emits the clear form and todos refresh events
   */
  emitter.on('todo:create', (todo) => {
    state.todos.data = [...state.todos.data, todo]
    emitter.emit('form:clear')
  })

 /**
  * edit todo event handler takes a todo obj as a param
  * state.todos.data gets new array with the updated todo obj replaced
  * emits the clear form and todos refresh events
  */
  emitter.on('todo:edit', (todo) => {
    const index = state.todos.data.findIndex((t) => t.id === todo.id)
    state.todos.data = [
      ...state.todos.data.slice(0, index),
      todo,
      ...state.todos.data.slice(index + 1)
    ]
    emitter.emit('form:clear')
  })

  /**
   * delete todo event handler takes a todo obj as a param
   * state.todos.data gets new array with the todo obj removed
   * emits the todos refresh event
   */
  emitter.on('todo:delete', (todo) => {
    const index = state.todos.data.indexOf(todo)
    state.todos.data = [
      ...state.todos.data.slice(0, index),
      ...state.todos.data.slice(index + 1)
    ]
    emitter.emit('todos:refresh')
  })

  /**
   * complete todo event handler takes a todo obj as a param
   * state.todos.data gets new array with the updated todo obj replaced
   * emits the clear form and todos refresh events
   */
  emitter.on('todo:primary', (todo) => {
    const index = state.todos.data.indexOf(todo)
    todo.complete = !todo.complete
    state.todos.data = [
      ...state.todos.data.slice(0, index),
      todo,
      ...state.todos.data.slice(index + 1)
    ]
    emitter.emit('todos:refresh')
  })
}
