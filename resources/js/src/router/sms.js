export default [

    // add routes here (below is given for help)
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/sms/home/Home.vue'),
    },
    {
      path: '/BU',
      name: 'BU',
      component: () => import('@/views/sms/BU/BU.vue'),
    },
    {
      path: '/branch',
      name: 'branch',
      component: () => import('@/views/sms/branch/Branch.vue'),
    },
    {
      path: '/department',
      name: 'department',
      component: () => import('@/views/sms/department/Department.vue'),
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('@/views/sms/team/Team.vue'),
    },
    {
      path: '/role',
      name: 'role',
      component: () => import('@/views/sms/role/Role.vue'),
    },
    {
      path: '/employee',
      name: 'employee',
      component: () => import('@/views/sms/employee/Employee.vue'),
    },
    {
      path: '/employee/add',
      name: 'employee-add',
      component: () => import('@/views/sms/employee/EmployeeAddEdit.vue'),
    },
    {
      path: '/employee/edit',
      name: 'employee-edit',
      component: () => import('@/views/sms/employee/EmployeeAddEdit.vue'),
    },
]
  