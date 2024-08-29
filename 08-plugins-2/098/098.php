// ************************************************************************
// ********** /02-curso-jquery-avanzado/08-plugins-2/098/098.php **********
// ************************************************************************

<?php

if ($_FILES['file']) {
    
    $uploadDir = 'uploads/';
    $uploadFile = $uploadDir . basename($_FILES['file']['name']);

    if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
        echo "El archivo se subió con éxito.";
    } else {
        echo "¡Error al subir el archivo!";
    }
}

?>