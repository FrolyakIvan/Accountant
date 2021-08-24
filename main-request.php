<?php
if(isset($_POST['M_tel'])){
	$M_name = $_POST['M_name'];
	$M_tel = $_POST['M_tel'];    
	
	$to      = 'yyvan73@gmail.com';
	$subject = 'Main Request';

	$message = "
		
		Name: ".htmlspecialchars($M_name)."
		Telephone: ".htmlspecialchars($M_tel);

	$headers = 'From: '. $subject . "\r\n" .
    'Reply-To: '. $subject . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	$status = mail($to, $subject, $message, $headers);

	
	echo json_encode($res);
}
?>