function Mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while (respuesta=='si')
	{
		contador++;
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);

		respuesta=prompt('¿Desea seguir agregando numeros?');

		acumulador=acumulador+numero;
	}





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN