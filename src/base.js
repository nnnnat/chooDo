import './base.css'
import choo from 'choo'
import events from './scripts/events'
import formState from './scripts/formState'
import todoState from './scripts/todoState'
import view from './components/view'

const App = choo()
App.use(events)
App.use(formState)
App.use(todoState)
App.route('/', view)
App.mount('#base')
