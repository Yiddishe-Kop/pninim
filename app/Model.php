<?php

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;
use Illuminate\Database\Eloquent\SoftDeletes;

abstract class Model extends Eloquent {

    protected $guarded = [];

    protected $perPage = 20;

    public function resolveRouteBinding($value, $field = null) {
        return in_array(SoftDeletes::class, class_uses($this))
        ? $this->where($this->getRouteKeyName(), $value)->withTrashed()->first()
        : parent::resolveRouteBinding($value);
    }
}
