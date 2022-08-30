<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    public function sendResponse($result, $message)
    {
        return response()->json([
            'success' => true,
            'data'    => $result,
            'message' => $message,
        ]);
    }
    public function sendError($message,$error=[], $code = 404)
    {
        return response()->json([
            'success' => false,
            'error' => $message,
            'error_message' => $error,
        ], $code);
    }
    public function sendInfo($message)
    {
        return response()->json([
            'message' => $message,
        ]);
    }

}
