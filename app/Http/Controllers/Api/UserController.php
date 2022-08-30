<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use App\Mail\UserCreated;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\Api\BaseController;

 
class UserController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $users = User::all();
            return $this->sendResponse($users, 'Utilisateurs envoyé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
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
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email|unique:users',
            
        ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(),400);
        }
        try {
           
            $input = $request->all();
            $input['uuid'] = Str::uuid();
            $input['email_verified_at'] = now();
            $input['role'] = 'admin';
            $password = Str::random(8);
            $input['password'] = Hash::make($password);
            $user = User::create($input);
            Mail::to($user->email)->send(new UserCreated($user, $password));
            return $this->sendResponse($user, 'Utilisateur créé avec success.',200 );
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage() ,500 );
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        try {
            return $this->sendResponse($user, 'Utilisateur envoyé avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $validator = Validator::make($request->all(), [
            'lastname' => 'required',
            'firstname' => 'required',
            'email' => 'required|email',
            'role' => 'nullable|in:admin,superadmin', ]);
        if ($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors(),400);
        }
        try {
            $input = $request->all();
            $user->update($input);
            return $this->sendResponse($user, 'Utilisateur modifié avec success.');
        } catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
        }
       
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy( )
    {
        //
    }
    public function userListePaginate($page)
    {   
        try{
            $user = User::where('role','user')->paginate(10, ['*'], 'page', $page);
            return $this->sendResponse($user, 'Utilisateurs envoyé avec success.');
        }
        catch(\Exception $e){
            return $this->sendError('Application crash.', $e->getMessage());
        }
    }
    public function adminListePaginate($page)
    {   
        try{
            $user = User::where('role','!=','user')->paginate(10, ['*'], 'page', $page);
            return $this->sendResponse($user, 'Utilisateurs envoyé avec success.');
        }
        catch(\Exception $e){
            return $this->sendError('Application crash.', $e->getMessage());
        }
    }
    public function access(Request $request, User $user)
    {
        try{
            $admin = $request->user();
            if($admin->role != 'superadmin'){
                return $this->sendError('Vous n\'avez pas les droits de modififier les access.', [],403);
            }
            $user->update(['is_active' => !$user->is_active]);
            return $this->sendResponse($user, 'Access modifié avec succès.');
        } catch (\Trowable $th) {
            return $this->sendError('Erreur lors de la modification de l\'accès.', $th->getMessage(), 500);
        }
    }

    public function sendIdentitiePiece(Request $request)
    {       
       $validator = Validator::make($request->all(), [
            'identitie_piece' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'adress_piece' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ])->validate();

        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors(),400);
        }

        try{
            $user = $request->user();
            $input = $request->all();
            if($request->hasFile('identitie_piece')){
                $input['identitie_piece'] = $request->file('identitie_piece')->store('public/identitie_piece');
            }
            if($request->hasFile('adress_piece')){
                $input['adress_piece'] = $request->file('adress_piece')->store('public/adress_piece');
            }
            $user->update($input);
            return $this->sendResponse($user, 'Pièce envoyé avec success.');

        } 
        catch (\Exception $e) {
            return $this->sendError('Application crash.', $e->getMessage());
            } 
        }  

}