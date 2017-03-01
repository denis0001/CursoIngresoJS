function Mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var acumuladorDiv;
	var numeroRecorrido;

	numeroIngresado=prompt(numeroIngresado);
	numeroIngresado=parseInt(numeroIngresado);
	//for(numeroRecorrido=2; numeroRecorrido<numeroIngresado;numeroRecorrido++)
	for(numeroRecorrido=numeroIngresado-1;numeroRecorrido>2;numeroRecorrido--)
	{	
		acumuladorDiv=0;

		for (numeroAnterior=2;numeroAnterior<(numeroRecorrido/2);numeroAnterior++)
		{
			if (numeroRecorrido%numeroAnterior==0)
			{
				acumuladorDiv=acumuladorDiv+numeroAnterior;
			}
		}

	

		if(acumuladorDiv==numeroAnterior)
		{
			console.log('Es perfecto '+numeroAnterior);
		}
	}



}//FIN DE LA FUNCIÓN