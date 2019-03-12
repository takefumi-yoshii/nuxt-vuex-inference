import 'vuex'
import Counter from './counter/index.d'
import Todos from './todos/index.d'

declare module 'vuex' {
  type RootState = {
    counter: Counter.S
    todos: Todos.S
  }
  type RootGetters = Counter.GG & Todos.GG
  type RootMutations = Counter.GM & Todos.GM
  type RootActions = Counter.GA & Todos.GA
}
