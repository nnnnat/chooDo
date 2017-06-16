// =============================================================================
// App handler functions
// =============================================================================

// add item to array
export function add (arr, i) {
  return [...arr, i]
}

// remove item from array
export function remove (arr, i) {
  const index = arr.indexOf(i)
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

// update item in array
export function update (arr, i) {
  const index = arr.findIndex((t) => t.id === i.id)
  return [
    ...arr.slice(0, index),
    i,
    ...arr.slice(index + 1)
  ]
}

// toggle boolean
export function toggle (bln) {
  return !bln
}
