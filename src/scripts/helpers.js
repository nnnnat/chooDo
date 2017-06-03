/**
 * guid returns a RFC4122 v4 guid as a string
 */
export function guid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = (c === 'x') ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}

/**
 * prettyDate takes a date string and an optional options object,
 * the options object is the same as the toLocaleDateString options
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
 * returns new date string in Feb 23, 2017 format
 * ['2017-02-23', Feb 23, 2017]
 */
export function prettyDate (str, options = {year: 'numeric', month: 'short', day: 'numeric'}) {
  const date = new Date(`${str}T00:00:00`)
  return date.toLocaleDateString('en-us', options)
}

//
// bogus todos for testing / writing styles
export const bogusTodos = [
  { id: guid(), title: 'overdue', dueDate: '2017-05-29', complete: false },
  { id: guid(), title: 'today', dueDate: '2017-05-31', complete: false },
  { id: guid(), title: 'bday', dueDate: '2017-06-25', complete: false },
  { id: guid(), title: 'party', dueDate: '2017-07-04', complete: false },
  { id: guid(), title: 'done one', dueDate: '2017-05-24', complete: true },
  { id: guid(), title: 'done two', dueDate: '2017-05-23', complete: true }
]
