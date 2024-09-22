<?php

namespace App\Http\Controllers;

use App\Models\Department;
use App\Models\Menu;
use App\Models\Permission;
use App\Models\Role;
use App\Models\RolePermission;
use Illuminate\Http\Request;

class PermissionController extends Controller
{
    //

    public function index(Request $request)
    {
        $department = Department::select('id', 'title')->get();
        $menus = Menu::whereHas('permission')->with('permission')->get();
        $roles = Role::all();
        //  $department = Department::all();
        $data['menus'] = $menus;
        $data['roles'] = $roles;
        $data['department'] = $department;
        return response($data, 200);
    }
    public function getPermissionFromRoleId($id)
    {
        $data['rolepermissions'] = [];
        if ($id == 1) {
            $rolepermissions = Permission::pluck('id');
            $data['rolepermissions'] = $rolepermissions;
        } else {
            if ($id != null && $id != 'null') {
                $role = Role::find($id);
                $rolepermissions = $role->permissions->pluck('id');
                $data['rolepermissions'] = $rolepermissions;
            }
        }
        return response($data, 200);
    }

    public function getRoleFromDepartmentId($id){
        $role =Role::where('department_id',$id)->get();
        return response(['data' => $role, 'status' => 'success'], 200);
    }
    public function profilepermissions(Request $request)
    {
        $permissions_ids = $request->selected_value;
        RolePermission::where('role_id', $request->role)->delete();
        $rolemodel = Role::find($request->role);
        $rolemodel->permissions()->sync($permissions_ids);

        return response(['data'=>'Permission updated successfully!','status'=>'success'], 200);
    }
}
