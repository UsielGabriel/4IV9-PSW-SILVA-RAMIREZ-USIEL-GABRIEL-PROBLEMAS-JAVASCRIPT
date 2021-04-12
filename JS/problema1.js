function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d.]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){

    let cantidadInveritir=parseFloat(document.formulario.cantidad.value);
    let mesesInvertir=parseFloat(document.formulario.meses.value);
    

    let inversion=cantidadInveritir*mesesInvertir;
    let interes=inversion*0.02;
    let ganancias=(interes+inversion).toFixed(2);

    if(mesesInvertir>=959){
        document.formulario.gano.value=`El limite son 80 años o 959semanas`;  
    }

    document.formulario.gano.value=`$  `+ganancias;  

}

function borrar(){

    document.formulario.cantidad.value="";
    document.formulario.meses.value="";
    document.formulario.gano.value="";

}


