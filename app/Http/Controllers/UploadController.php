<?php

namespace App\Http\Controllers;

class UploadController extends Controller {
    public function __invoke() {

        if (request()->file('avatar')) {
            $fileUrl = request()->file('avatar')->store('users');
        }

        return response()->json([
            'url' => $fileUrl,
        ]);
    }
}
