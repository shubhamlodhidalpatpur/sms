export default [
// // start from here (below is given for help)
    {
        title: 'Home',
        route: 'Home',
        icon: 'MenuIcon',
        meta: {
            resource: 'Auth',
            action: "do",
        },
    },
    {
        title: 'Org Structure',
        icon: 'HomeIcon',
        children: [
            {
                title: 'BU',
                route: 'BU',
                icon: 'MenuIcon',
                meta: {
                    resource: 'Auth',
                    action: "do",
                },
            },
            {
                title: 'Branch',
                route: 'branch',
                icon: 'MenuIcon',
                meta: {
                    resource: 'Auth',
                    action: "do",
                },
            },
            {
                title: 'Department',
                route: 'department',
                icon: 'MenuIcon',
                meta: {
                    resource: 'Auth',
                    action: "do",
                },
            },
            {
                title: 'Team',
                route: 'team',
                icon: 'MenuIcon',
                meta: {
                    resource: 'Auth',
                    action: "do",
                },
            },
            {
                title: 'Role',
                route: 'role',
                icon: 'MenuIcon',
                meta: {
                    resource: 'Auth',
                    action: "do",
                },
            },
        
        ]
    },
    {
        title: 'Attendance',
        route: 'Attendance',
        icon: 'MenuIcon',
        meta: {
            resource: 'Auth',
            action: "do",
        },
    },
    {
        title: 'Check Attendance',
        route: 'Check-Attendance',
        icon: 'MenuIcon',
        meta: {
            resource: 'Auth',
            action: "do",
        },
    },
    {
        title: 'Employee',
        route: 'employee',
        icon: 'MenuIcon',
        meta: {
            resource: 'Auth',
            action: "do",
        },
    },

   
]