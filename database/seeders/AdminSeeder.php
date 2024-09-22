<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use App\Models\UserRole;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        try {
            // Check if user already exists
            $user = User::where('email', 'admin@test.com')->first();
            if (!$user) {
                // Create new user
                $user = new User();
                $user->name = 'admin';
                $user->email = 'admin@test.com';
                $user->role_id = 1; // Ensure role_id corresponds to a valid Role
                $user->password = '$2y$10$Tgj3K14samGowb4KVUeEeug9sAvj4eewOsuBnmPiUKwOSsYkI7mju'; // This is a hashed password
                $user->created_at = now();
                $user->updated_at = now();
                $user->save();

                // Create new role
                $role = new Role();
                $role->name = 'admin';
                $role->slug = 'super-admin';
                $role->department_id = 1; // Ensure department_id corresponds to a valid Department
                $role->save();

                // Create user-role association
                $userRole = new UserRole();
                $userRole->user_id = $user->id;
                $userRole->role_id = $role->id;
                $userRole->save();
            } else {
                // If user already exists, find their role
                $role = Role::where('slug', 'super-admin')->first();
                if (!$role) {
                    // Create the role if it does not exist
                    $role = new Role();
                    $role->name = 'admin';
                    $role->slug = 'super-admin';
                    $role->department_id = 1; // Ensure department_id corresponds to a valid Department
                    $role->save();
                }
            }

            // Insert permissions for the role
            DB::statement("
                INSERT INTO roles_permissions (role_id, permission_id)
                SELECT :role_id AS role_id, permission_id
                FROM roles_permissions
                LEFT JOIN roles ON roles.id = roles_permissions.role_id
                WHERE roles.slug = 'super-admin'
            ", ['role_id' => $role->id]);

        } catch (\Exception $e) {
            // Log the error
            Log::error('Error seeding admin data: ' . $e->getMessage());
        }
    }
}
