function validar (m){
    var teclado = (document.all)?m.keyCode:m.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d.]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){

    let salario=parseFloat(document.formulario.sueldo.value);
    let venta1=parseFloat(document.formulario.venta1.value);
    let venta2=parseFloat(document.formulario.venta2.value);
    let venta3=parseFloat(document.formulario.venta3.value);


    let comicion1=venta1*0.10;
    let comicion2=venta2*0.10;
    let comicion3=venta3*0.10;
    let comiciones=(comicion1+comicion2+comicion3).toFixed(2);

    let totalDelMes=(salario+comiciones).toFixed(2);

    document.formulario.comicion.value=`$  `+comiciones;
    document.formulario.total.value=`$  `+totalDelMes;

}

function borrar(){

    document.formulario.sueldo.value="";
    document.formulario.venta1.value="";
    document.formulario.venta2.value="";
    document.formulario.venta3.value="";
    document.formulario.total.value="";
    document.formulario.comicion.value="";

}
