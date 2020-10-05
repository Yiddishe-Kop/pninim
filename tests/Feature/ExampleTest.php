<?php

namespace Tests\Feature;

use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase {
  use RefreshDatabase;

  public function testComment()
  {
    $this->actingAs(User::create([
      'name' => 'Test',
      'email' => 'test@test.com',
      'password' => '12345678'
    ]));
    $this->get('/');
    $this->assertAuthenticated();
  }
}
