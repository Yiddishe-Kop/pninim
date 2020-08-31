<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class IncreasePostTitleLength extends Migration {

    public function up() {
        Schema::table('posts', function (Blueprint $table) {
            $table->text('title')->change();
        });
    }

    public function down() {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('title')->change();
        });
    }

}
