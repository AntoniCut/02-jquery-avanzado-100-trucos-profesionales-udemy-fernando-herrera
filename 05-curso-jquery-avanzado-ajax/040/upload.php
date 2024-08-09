<?php

//  ****************************************************************************************  
//  **********  /02-curso-jquery-avanzado/05-jquery-avanzado-ajax/040/upload.php  **********  
//  ****************************************************************************************  

//  -----  Aqui recibimos el archivo de una carga regular, y luego imprimimos el nombre:
echo 'Subiste un Archivo: ' . $_FILES['file']['name'];

//  La siguiente linea, es potencialmente insegura y debe ser usada unicamente con fines experimentals.
//  Usuarios maliciosos pueden subir cualquier archivo incluyendo script PHP que pueden hacer mucho
//  daño a tu aplicación.
move_uploaded_file(
    $_FILES['file']['tmp_name'],
    '../descargas/' . $_FILES['file']['name']
);
