<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration {

  public function up() {
    Schema::create('comments', function (Blueprint $table) {
      $table->id();
      $table->foreignId('user_id');
      $table->foreignId('post_id');
      $table->foreignId('parent_id')->nullable();
      $table->text('content');

      $table->timestamps();
    });
  }

  public function down() {
    Schema::dropIfExists('comments');
  }

}
