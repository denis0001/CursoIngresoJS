function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var number;

	number=Math.floor((Math.random() * 10) + 1); 
	document.getElementById('FormIngreso').value=number;

}//FIN DE LA FUNCIÓN