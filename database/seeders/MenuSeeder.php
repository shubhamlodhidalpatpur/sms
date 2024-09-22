<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;


class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Schema::disableForeignKeyConstraints();
        DB::table('menus')->truncate();
        DB::table('menus')->insert(array(
        array(
            'name'       => 'Dashboard',
            'slug'       => 'dashboard',
            'parent_id'  => 0
        ),
        array(
          'name'       => 'Department',
           'slug'       => 'department',
           'parent_id'  => 0
        ),
        array(
          'name'       => 'Team',
           'slug'       => 'team',
           'parent_id'  => 0
        ),
        array(
          'name'       => 'Permission Management',
           'slug'       => 'permission_management',
           'parent_id'  => 0
        ),
        array(
          'name'       => 'Employee',
           'slug'       => 'employee',
           'parent_id'  => 0
        ),
        array(
          'name'       => 'Role',
           'slug'       => 'role',
           'parent_id'  => 0,
        ),
        array(
          'name'       => 'Activity Log',
           'slug'       => 'activity_log',
           'parent_id'  => 10,
        ),
        array(
          'name'       => 'Student',
           'slug'       => 'student',
           'parent_id'  => 0
        ),
        array(
          'name'       => 'Teacher',
           'slug'       => 'teacher',
           'parent_id'  => 0
        ),
      ));
    }
}
