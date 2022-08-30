<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Services\StripeService;
use App\Http\Controllers\API\BaseController;


class PaymentController extends BaseController
{
    public function byCard(Request $request){

        try{
            $input = $request->all();
            $input['moyen_paiement'] = 'card';
            $user_id = $request->user()->id;
            $input['user_id'] = $user_id;
            $input['uuid'] = Str::uuid();
        } catch (\Exception $e){
            return $this->sendError('Error', $e->getMessage(), 400);
        } 
    }
}
