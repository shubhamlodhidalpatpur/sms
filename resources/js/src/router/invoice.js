export default [

    // add routes here (below is given for help)

    {
      path: '/master',
      name: 'master',
      component: () => import('@/views/sms/Master/master.vue'),
    },
    {
      path: '/Add/:module_name',
      name: 'add_module',
      component: () => import('@/views/sms/Modules/AddModules.vue'),
      meta: {
        navActiveLink: '', // Initial value
      },
    }, 
    {
      path: '/Edit/:module_name/:id',
      name: 'Edit',
      component: () => import('@/views/sms/Modules/EditModules.vue'),
    }, 
    {
      path: '/View/:module_name/:id',
      name: 'View',
      component: () => import('@/views/sms/Modules/EditModules.vue'),
    }, 
    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/Invoice-setup',
      name: 'Invoice setup', 
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/Create-sales-invoice',
      name: 'Create sales invoice',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/Update-purchase-order',
      name: 'Update purchase order',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/Update-product-inventory',
      name: 'Update product inventory',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/Customers-parties',
      name: 'Customers and parties',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    },     
    
]
  