import './base.css'
import choo from 'choo'
import manager from './scripts/manager'
import view from './components/view'

const App = choo()
App.use(manager)
App.route('/', view)
App.mount('#base')
