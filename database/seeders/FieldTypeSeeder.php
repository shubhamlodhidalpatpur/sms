<?php

namespace Database\Seeders;

use App\Models\FieldType;
use Illuminate\Database\Seeder;

class FieldTypeSeeder extends Seeder
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
                'title' => 'String',
                'slug' => 'string',
            ],
            [
                'title' => 'Number',
                'slug' => 'integer',
            ],
            [
                'title' => 'Decimal Number',
                'slug' => 'float',
            ],
            [
                'title' => 'File',
                'slug' => 'file',
            ],
            [
                'title' => 'Boolean',
                'slug' => 'boolean',
            ],
            [
                'title' => 'Date',
                'slug' => 'date',
            ],
            [
                'title' => 'Date Time',
                'slug' => 'datetime',
            ],
            [
                'title' => 'List',
                'slug' => 'enum',
            ]
        ];

        foreach ($list as $data) {
            FieldType::insert($data);
        }

    }
}
