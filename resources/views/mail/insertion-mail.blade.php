@component('mail::message')
# Insertion

Cliquez sur le liens pour proceder a aux payment de votre Insertion <br>

<a href="{{ env('APP_URL') }}/payment/insertion/{{ $insertion->uuid }}">
    {{ env('APP_URL') }}/payment/insertion/{{ $insertion->uuid }}</a>

Thanks,<br>
{{ config('app.name') }}
@endcomponent
