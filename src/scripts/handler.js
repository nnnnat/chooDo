export function add (arr, i) {
  console.log('add item handler')
  console.log(i)
  return [...arr, i]
}

export function removeItem (arr, i) {
  const index = arr.indexOf(i)
  return [
    ...arr.slice(0, index),
    ...arr.slice(index + 1)
  ]
}

export function updateItem (arr, i) {
  const index = arr.findIndex((t) => t.id === i.id)
  return [
    ...arr.slice(0, index),
    i,
    ...arr.slice(index + 1)
  ]
}

export function toggle (bln) {
  return !bln
}
