<?php
if(isset($_POST['F_tel'])){
	$F_tel = $_POST['F_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Second Re_call';

	$message = "
		
		Telephone: ".htmlspecialchars($F_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>