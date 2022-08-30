<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Monnaie extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'nom',
        'symbole',
        'code',
        'status',
    ];

    public function getRouteKeyName()
    {
        return 'uuid';
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }
    
}
