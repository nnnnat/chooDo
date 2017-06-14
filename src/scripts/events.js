export default (state, emitter) => {
  emitter.on('DOMContentLoaded', () => {
    console.log('loaded')
  })

  emitter.on('render', () => {
    console.log('render')
  })

  emitter.on('todos:toggle', () => {
    console.log('todos toggled')
  })

  emitter.on('todo:create', () => {
    console.log('todo created')
  })
}
