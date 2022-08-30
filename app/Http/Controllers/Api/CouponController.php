<?php

namespace App\Http\Controllers\Api;

use App\Models\Coupon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\API\BaseController;

class CouponController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $coupons = Coupon::all();
            return $this->sendResponse($coupons, 'Coupons retrieved successfully.');
        } catch (\Exception $e) {
            return $this->sendError('Error retrieving coupons.', $e->getMessage());
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string|max:255',
            'cote' => 'required|numeric',
            'nb_matchs' => 'required|numeric',
            'date_debut' => 'required|date',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $coupon = Coupon::create($request->all());
            return $this->sendResponse($coupon, 'Coupon created successfully.');
        } catch (\Exception $e) {
            return $this->sendError('Error creating coupon.', $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function show(Coupon $coupon)
    {
        try {
            return $this->sendResponse($coupon, 'Coupon retrieved successfully.');
        } catch (\Exception $e) {
            return $this->sendError('Error retrieving coupon.', $e->getMessage());
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Coupon $coupon)

    {
        $validator = Validator::make($request->all(), [
            'code' => 'required|string|max:255',
            'cote' => 'required|numeric',
            'nb_matchs' => 'required|numeric',
            'date_debut' => 'required|date',
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }
        try {
            $coupon->update($request->all());
            return $this->sendResponse($coupon, 'Coupon updated successfully.');
        } catch (\Exception $e) {
            return $this->sendError('Error updating coupon.', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Coupon $coupon
     * @return \Illuminate\Http\Response
     */
    public function destroy(Coupon $coupon)
    {
        //
    }

}
