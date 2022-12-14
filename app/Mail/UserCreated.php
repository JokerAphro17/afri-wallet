<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Request;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserCreated extends Mailable
{
    use Queueable, SerializesModels;
    public $user;
    public $password;
    public $host ;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(User $user, $password, $host)
    {
        $this->user = $user;
        $this->password = $password;
        $this->host = $host;
    }
    

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('mail.account-created-mail')->subject('Création de votre compte');
    }
}
