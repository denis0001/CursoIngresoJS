function Mostrar()
{
	//al generar numeros random del 0 al 10 se debe contar la cantidad de cada una de estas cifras, repetir la iteracion para lanzar el random 
	//100 mil veces e informar: 1- la cantidad de veces que salio el numero del 0 al 10
	//2- el porcentaje de veces que salio cada numero con respecto al total

	//for 0 al 100 mil



	/*1 9%
      2 11%
	

	*/

	var numeroIngresado;
	var numeroAnterior;
	var tieneDivisor='no';
	var numeroRecorrido;

	numeroIngresado=prompt('Ingrese numero');
	numeroIngresado=parseInt(numeroIngresado);

	for(numeroRecorrido=2;numeroAnterior<(numeroIngresado/2);numeroRecorrido++)
	{
		console.log(numeroRecorrido);
		tieneDivisor="no";

		for (numeroAnterior=2;numeroAnterior<(numeroIngresado/2);numeroAnterior++)
		{

		if (numeroIngresado % numeroAnterior==0)

		{
			tieneDivisor="si";
			//alert("es divisor");
			break;
		}

		/*else
		{
			alert("no es divisor");
		}
		*/
		}

		if(tieneDivisor=='no')
		{
			console.log('Es primo '+numeroIngresado);
		}
	}

	
	/*else
	{
		console.log('No es primo');
	}
*/





}//FIN DE LA FUNCIÓN