function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d.]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    let num1=parseFloat(document.formulario.primero.value);
    let num2=parseFloat(document.formulario.segundo.value);
    let num3=parseFloat(document.formulario.tercero.value);

    // if(num1>num2 & num1>num3){
    //     document.formulario.mayor.value=``+num1;
    // }
    //     else if(num2>num1 & num2>num3){
    //         document.formulario.mayor.value=``+num2;
    //     }
    //         else if(num3>num2 & num3>num1){
    //             document.formulario.mayor.value=``+num3;
    //         }
    //             else if(num1==num2||num1==num3||num2==num3){

    //             }


    let resultado=Math.max(num1, num2, num3);

    document.formulario.mayor.value=``+resultado;
}


function borrar(){
    document.formulario.primero.value="";
    document.formulario.segundo.value="";
    document.formulario.tercero.value="";
    document.formulario.mayor.value="";
}





