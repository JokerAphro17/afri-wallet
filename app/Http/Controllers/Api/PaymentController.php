<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Services\StripeService;
use App\Http\Controllers\API\BaseController;


class PaymentController extends BaseController
{
    public function cryptoPayment(Request $request , StripeService $stripe){


        $input = $request->all();
        $user = $request->user();
        try{
                    $stripe->createCardPayment($user, $input['amount'], 'usd');
                    $card = $input['stripeToken'];
                    $prix = $input['amount'];
                    $description = 'Achat de Crypto';
                    $charge = $stripe->paymentByCard($user,$prix,$card,$description);
                    return $this->SendResponse($charge,'Payement effectué avec success');
        }
        catch(\Exception $e){
            return $this->sendError('Error', $e->getMessage());
        }
        
    }
}
