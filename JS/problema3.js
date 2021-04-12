function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d.]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){

    let Total=parseFloat(document.formulario.total.value);

    let descuento=Total*0.10;
    let Pagar=(Total-descuento).toFixed(2);

    document.formulario.pagar.value=`$  `+Pagar;

}

function borrar(){

    document.formulario.total.value="";
    document.formulario.pagar.value="";
}





















