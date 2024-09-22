<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Permission;
use App\Models\Menu; 
use DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        \DB::table('permissions')->truncate();
        $menu_id = Menu::select('id')->where('slug','dashboard')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Dashboard';
        $permission->slug = 'dashboard_access';
        $permission->save();


        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Admin Dashboard';
        $permission->slug = 'admin_dashboard_access';
        $permission->save();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Client Dashboard';
        $permission->slug = 'client_dashboard_access';
        $permission->save();
        //Department menu permissions
        $menu_id = Menu::select('id')->where('slug','department')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Department';
        $permission->slug = 'department_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Department';
        $permission->slug = 'list_department';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Department';
        $permission->slug = 'add_department';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Department';
        $permission->slug = 'edit_department';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Department';
        $permission->slug = 'view_department';
        $permission->save();
        
       

        //Team menu Permission
        $menu_id = Menu::select('id')->where('slug','team')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Team';
        $permission->slug = 'team_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Team';
        $permission->slug = 'list_team';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Team';
        $permission->slug = 'add_team';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Team';
        $permission->slug = 'edit_team';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Team';
        $permission->slug = 'view_team';
        $permission->save();

         //Permission Management menu Permission
         $menu_id = Menu::select('id')->where('slug','permission_management')->first();

         $permission = new Permission();
         $permission->menu_id = (int)$menu_id['id'];
         $permission->name = 'Permission Management';
         $permission->slug = 'permission_management';
         $permission->save();
         $permission = new Permission();
         $permission->menu_id = (int)$menu_id['id'];
         $permission->name = 'List Permission Management';
         $permission->slug = 'list_permission_management';
         $permission->save();
         $permission = new Permission();
         $permission->menu_id = (int)$menu_id['id'];
         $permission->name = 'Add Permission Management';
         $permission->slug = 'add_permission_management';
         $permission->save();
         $permission = new Permission();
         $permission->menu_id = (int)$menu_id['id'];
         $permission->name = 'Edit Permission Management';
         $permission->slug = 'edit_permission_management';
         $permission->save();
         $permission = new Permission();
         $permission->menu_id = (int)$menu_id['id'];
         $permission->name = 'View Permission Management';
         $permission->slug = 'view_permission_management';
         $permission->save();

        //Employee menu Permission

        $menu_id = Menu::select('id')->where('slug','employee')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Employee';
        $permission->slug = 'employee_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Employee';
        $permission->slug = 'list_employee';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Employee';
        $permission->slug = 'add_employee';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Employee';
        $permission->slug = 'edit_employee';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Employee';
        $permission->slug = 'view_employee';
        $permission->save();
      

        $menu_id = Menu::select('id')->where('slug','role')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Role';
        $permission->slug = 'role_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Role';
        $permission->slug = 'list_role';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Role';
        $permission->slug = 'add_role';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Role';
        $permission->slug = 'edit_role';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Role';
        $permission->slug = 'view_role';
        $permission->save();


        $menu_id = Menu::select('id')->where('slug','activity_log')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Activity Log';
        $permission->slug = 'activity_log';
        $permission->save();


        $menu_id = Menu::select('id')->where('slug','student')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Student';
        $permission->slug = 'student_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Student';
        $permission->slug = 'list_student';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Student';
        $permission->slug = 'add_student';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Student';
        $permission->slug = 'edit_student';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Student';
        $permission->slug = 'view_student';
        $permission->save();


        $menu_id = Menu::select('id')->where('slug','teacher')->first();

        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Teacher';
        $permission->slug = 'teacher_access';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'List Teacher';
        $permission->slug = 'list_teacher';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Add Teacher';
        $permission->slug = 'add_teacher';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'Edit Teacher';
        $permission->slug = 'edit_teacher';
        $permission->save();
        $permission = new Permission();
        $permission->menu_id = (int)$menu_id['id'];
        $permission->name = 'View Teacher';
        $permission->slug = 'view_teacher';
        $permission->save();

}
}