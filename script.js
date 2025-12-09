document.getElementById("cambiar de texto").addEventListener("click",function()
{
document.getElementById("miparrafo").textContent = "¡El Texto ha cambiado"
});



function verificarcampo()   {
// obtenemos el valor del campo de texto 
let campo = document.getElementById("micampo").ariaValueMax.trim();

// verificamos si esta vacio
if (campo ==="")    {
    alert("⚠️ El campo de texto estavacio. por favor,escribe algo.");
} else  {
    alert("✅ El campo de texto ha sido completado correctamente.");
}

}