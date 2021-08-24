<?php
if(isset($_POST['FF_tel'])){
	$FF_tel = $_POST['FF_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Second Re_call';

	$message = "
		
		Telephone: ".htmlspecialchars($FF_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>