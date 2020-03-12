// import * as mutations from './mutations'
// import * as getters from './getters'
// import * as actions from './actions'
// import state from './state'

// export default {
//   namespaced: true,
//   state,
//   actions,
//   getters,
//   mutations
// }

export default {
  namespaced: true,
  state: {
    todos: [
      {id: 1, title: 'Todo', tasks: []},
      {id: 2, title: 'Inprogress', tasks: []},
      {id: 3, title: 'Done', tasks: []}
    ],
    todo: {
      id: 4,
      title: 'Something',
      tasks: []
    }
  },
  actions: {
    fetchTodos({commit}){
      commit('setTodos', [])
    },
    fetchTodo({commit}, data){
      commit('setTodo', {})
    }
  },
  mutations: {
    setTodos(state, todos){
      state.todos = todos
    },
    setTodo(state, todo){
      state.todo = todo
    }
  },
  getters: {
    getTodos(state) {
      return state.todos
    },
    getTodo(state){
      return state.todo
    }
  }
}
