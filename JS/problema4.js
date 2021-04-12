function calcular(){
    let calificacion1=parseInt(document.formulario.parcial1.value);
    let calificacion2=parseInt(document.formulario.parcial2.value);
    let calificacion3=parseInt(document.formulario.parcial3.value);

    let califExamen=parseInt(document.formulario.examen.value);
    let califProyecto=parseInt(document.formulario.proyecto.value);

    let semestre=((calificacion1+calificacion2+calificacion3)/3)*.55;
    let calificacionExamen=califExamen*.30;
    let calificacionProyecto=califProyecto*.15;

    let calificacionFinal=(semestre+calificacionExamen+calificacionProyecto).toFixed(1);

    document.formulario.calificacion.value=``+calificacionFinal;


}
function borrar(){

    document.formulario.parcial1.value =``;
    document.formulario.parcial2.value =``;
    document.formulario.parcial3.value =``;
    document.formulario.examen.value =``;
    document.formulario.proyecto.value =``;
    document.formulario.calificacion.value =``;

}