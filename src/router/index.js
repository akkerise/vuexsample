import Main from '../layout/Main'
import Todo from '../pages/Todo'

export default {
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/todo',
          name: 'Todo',
          component: Todo
        }
      ]
    }
  ]
}