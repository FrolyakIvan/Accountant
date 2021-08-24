<?php
if(isset($_POST['H_tel'])){
	$H_name = $_POST['H_name'];
	$H_tel = $_POST['H_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Main Re_call';

	$message = "
		
		Name: ".htmlspecialchars($H_name)."
		Telephone: ".htmlspecialchars($H_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>