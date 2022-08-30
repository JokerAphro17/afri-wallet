@component('mail::message')
# Bonsoir {{ $user->lastname }} <br>
Votre mot de passe a été modifié <br>
Le nouveau mot de passe est : {{ $password }} <br>

{{ config('app.name') }}
@endcomponent
