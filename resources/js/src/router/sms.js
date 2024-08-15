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
      path: '/employee/edit/:id',
      name: 'employee-edit',
      component: () => import('@/views/sms/employee/EmployeeAddEdit.vue'),
    },
    {  
      path: '/Attendance',
      name: 'Attendance',
      component: () => import('@/views/sms/Attendance/Attendance.vue'),
    },
    {
      path: '/Check-Attendance',
      name: 'Check-Attendance',
      component: () => import('@/views/sms/Attendance/CheckAttendance.vue'),
    },
    {
      path: '/Swap',
      name: 'swap',
      component: () => import('@/views/sms/Swap/SwapList.vue'),
    },
    {
      path: '/Apply-Swap',
      name: 'apply-swap',
      component: () => import('@/views/sms/Swap/ApplySwap.vue'),
      meta: {
        navActiveLink: 'swap',
      },
    },
    {
      path: '/Check-Swap',
      name: 'check-swap',
      component: () => import('@/views/sms/Swap/ChckSwapList.vue'),
    },
    {
      path: '/Holiday',
      name: 'holiday',
      component: () => import('@/views/sms/Holiday/Holiday.vue'),
    },
    {
      path: '/leave-type',
      name: 'leave-type',
      component: () => import('@/views/sms/LeaveType/LeaveType.vue'),
    },
    {
      path: '/add-leave-type',
      name: 'add-leave-type',
      component: () => import('@/views/sms/LeaveType/AddEditLeaveType.vue'),
      meta: {
        navActiveLink: 'leave-type',
      },
    },
    {
      path: '/leave-type/edit/:id',
      name: 'edit-leave-type',
      component: () => import('@/views/sms/LeaveType/AddEditLeaveType.vue'),
      meta: {
        navActiveLink: 'leave-type',
      },
    }, 
    {
      path: '/register-step',
      name: 'register-step',
      component: () => import('@/views/sms/RegisterStep/RegisterSteps.vue'),
    }, 
    {
      path: '/Class-Section-Master',
      name: 'class-section-master',
      component: () => import('@/views/sms/ClassSectionMaster/ClassSectionMaster.vue'),
    },  
{
      path: '/Class-Section-Time-Scheduler/:id',
      name: 'class-section-time-scheduler',
      component: () => import('@/views/sms/ClassSectionMaster/ClassSectionTimeSeduler.vue'),
    },  
    {
      path: '/Teacher',
      name: 'Teacher',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/HomePage',
      name: 'HomePage',
      component: () => import('@/views/sms/Modules/Modules.vue'),
    }, 
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/sms/Student/Student.vue'),
    }, 
    {
      path: '/add-student',
      name: 'add-student',
      component: () => import('@/views/sms/Student/AddEditStudent.vue'),
      meta: {
        navActiveLink: 'student',
      },
    },
    {
      path: '/view-student/:id',
      name: 'view-student',
      component: () => import('@/views/sms/Student/StudentProfile.vue'),
      meta: {
        navActiveLink: 'student',
      },
    },
    
    
]
  