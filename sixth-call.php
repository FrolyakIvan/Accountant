<?php
if(isset($_POST['SX_tel'])){
	$SX_tel = $_POST['SX_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Second Re_call';

	$message = "
		
		Telephone: ".htmlspecialchars($SX_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>