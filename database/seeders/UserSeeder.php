<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'name' => 'Dzaky M',
                'username' => 'dzaky11',
                'email' => 'dzakykun11@gmail.com',
                'password' => Hash::make('123'),
                'email_verified_at' => Carbon::now(),
                'created_at' => Carbon::now()
            ],
            [
                'name' => 'Kairi Kumar',
                'username' => 'kumar',
                'email' => 'jakiang72@gmail.com',
                'password' => Hash::make('123'),
                'email_verified_at' => null,
                'created_at' => Carbon::now()
            ]
        ];
        DB::table('users')->insert($user);
    }
}
