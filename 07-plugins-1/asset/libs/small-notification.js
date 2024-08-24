//  *****************************************************************************
//  **********  /06.la-clase-maestra/asset/libs/small-notification.js  **********
//  *****************************************************************************


(function ($) {

    $(document).ready(function () {
        
        const contenido = '<div id="small-top-left-container"></div>';
        $('body').append(contenido);
    });


    $.smallBox = function (ajustes) {

        let contenido = '';

        ajustes = $.extend({
            titulo: "Hola Mundo",
            contenido: "Saludos, soy un plugin!",
            img: './asset/img/ball.png'
        }, ajustes);
        
        console.log(ajustes);

        contenido = `
            <div class="small-box">
                <div class="row">
                    <div class="col-md-4"> <img src=${ajustes.img}> </div>
                    <div class="col-md-8">
                        <h4> ${ajustes.titulo} </h4>
                        <p> ${ajustes.contenido} </p>
                    </div>
                </div>
            </div>
        `;

        $("#small-top-left-container").append(contenido);

    }


})(jQuery);
