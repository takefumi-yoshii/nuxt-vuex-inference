import 'vuex'
import Counter from './counter/index.d'
import Todos from './todos/index.d'

declare module 'vuex' {
  export type RootState = {
    counter: Counter.S
    todos: Todos.S
  }
  export type RootGetters = Counter.GG & Todos.GG
  export type RootMutations = Counter.GM & Todos.GM
  export type RootActions = Counter.GA & Todos.GA
}
