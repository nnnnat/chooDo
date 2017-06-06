import Validator from './validator'

export default (state, emitter) => {
  const validate = new Validator()
  const ogState = () => ({
    active: false,
    errors: [],
    inputs: { title: '', due: '' }
  })
  state.form = ogState()

  // ==========================================================================
  // Form Events
  // ==========================================================================

  /**
   * clear form event handler takes no param
   * state.form is set to ogState
   * emits the render event and refreshes the todo list
   */
  emitter.on('form:clear', () => {
    validate.clear()
    state.form = ogState()
    emitter.emit('todos:refresh')
  })

  emitter.on('form:validate', () => {
    validate.form()
  })

  /**
   * edit form event handler takes a todo obj as a param
   * form.edit is set to edit
   * forminputs.inputs gets todo inputs
   * emits the render event
   */
  emitter.on('form:edit', ({ id, title, due }) => {
    state.form.active = true
    state.form.edit = id
    state.form.inputs.title = title
    state.form.inputs.due = due
    emitter.emit('render')
  })

  /**
   * form toggle event handler takes no param
   * form.active value is toggled
   * emits the render event
   */
  emitter.on('form:toggle', () => {
    state.form.active = !state.form.active
    emitter.emit('render')
  })

  /**
   * form input event handler takes a field element as a param
   * form.inputs[input.name] gets new value
   * emits the render event
   */
  emitter.on('form:input', (input) => {
    validate.isEmpty(input)
    state.form.inputs[input.name] = input.value
    emitter.emit('render')
  })
}
