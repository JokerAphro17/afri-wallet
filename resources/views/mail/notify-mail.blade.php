@component('mail::message')
# Bonsoir {{ $user->lastname }} <br>
Nous vous informons d'une tentative de modification de adress email <br>
{{ config('app.name') }}
@endcomponent
