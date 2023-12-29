<?php

namespace Database\Seeders;

use App\Models\Field;
use App\Models\FieldType;
use Illuminate\Database\Seeder;

class FieldSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $list = [
            [
                'title' => 'User Name',
                'field_type_id' => FieldType::where('slug', 'string')->first()->id,
                'validation_rule' => 'required|string',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Email',
                'field_type_id' => FieldType::where('slug', 'string')->first()->id,
                'validation_rule' => 'required|email',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Contact Number',
                'field_type_id' => FieldType::where('slug', 'integer')->first()->id,
                'validation_rule' => 'required|digit',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Salary',
                'field_type_id' => FieldType::where('slug', 'integer')->first()->id,
                'validation_rule' => 'required|integer',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Gender',
                'field_type_id' => FieldType::where('slug', 'enum')->first()->id,
                'validation_rule' => 'required|string',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Date of Birth',
                'field_type_id' => FieldType::where('slug', 'date')->first()->id,
                'validation_rule' => 'required|date',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'Joining Date',
                'field_type_id' => FieldType::where('slug', 'date')->first()->id,
                'validation_rule' => 'required|date',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
            [
                'title' => 'User Role',
                'field_type_id' => FieldType::where('slug', 'enum')->first()->id,
                'validation_rule' => 'required',
                'role_id' => '0',
                'required' => 1,
                'is_default_field' => 1,
            ],
        ];

        foreach ($list as $data) {
            Field::insert($data);
        }

    }
}
