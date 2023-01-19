<?php

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$userMessage = $_POST['userMessage'];

$to = "test@test.test";
$subject = 'You get message from site Deep Space'; 
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers = "From: $name <$email>" . "\r\n";
$message .= "Name: ".$name."\r\n";
$message .= "Mail: ".$email."\r\n";
$message .= "Phone: ".$phone."\r\n";
$message .= "Message: ".$userMessage."\r\n";

if (mail($to,$subject,$message,$headers)) {
	echo 'Your message has been send!';
} else {
	echo 'Mistake!';
}

