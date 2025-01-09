<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $pname = $_POST['pname'];
    $pdesc = $_POST['pdesc'];
    $pimg = $_FILES['pimg'];
    $purl = $_POST['purl'];
    $purlr = $_POST['purlr'];

    // Example response
    echo json_encode([
        'success' => true,
        'imageUrl' => '/uploads/' . $pimg['name'], // Simulate image URL
        'pname' => $pname,
        'pdesc' => $pdesc,
        'purl' => $purl,
        'purlr' => $purlr,
    ]);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
?>