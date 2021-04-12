function calcular(){

    //let mesNac=parseInt(document.formulario.mes.value);
    let añoNac=parseInt(document.formulario.año.value);

    let edad=2021-añoNac;

    document.formulario.edad.value=`  `+edad+`  años`;
}

function borrar(){

    document.formulario.edad.value=``;
    document.formulario.año.value=``;

}