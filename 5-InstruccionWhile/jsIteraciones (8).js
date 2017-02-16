function Mostrar()
{
	var numero
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';

	while(respuesta=='si')
	{
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);
		if(numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			positivo=positivo+numero;
		}

		respuesta=prompt('¿Desea seguir agregando números?')
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN