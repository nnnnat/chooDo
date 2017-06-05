
// validaiton class
export default class Validator {
  constructor (emitter) {
    this.emit = emitter.emit
  }

  // errors
  hasError (field, message) {
    field.setCustomValidity(message)
    field.nextElementSibling.innerHTML = field.validationMessage
    setTimeout(() => field.setCustomValidity(''), 3000)
  }

  // ===========================================================================
  // Test
  // ===========================================================================

  // is string
  isString (str) {
    if (typeof str !== 'string') throw new TypeError('Validator only accepts strings')
  }

  // is email
  isEmpty (field) {
    const { value } = field
    this.isString(value)
    if (value.length === 0) this.hasError(field, "Field can't be empty")
  }
}
