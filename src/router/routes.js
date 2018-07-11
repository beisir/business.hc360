

import index from '@/view/index'

export default [{
    name: 'base',
    path: '/',
    redirect: '/index',
    hidden: true
  },
  {
    name: 'index',
    path: '/index',
    meta: {
      requireAuth: true
    },
    component: index
  }
];
