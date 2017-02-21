function Mostrar()
{

	var contador=0;
	var numero;
	var min;
	var max;

	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);
		if(contador==0)
		{
			max=numero;
			min=numero;
			respuesta=prompt('Desea seguir agregando numeros');
		}

		else 
		{
			if (numero>max)
			{
				max=numero;
				respuesta=prompt('Desea seguir agregando numeros');
			}
			if (numero<min)
			{
				min=numero;
				respuesta=prompt('Desea seguir agregando numeros');
			}
		}
		contador++;
	
	}

	document.getElementById('maximo').value=max;
	document.getElementById('minimo').value=min;


}//FIN DE LA FUNCIÓN