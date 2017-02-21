function Mostrar()
{

	var contador1=0;
	var contador2=0;
	var contadorceros=0;
	var acumulador1=0;
	var acumulador2=0;
	var promnegativos;
	var prompositivos;
	var numero;
	var negativos;
	var positivos;
	var ceros;
	var pares;
	var diferencia;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);

		if (numero>0)
		{
			contador1++;
			acumulador1=acumulador1+numero;
			respuesta=prompt('¿Desea seguir agregando numeros?');

		}

		if (numero==0)
		{
			contadorceros++;
			respuesta=prompt('¿Desea seguir agregando numeros?');
		}

		if(numero<0)
		{
			contador2++;
			acumulador2=acumulador2+numero;
			respuesta=prompt('¿Desea seguir agregando numeros?');
		}


	}
	prompositivos=acumulador1/contador1;
	promnegativos=acumulador2/contador2;
	diferencia=acumulador1-acumulador2;

	document.write('1.Suma de los negativos= '+acumulador2+'<BR>'+ 
		'2.Suma de los positivos= '+acumulador1+'<BR>'+ 
		'3.Cantidad de positivos= '+contador1+'<BR>'+ 
		'4.Cantidad de negativos= '+contador2+'<BR>'+ 
		'5.Cantidad de ceros= '+contadorceros+'<BR>'+ 
		'6.Cantidad numeros pares= '+'<BR>'+ 
		'7.Promedio de positivos= '+prompositivos+'<BR>'+ 
		'8.Promedio negativos= '+promnegativos+'<BR>'+ 
		'9.Diferencia entre positivos y negativos= '+diferencia)



}//FIN DE LA FUNCIÓN