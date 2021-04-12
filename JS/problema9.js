function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){
    let ganado=parseInt(document.formulario.ganado.value);
    let trabajado=parseInt(document.formulario.horas.value);

    let hrsExtra=trabajado-40;

    if (trabajado>168){
        document.formulario.pagar.value=`La semana solo tiene 168hrs.`;
    }
        else if (trabajado<=168){

            if (hrsExtra>0 & hrsExtra<8){
                let pagar1=(hrsExtra*(ganado*2))+(trabajado-hrsExtra)*ganado;
        
                document.formulario.pagar.value=`$  `+pagar1;
            } 
                else if(hrsExtra>=8){
                    let pagar2=(8*(ganado*2))+((hrsExtra-8)*(ganado*3))+((trabajado-hrsExtra)*ganado);
        
                    document.formulario.pagar.value=`$  `+pagar2;
                }
                    else if(hrsExtra<0){
                        let pagar3=Math.abs(trabajado*ganado);
        
                        document.formulario.pagar.value=`$  `+pagar3;
                    }
        } 
}

function borrar(){
    document.formulario.ganado.value=``;
    document.formulario.horas.value=``;
    document.formulario.pagar.value=``;
}