function Mostrar()
{

	var numero;
	var respuesta='s';
	var numerosPares=0;
	var acumulador=0;
	var contador=0;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;

	while(respuesta='s')
	{
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt('Ingrese numero positivo');
			numero=parseInt(numero);
		}

		if (numero%2==0)
		{
			numerosPares++;
		}

		if(contador==0)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
		}

		else
		{
			if(numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}

			if(numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}
		}

		contador++;
		acumulador=acumulador+numero;

		respuesta=prompt('desea seguir agregando numeros? Ingrese "s" si lo desea');

	}
	promedio=acumulador/contador;

	document.write('La cantidad de numeros pares es '+numerosPares+'<BR>'+
					'El promedio de todos los numeros ingresados es'+promedio+'<BR>'+
					'La suma de todos los nuemros es'+acumulador+'<BR>'+
					'El numero maximo es '+numeroMaximo+' y el minimo es'+numero minimo)



}//FIN DE LA FUNCIÓN