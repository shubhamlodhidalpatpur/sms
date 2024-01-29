<?php

namespace Database\Seeders;

use App\Models\FieldType;
use App\Models\MasterField;
use Illuminate\Database\Seeder;

class MasterFieldSeeder extends Seeder
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
                'title' => 'Name',
                'slug' => 'Name',
                'field_type_id' => FieldType::where('slug', 'string')->first()->id,
                'validation_rule' => 'required|string',
                'master_id' => '0',
                'required' => 1,
                'show_list' => 1,
                'show_filter' => 1,
                'is_default_field' => 1,
            ],
        ];

        foreach ($list as $data) {
            MasterField::insert($data);
        }
    }
}
