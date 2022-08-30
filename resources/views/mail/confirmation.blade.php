@component('mail::message')
@if($code ?? '')
# Confirmation de votre compte
Code de confirmation : {{ $code }}
Thanks,<br>
@else
# Rinitialisation de votre mot de passe

 cliquez sur le lien pour reinitialiser votre mot de passe
@component('mail::button', ['url' => env('APP_URL').'/password/reset/'.$token])
Réinitialiser votre mot de passe
@endcomponent
@endif
Merci ,<br>
L'equipe African Wallet
{{ config('app.name') }}
@endcomponent
