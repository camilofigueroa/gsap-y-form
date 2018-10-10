/**
 * Autor: Camilo Figueroa ( Crivera )
 * Este es un sencillo ejemplo para probar un framework de animaciones en html css.
 * Ejemplo: https://www.supremo.co.uk/
 */


window.onload = function()
{
    var texto1 = document.getElementById( "texto-nombre" );

    //Aquí se implementa una demora.
    TweenMax.to( texto1, 3, { left: "100px", delay: 2 } );

}





