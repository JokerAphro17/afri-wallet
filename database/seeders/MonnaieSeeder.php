<?php

namespace Database\Seeders;

use App\Models\Monnaie;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class MonnaieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $monnaies=array(
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Bitcoin',
                'sigle'=>'btc',
                'devise'=>'btc',
                'taux_change'=>3.8,
                'stock'=>100,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Ethereum',
                'sigle'=>'eth',
                'devise'=>'eth',
                'taux_change'=>4.3,
                'stock'=>100,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Litecoin',
                'sigle'=>'ltc',
                'devise'=>'ltc',
                'taux_change'=>3.8,
                'stock'=>10047,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Bitcoin Cash',
                'sigle'=>'bch',
                'devise'=>'bch',
                'taux_change'=>3.7,
                'stock'=>10450,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Ripple',
                'sigle'=>'xrp',
                'devise'=>'xrp',
                'taux_change'=>3.9,
                'stock'=>74100,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Bitcoin Gold',
                'sigle'=>'btg',
                'devise'=>'btg',
                'taux_change'=>4,
                'stock'=>10780,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Ethereum Classic',
                'sigle'=>'etc',
                'devise'=>'etc',
                'taux_change'=>3,
                'stock'=>158900,
            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Bitcoin Private',
                'sigle'=>'btp',
                'devise'=>'btp',
                'taux_change'=>9,
                'stock'=>1001

            ],
            [
                'uuid'=>Str::uuid(),
                'nom'=>'Franc CFA',
                'sigle'=>'franc',
                'devise'=>'franc',
                'taux_change'=>1,
                'stock'=>30100,
            ]
            );
            foreach ($monnaies as $monnaie) {
                Monnaie::create($monnaie);
            }
    }
}
