<?php

$recepient = "airenekara@gmail.com";
$sitename = "bhbirf";

$name = trim($_GET["name"]);
$phone = trim($_GET["user-E-mail"]);
$text = trim($_GET["user-message"]);


$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nТекст: $text";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");