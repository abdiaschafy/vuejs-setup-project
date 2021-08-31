const Module = () => import('./Module.vue')
const Home = () => import('./views/Home.vue')

const moduleRoute = {
  path: '/vehicles',
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
