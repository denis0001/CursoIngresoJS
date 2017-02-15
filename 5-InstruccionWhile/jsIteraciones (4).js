function Mostrar()
{

	var numero; 

	variable = contador = 1;

	numero = prompt("Ingrese un número entre 0 y 9");

	while(numero<0 || numero>10)
	{
		contador++
		alert('entre 0 y 9...');

		numero = prompt("Ingrese un número entre 0 y 9");

		while(contador>2)
		{
			alert('ENTRE = 0 Y 9 PELOTUDO!!!');
			alert('Cagaste ahora no vas a poder salir')
		}
			
	}

	document.getElementById('Numero').value=(numero+' Lo pusiste bien capo');

}//FIN DE LA FUNCIÓN