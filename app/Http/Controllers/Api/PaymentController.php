<?php

namespace App\Http\Controllers\Api;

use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Services\StripeService;
use App\Http\Controllers\API\BaseController;
use App\Models\User;


class PaymentController extends BaseController
{
    public function byCard(Request $request){

        $validator = Validator::make($request->all(), [
            'devise_envoyee' => 'required|string|max:3',
            'devise_recue' => 'required|string|max:3',
            'montant_envoye' => 'required|string',
            'montant_recu' => 'required|string',
            'adress_sender' => 'required|string',
            'adress_receiver' => 'required|string',
        ]);

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

    public function paymentListe($page){

        try{
            $transactions = Transaction::paginate(10, ['*'], 'page', $page);
            return $this->sendResponse($transactions, 'Transactions retrieved successfully');
        } catch (\Exception $e){
            return $this->sendError('Error', $e->getMessage(), 400);
        }

    }

    public function paymentStat(){

        try{
            $transactions = Transaction::all();
            $total = $transactions->sum('montant_recu') * 3780;
            $total = number_format($total, 2, '.', '');
            $nb_transaction = $transactions->count();
            $customers = User::where('role', 'user')->count();
            return $this->sendResponse(['total' => $total, 'nb_transaction' => $nb_transaction,
            'customers' => $customers], 'Transactions retrieved successfully');
        }
        catch (\Exception $e){
            return $this->sendError('Error', $e->getMessage(), 400);
        }
    }
}
