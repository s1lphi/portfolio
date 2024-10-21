<?php
if (isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $aboutarea = $_POST['aboutarea'];
  
  $to = 'morgueofurexes.manage@gmail.com'; // замініть на вашу електронну адресу
  $subject = 'New form submission';
  $message = "Name: $name\nEmail: $email\nText: $aboutarea\n";
  $headers = "From: $email\r\nReply-To: $email\r\n";

  if (mail($to, $subject, $message, $headers)) {
    echo 'success';
  } else {
    echo 'error';
  }
}
?>