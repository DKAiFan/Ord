<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $motivation = $_POST['motivation'];

    $to = "lasse.thing@gmail.com";
    $subject = "Ny tilmelding fra " . $name;
    $message = "Navn: " . $name . "\r\n" .
               "Email: " . $email . "\r\n" .
               "Motivation: " . $motivation . "\r\n";

    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email could not be sent.";
    }
}
?>