const routes = [
  { path: '/',
    meta: { title: 'Home' },
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/about',
    meta: { title: 'About' },
    component: () => import('@/views/About.vue'),
    // example of route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/About.vue')
  },
  { path: '/:path(.*)',
  component: () => import('@/views/NotFound.vue')
  },
]

export default routes
