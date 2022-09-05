@component('mail::message')
# Mot de passe changé
Un nouveau mot de passe a été créé pour votre compte. <br>
<br> Mot de passe :<strong> {{ $password }}</strong> <br>
<small>
    Nous vous conseillons de changer votre mot de passe après la connexion.
</small> <br>

L'equipe technique

@endcomponent
