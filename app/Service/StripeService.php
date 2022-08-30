<?php 

namespace App\Services;

use Stripe\Charge;
use Stripe\Source;
use Stripe\Stripe;
use App\Models\User;
use Stripe\Customer;
use Illuminate\Support\Str;

Class StripeService
{   
    private $key;
    public function __construct($key)
    {   $this->key = $key;
        Stripe::setApiKey($key);
        return $this;
    }

    
    
    public function paymentByCard($customer=null,$amount,$card_token, $description, $currency = 'xof')
    {   
        try{
            
            if($customer){
                $customer = $customer->createOrGetStripeCustomer();
                Customer::createSource(
                    $customer->id,
                    ['source' => $card_token]
                );
                $charge = Charge::create([
                    'amount' => $amount,
                    'currency' => $currency,
                    'description' => $description,
                    'customer' => $customer->id,
                ]);
            }
            else{
                $charge = Charge::create([
                    'amount' => $amount,
                    'currency' => $currency,
                    'description' => $description,
                    'source' => $card_token,
                ]);
            }
            return $charge;
        }
        catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], 500);
        }
        
    }
}