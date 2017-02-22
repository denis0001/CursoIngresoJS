/*function Mostrar()
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
	var pares=0;
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
		if (numero%2==0)
		{
			pares++;
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
		'6.Cantidad numeros pares= '+pares+'<BR>'+ 
		'7.Promedio de positivos= '+prompositivos+'<BR>'+ 
		'8.Promedio negativos= '+promnegativos+'<BR>'+ 
		'9.Diferencia entre positivos y negativos= '+diferencia)



}*/




function Mostrar()
{
	// iteracion hasta que el usuario quiera

	// alert('funciona');
	var respuesta = 's';
	var nota;
	var sumadorNota=0;
	var contadorNota=0;
	var contadorPersonas=0;
	var promedioNota;
	var edad;
	var nombre;
	var sexo;
	var masViejo;
	var edadmasViejo;
	var contadorMujeres=0;
	var contadorHombresAprobados=0;
	var contadorMujeresMenores20=0;
	var nombreMujerMejorNota=0;
	var notaMujerMejorNota=0;
	var nombreHombreMejorNota=0;
	var notaHombreMejorNota=0;
	var contadorMujeresAprobadas=0;
	var contadorHombres2;
	var sumadorNotaF;
	var sumadorNotaM;
	var promedioM;
	var promedioF;
	var nombrePrimer10;
	var contadorPrimer10=0;
	var sumadorAprobados=0;
	var sumadorDesaprobados=0;
	var contadorAprobados=0;
	var contadorDesaprobados=0;
	var promedioAprobados;
	var promedioDesaprobados;
	var contadorHombresMayoresAprobados=0;
	var sexoPrimer10;

	while (respuesta=='s')
	{
		contadorNota++;

		nota=prompt('Por favor ingrese su nota');
		nota=parseInt(nota);

		while(nota<0 || nota>10)
		{
			nota=prompt('Por favor ingrese su nota');
			nota=parseInt(nota);
		}


		edad=prompt('Ingrese edad');
		edad=parseInt(edad);
		while(edad<0 || edad>180)
		{
			edad=prompt('Ingrese edad');
			edad=parseInt(edad);
		}

		nombre=prompt('Ingrese nombre');

		sexo=prompt('Ingrese sexo: m o f');
		while(!(sexo=='m' || sexo=='f'))
		{
			sexo=prompt('Ingrese sexo: m o f');
		}
		//aca termino la carga de validacion de datos
		//comenzamos a hacer las operaciones necesarias
		contadorPersonas++;

		if (contadorNota==0)
		{
			masViejo=nombre;
			edadmasViejo=edad;
		}
		else 
		{
			if(edad>edadmasViejo)
			{
				masViejo=nombre;
				edadmasViejo=edad;
			}
		}

		if (sexo =='f' && nota>3)
		{
			contadorMujeresAprobadas++;
		}

		if (sexo=='m' && nota>3)
		{
			contadorHombresAprobados++;
		}

		if (sexo=='m' && edad>25 && nota>3)
		{
			contadorHombresMayoresAprobados++;
		}

		if (sexo=='f' && edad<20)
		{
			contadorMujeresMenores20++;
		}

		if(nota>notaMujerMejorNota && sexo=='f')
		{
			notaMujerMejorNota=nota;
			nombreMujerMejorNota=nombre;
		}
		if (nota>notaHombreMejorNota && sexo=='m')
		{
			notaHombreMejorNota=nota;
			nombreHombreMejorNota=nombre;
		}

		if(sexo=='m')
		{
			contadorHombres++;
			sumadorNotaM=sumadorNotaM+nota;
		}
		if (sexo=='f')
		{
			contadorMujeres2++;
			sumadorNotaF=sumadorNotaF+nota
		}

		if(nota==10 && contadorPrimer10==0)
		{
			contadorPrimer10++;
			primer10 = nombre;
			sexoPrimer10 = sexo;
		}

		if(nota>3)
		{
			contadorAprobados++;
		}

		if (nota<4)
		{
			contadorDesaprobados++;
		}


		/*
			1-cantidad de mujeres aprobadas
			2-cantidad de hombres mayores a 25 aprobados
			3-cantidad de mujeres menores a 20 años 
			4-el nombre de la mujer con la mejore nota
			5-el nombre del hombre con mejor nota
			6-promedio de nota de los hombres
			7-promedio de nota de las mujres
			8-porcentajes de aprobados vs desaprobados
			9-el sexo y el nombre de la primer persona que se saque 10

		*/





		sumadorNota=nota+sumadorNota;
		


		respuesta=prompt('ingrese s para continuar');
	}

	promedioM=sumadorNotaM/contadorHombres;

	promedioF=sumadorNotaF/contadorMujeres;


	promedioNota=sumadorNota/contadorNota;

	//promedioNota=prompt(promedioNota);

	promedioAprobados=contadorPersonas/contadorAprobados;
	promedioDesaprobados=contadorPersonas/contadorDesaprobados;


	document.write('1-La cantidad de mujeres aprobadas es: '+contadorMujeresAprobadas+'<BR>'+
					'2-La cantidad de hombres mayores a 25 años aprobados es: '+ contadorHombresMayoresAprobados+'<BR>'+
					'3-La cantidad de mujeres menores a 20 años es: '+contadorMujeresMenores20+'<BR>'+
					'4-El nombre de la mujer con la mejor nota es: ' +nombreMujerMejorNota+'<BR>'+
					'5-El nombre del hombre con mejor nota es: '+nombreHombreMejorNota+'<BR>'+
					'6-El promedio de nota de los hombres es: ' +promedioM+'<BR>'+
					'7-El promedio de nota de las mujeres es: ' +promedioF+'<BR>'+
					'8-El porcentaje de aprobados es '+promedioAprobados+ ' y el de desaprobados es '+promedioDesaprobados+'<BR>'+
					'9- El sexo de la primer persona que se sacó 10 es: '+sexoPrimer10+ 'y el nombre '+nombrePrimer10);


}

		/*
			1-cantidad de mujeres aprobadas
			2-cantidad de hombres mayores a 25 aprobados
			3-cantidad de mujeres menores a 20 años 
			4-el nombre de la mujer con la mejore nota
			5-el nombre del hombre con mejor nota
			6-promedio de nota de los hombres
			7-promedio de nota de las mujres
			8-porcentajes de aprobados vs desaprobados
			9-el sexo y el nombre de la primer persona que se saque 10

		*/


//FIN DE LA FUNCIÓN