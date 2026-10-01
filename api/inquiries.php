<?php

require __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    exit('Use the inquiry form on the restaurant site.');
}

$allowedPages = [
    'reservations.html',
    'catering.html',
    'party.html',
    'contactus.html',
];

$allowedTypes = [
    'reservation',
    'catering',
    'party',
    'contact',
];

function inquiry_redirect(string $page, string $query): void
{
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'] ?? 'anjapparsd.com';
    header('Location: ' . $scheme . '://' . $host . '/' . $page . $query, true, 303);
    exit;
}

$page = basename((string) ($_POST['redirect'] ?? 'contactus.html'));
if (!in_array($page, $allowedPages, true)) {
    $page = 'contactus.html';
}

if (trim((string) ($_POST['website'] ?? '')) !== '') {
    inquiry_redirect($page, '?sent=1');
}

$type = (string) ($_POST['inquiry_type'] ?? '');
$subject = trim((string) ($_POST['subject'] ?? ''));
$first = trim((string) ($_POST['firstName'] ?? ''));
$last = trim((string) ($_POST['lastName'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$details = trim((string) ($_POST['details'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if (
    !in_array($type, $allowedTypes, true)
    || $subject === ''
    || $first === ''
    || $last === ''
    || $message === ''
    || filter_var($email, FILTER_VALIDATE_EMAIL) === false
    || strlen($first) > 80
    || strlen($last) > 80
    || strlen($email) > 180
    || strlen($phone) > 40
    || strlen($details) > 255
    || strlen($subject) > 180
    || strlen($message) > 4000
) {
    inquiry_redirect($page, '?error=1');
}

$db = restaurant_db();
$statement = $db->prepare(
    'INSERT INTO inquiries (inquiry_type, subject, first_name, last_name, email, phone, details, message)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)'
);

if ($statement === false) {
    http_response_code(500);
    exit('The inquiry could not be saved.');
}

$statement->bind_param(
    'ssssssss',
    $type,
    $subject,
    $first,
    $last,
    $email,
    $phone,
    $details,
    $message
);

if (!$statement->execute()) {
    http_response_code(500);
    exit('The inquiry could not be saved.');
}

$statement->close();
inquiry_redirect($page, '?sent=1');
