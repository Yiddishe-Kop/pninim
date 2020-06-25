<?php

use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {

    public function run() {
        User::create([
            'name' => 'Yehuda Neufeld',
            'email' => 'newgraphil@gmail.com',
            'password' => '12345678',
            'is_admin' => true,
            'is_approved' => true,
        ]);
    }

}
