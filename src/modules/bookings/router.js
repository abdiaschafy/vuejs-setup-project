const Module = () => import('./Module.vue')
const Home = () => import('./views/Home.vue')

const moduleRoute = {
  path: '/book',
  component: Module,
  children: [
    {
      path: '',
      component: Home
    }
  ]
}

export default (router) => {
  router.addRoute(moduleRoute)
}
