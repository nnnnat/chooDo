import { guid } from './helpers'

export default (state, emitter) => {
  const ogState = () => ({
    active: false,
    edit: false,
    errors: [],
    fields: {
      id: guid(),
      complete: false,
      title: '',
      dueDate: ''
    }
  })

  state.form = ogState()

  // ==========================================================================
  // Form Events
  // ==========================================================================

  /**
   * clear form event handler takes no param
   * state.formField is set to ogState
   * emits the render event
   */
  emitter.on('form:clear', () => {
    state.form = ogState()
    emitter.emit('render')
  })

  /**
   * edit form event handler takes a todo obj as a param
   * state.formField.edit is set to edit
   * state.formfields.fields gets todo fields
   * emits the render event
   */
  emitter.on('form:edit', ({ id, title, dueDate, complete }) => {
    state.form.active = true
    state.form.edit = true
    state.form.fields = { id, title, dueDate, complete }
    emitter.emit('render')
  })

  /**
   * form toggle event handler takes no param
   * state.formField.active value is toggled
   * emits the render event
   */
  emitter.on('form:toggle', () => {
    state.form.active = !state.form.active
    emitter.emit('render')
  })

  // ==========================================================================
  // Field State Events
  // ==========================================================================

  /**
   * input update event handler takes a string as a param
   * state.formField.fields.title gets new value
   * emits the render event
   */
  emitter.on('field:title', (value) => {
    state.form.fields.title = value
    emitter.emit('render')
  })

  /**
   * date update event handler takes a string as a param
   * state.formField.fields.date gets new value
   * emits the render event
   */
  emitter.on('field:date', (value) => {
    state.form.fields.dueDate = value
    emitter.emit('render')
  })
}
