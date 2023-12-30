<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            OrgStructureSeeder::class,
            AdminSeeder::class,
            FieldTypeSeeder::class,
            FieldSeeder::class,
            CountrySeeder::class,
            StateSeeder::class,
            CitySeeder::class,
            IndustryTypeSeeder::class,
            WorkingSeeder::class,
      ]); 
    }
}
