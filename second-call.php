<?php
if(isset($_POST['S_tel'])){
	$S_tel = $_POST['S_tel'];
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Second';

	$message = "
		
		Telephone: ".htmlspecialchars($S_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>
