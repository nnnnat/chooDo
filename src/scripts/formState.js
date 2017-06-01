import { guid } from './helpers'

export default (state, emitter) => {
  const ogState = () => ({
    mode: 'new',
    errors: [],
    values: {
      id: guid(),
      complete: false,
      title: '',
      dueDate: ''
    }
  })

  state.formFields = ogState()

  // ==========================================================================
  // Form Events
  // ==========================================================================

  /**
   * clear form event handler takes no param
   * state.formField is set to ogState
   * emits the render event
   */
  emitter.on('form:clear', () => {
    state.formFields = ogState()
    emitter.emit('render')
  })

  /**
   * edit form event handler takes a todo obj as a param
   * state.formField.mode is set to edit
   * state.formfields.values gets todo values
   * emits the render event
   */
  emitter.on('form:edit', ({ id, title, dueDate, complete }) => {
    console.log(title)
    state.formFields.mode = 'edit'
    state.formFields.values = { id, title, dueDate, complete }
    emitter.emit('render')
  })

  // ==========================================================================
  // Field State Events
  // ==========================================================================

  /**
   * input update event handler takes a string as a param
   * state.formField.values.title gets new value
   * emits the render event
   */
  emitter.on('field:title', (value) => {
    state.formFields.values.title = value
    emitter.emit('render')
  })

  /**
   * date update event handler takes a string as a param
   * state.formField.values.date gets new value
   * emits the render event
   */
  emitter.on('field:date', (value) => {
    state.formFields.values.dueDate = value
    emitter.emit('render')
  })
}
