<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'uuid',
        'moyen_paiement',
        'devise_envoyee',
        'devise_recue',
        'montant_envoye',
        'montant_recu',
        'adress_sender',
        'adress_receiver',
        'user_id',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function deviseEnvoyee()
    {
        return $this->belongsTo(Monnaie::class, 'devise_envoyee');
    }
    public function deviseRecue()
    {
        return $this->belongsTo(Monnaie::class, 'devise_recue');
    }

    public function getRouteKeyName()
    {
        return 'uuid';
    }
}
