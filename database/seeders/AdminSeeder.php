<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = [
            [
                'name' => 'Ahmad Dzaky',
                'username' => 'dzakym43',
                'email' => 'dzakymustain43@gmail.com',
                'password' => Hash::make('123'),
                'created_at' => Carbon::now()
            ],
        ];
        DB::table('admins')->insert($user);
    }
}
