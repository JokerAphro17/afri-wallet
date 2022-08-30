@component('mail::message')
@if(!$user->restriction)
    Vore compte a été activé <br>
    cliquer sur le boutton pour vous connecté 
    @component('mail::button', ['url' => env('APP_URL').'/login'])
        Se connecter
    @endcomponent
@else
    Vore compte a été désactivé <br>
   Contacté l'administrateur pour plus d'information <br>
@endif
{{ config('app.name') }}
@endcomponent
