
// validaiton class
export default class Validator {
  // clear all errors
  form () {
    const fields = [...document.forms[0].getElementsByTagName('input')]
    fields.map((field) => this.isEmpty(field))
  }

  // clear all errors
  clear () {
    const fields = [...document.forms[0].getElementsByTagName('input')]
    fields.map((field) => this.removeError(field))
  }

  // errors
  hasError (field, message) {
    field.setCustomValidity(message)
    field.nextElementSibling.innerHTML = field.validationMessage
  }

  // remove errors
  removeError (field) {
    field.setCustomValidity('')
  }

  // ===========================================================================
  // Check
  // ===========================================================================

  // is string
  isString (str) {
    if (typeof str !== 'string') throw new TypeError('Validator only accepts strings')
  }

  // is empty
  isEmpty (field) {
    const { value } = field
    this.isString(value)
    if (value.length === 0) this.hasError(field, "Field can't be empty")
    else this.removeError(field)
  }
}
