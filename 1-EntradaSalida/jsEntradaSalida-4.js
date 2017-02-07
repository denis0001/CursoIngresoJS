/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre=prompt("Por favor ingresá tu nombre:"); 
	document.getElementById('elNombre').value=nombre; //mostarlo por getElementBtId
	
}