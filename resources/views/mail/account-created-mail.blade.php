@component('mail::message')
# Bienvenu sur African Wallet <br>
Bonjour Mr/Mme {{ $user->lastname }} <br>
Votre compte a été créé avec le role <strong> {{$user->role}} </strong>. <br>
Vous information de connexion sont les suivantes: 
<h3>Email: {{$user->email}}</h3> 
<h3>Mot de passe: {{$password}}</h3> 

@component('mail::button', ['url' => url(env('APP_URL').'/login')])
Connexion
@endcomponent

Cordialement,<br>
Equipe Technique de African
@endcomponent
