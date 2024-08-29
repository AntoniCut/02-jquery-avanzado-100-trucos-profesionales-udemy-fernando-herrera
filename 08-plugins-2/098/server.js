// **************************************************************************
// ********** /02-curso-jquery-avanzado/08-plugins-2/098/server.js **********
// **************************************************************************


//const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public', 'uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Ruta para manejar la raíz
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para manejar la subida de archivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('Archivo subido exitosamente!');
});

// Cambia el puerto al 5500 para coincidir con DropzoneJS
app.listen(5500, () => {
    console.log('Servidor escuchando en el puerto 5500');
});
