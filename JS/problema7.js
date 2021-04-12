function validar(e){

    let teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    let patron = /[0-9/d.]/; 

    let prueba = String.fromCharCode(teclado);

    return patron.test(prueba);

}

function calcular(){
    let num1=parseFloat(document.formulario.primero.value);
    let num2=parseFloat(document.formulario.segundo.value);

    if (num1===num2){
        let multiplicar=(num1*num2).toFixed(4);

        document.formulario.operacion.value=`multiplicacion`;
        document.formulario.resultado.value=``+multiplicar;        
    }
        else if (num1>num2){
            let restar=(num1-num2).toFixed(4);;

            document.formulario.operacion.value=`resta`;
            document.formulario.resultado.value=``+restar;            
        }
            else if(num1<num2){
                let sumar=(num1+num2).toFixed(4);;

                document.formulario.operacion.value=`suma`;
                document.formulario.resultado.value=``+sumar;                
            }

}

function borrar(){
    document.formulario.primero.value=``;
    document.formulario.segundo.value=``;
    document.formulario.resultado.value=``;
    document.formulario.operacion.value=``; 
}