export default [
// // start from here (below is given for help)
    {
        title: 'Home',
        route: 'Home',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: "Permission",
        icon: "TargetIcon",
        route: "Permission",
        action: "do",
        resource: "Auth",
    },
    {
        title: 'Org Structure',
        icon: 'HomeIcon',
        children: [
            {
                title: "Department",
                icon: "TrelloIcon",
                route: "department",
                resource: 'Auth',
                action: "do",
            },
            {
                title: "Role",
                icon: "TargetIcon",
                route: "role",
                resource: 'Auth',
                action: "do",
            },
            {
                title: "Team",
                icon: "UsersIcon",
                route: "team",
                resource: 'Auth',
                action: "do",
            },

            {
                title: 'Employee',
                route: 'employee',
                icon: 'UserIcon',
                resource: 'Auth',
                action: "do",
            },
        
        ]
    },
    {
        title: 'Attendance',
        route: 'Attendance',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Check Attendance',
        route: 'Check-Attendance',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Swap',
        route: 'swap',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Check Swap',
        route: 'check-swap',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Holiday',
        route: 'holiday',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },

    {
        title: 'Leave Type',
        route: 'leave-type',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Register Step',
        route: 'register-step',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Class Section Master',
        route: 'class-section-master',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Subject',
        route: 'subject',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    {
        title: 'Student',
        route: 'student',
        icon: 'MenuIcon',
        action: "do",
        resource: "student_access"
    },
    {
        title: 'Teacher',
        route: 'teacher',
        icon: 'MenuIcon',
        action: "do",
        resource: "teacher_access",
    },
    {
        title: 'Fees',
        route: 'fees',
        icon: 'MenuIcon',
        
            resource: 'Auth',
            action: "do",
        
    },
    
    
    
    

    
    
    
]