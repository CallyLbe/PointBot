<?php
//session_start();
require_once 'src/config.php';
require_once 'src/oauthtwitch.php';

$link = $oauth->get_link_connect();

if(!empty($_GET['code'])){
    $code = htmlspecialchars($_GET['code']);
    $token = $oauth->get_token($code);

    /*$_SESSION['token'] = $token;
    header('Location: callback.php');
    die();*/

    var_dump($token);
}
?>

<!doctype html>
<html lang="eng">
    <head>
        <title>Test OAUTH</title>
        <meta charset="utf-8">

    </head>
    <body>
        <div class="container-fluid">
            <div class="col-12 m-4">
                <div class="text-center">
                    <h1 class="m-3">OAuth</h1>
                        <a href="<?php echo $link; ?>" class="btn btn-twitch">
                        <input type="button" value="Bouton cliquer">
                        </a>
                </div>
            </div>
        </div>
    </body>
</html>

<style>
    .button{
        background: #9146FF;
        color: white;
        width: 50px;
    }
</style>

