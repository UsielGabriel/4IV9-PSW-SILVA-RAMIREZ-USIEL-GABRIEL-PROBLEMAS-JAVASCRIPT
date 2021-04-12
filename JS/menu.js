const botonMenu=document.querySelector(".menu_boton_bars");
const menu=document.querySelector(".navegacion_bottom");

botonMenu.addEventListener("click", function(){
  menu.classList.toggle("mostrar")
})

