function validar(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d.]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function validar2(e){

    var teclado = (document.all)?e.keyCode:e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d]/;

    var prueba = String.fromCharCode(teclado);

    return patron.test(prueba);
}

function calcular(){

    let mes=parseFloat(document.formulario.salario.value);
    let tiempo=parseFloat(document.formulario.años.value);

    if(tiempo>=100){
        document.formulario.utilidad.value=`No se puede trabajar tanto tiempo`;
    }
        else if(tiempo<100){

            if(tiempo<1){
                let pagar=(mes+(mes*0.05)).toFixed(4);
                document.formulario.utilidad.value=`5%`;
                document.formulario.salautil.value=`$  `+pagar;
            }
                else if(tiempo>=1 & tiempo<2){
                    let pagar1=(mes+(mes*0.07)).toFixed(4);
                    document.formulario.utilidad.value=`7%`;
                    document.formulario.salautil.value=`$  `+pagar1;
                }
                    else if(tiempo>=2 & tiempo<5){
                        let pagar2=(mes+(mes*0.10)).toFixed(4);
                        document.formulario.utilidad.value=`10%`;
                        document.formulario.salautil.value=`$  `+pagar2;
                    }
                        else if(tiempo>=5 & tiempo<10){
                            let pagar3=(mes+(mes*0.15)).toFixed(4);
                            document.formulario.utilidad.value=`15%`;
                            document.formulario.salautil.value=`$  `+pagar3;
                        }
                            else if(tiempo>=10){
                                let pagar4=(mes+(mes*0.20)).toFixed(4);
                                document.formulario.utilidad.value=`20%`;
                                document.formulario.salautil.value=`$  `+pagar4;
                            }
        }    
}

function borrar(){

    document.formulario.salario.value="";
    document.formulario.años.value="";
    document.formulario.utilidad.value="";
    document.formulario.salautil.value="";
}