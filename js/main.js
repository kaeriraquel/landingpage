'use strict'
window.addEventListener('load',()=>{

    $(function () {
        $('#btn-ventana').on('clic', function () {  
        $('#ventanaModal').modal();
        });
    });

    window.addEventListener('scroll', function () {
        var header = document.querySelector('header');
        var logo = this.document.querySelector('.logo');
        // var simple = this.document.querySelector('.simple');
        // var unique = this.document.querySelector('.unique');
        // var tested = this.document.querySelector('.tested');
        var features = this.document.querySelector('.contenedor-general');


        header.classList.toggle('abajo',window.scrollY>300);
        logo.classList.toggle('logo-color',window.scrollY>300);
        features.classList.toggle('features-animation',this.window.scrollY>300);
    })

});