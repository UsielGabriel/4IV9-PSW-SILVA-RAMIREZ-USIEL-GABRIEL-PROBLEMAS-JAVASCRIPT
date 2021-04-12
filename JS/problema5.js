function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);

}

function calcular(){
    let totalDeHombres=parseInt(document.formulario.hombres.value);
    let totalDeMujeres=parseInt(document.formulario.mujeres.value);

    let salon=totalDeMujeres+totalDeHombres;
    
    let porcentajeMujeres=((totalDeMujeres*100)/salon).toFixed(2);
    let porcentajeHombres=((totalDeHombres*100)/salon).toFixed(2);

    document.formulario.porhombre.value=``+porcentajeHombres+`  %`;
    document.formulario.pormujer.value=``+porcentajeMujeres+`  %`;

}

function borrar(){
    document.formulario.hombres.value=``;
    document.formulario.mujeres.value=``;
    document.formulario.porhombre.value=``;
    document.formulario.pormujer.value=``;
}