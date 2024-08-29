// ****************************************************************************************
// ********** /02-curso-jquery-avanzado/08-plugins-2/098/public/js/dropzoneJS.js **********
// ****************************************************************************************


Dropzone.autoDiscover = false;

const dropzone = new Dropzone(".drop", {
    url: "http://localhost:5500/upload", // La URL debe coincidir con la del servidor
    method: "post",
    paramName: "file",
    maxFilesize: 2, // Tamaño máximo del archivo en MB
    acceptedFiles: ".jpg,.png,.pdf,.docx,.ico",
    dictDefaultMessage: "Deje caer archivos aquí para subir",
    init: function() {
        this.on("success", function(file, response) {
            console.log("Archivo subido con éxito:", response);
        });

        this.on("error", function(file, response) {
            console.error("Error al subir el archivo:", response);
        });
    }
});

