<?php

function restaurant_db(): mysqli
{
    static $connection = null;
    if ($connection instanceof mysqli) {
        return $connection;
    }

    $config = [
        'host' => getenv('DB_HOST') ?: '127.0.0.1',
        'user' => getenv('DB_USER') ?: 'anjappar',
        'pass' => getenv('DB_PASSWORD') !== false ? getenv('DB_PASSWORD') : '',
        'name' => getenv('DB_NAME') ?: 'anjappar',
        'port' => (int) (getenv('DB_PORT') ?: 3306),
    ];

    $local = __DIR__ . '/config.local.php';
    if (is_file($local)) {
        $override = require $local;
        if (is_array($override)) {
            $config = array_merge($config, $override);
        }
    }

    $connection = new mysqli(
        $config['host'],
        $config['user'],
        $config['pass'],
        $config['name'],
        (int) $config['port']
    );

    if ($connection->connect_error) {
        http_response_code(500);
        exit('The restaurant database is unavailable.');
    }

    $connection->set_charset('utf8mb4');
    return $connection;
}
