//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostar()
{


/*	var base;
	var resultado;

	base=document.getElementById('BASE').value;
	base=parseInt(base);
	resultado=base*4;
	alert('El perimetro es: '+ resultado+'.');
*/

/*	var importe;
	var IVA =21;
	var importeMasIVA;

	importe=prompt('Ingrese importe');
	importe=parseInt(importe);



	importeMasIVA=(importe*21)/100;

	importeMasIVA= importeMasIVA+importe;

	alert('El importe final es: '+importeMasIVA);
*/


/*	var largo;
	var ancho;
	var perimetro;
	var alambre;

	largo=document.getElementById('LARGO').value;
	ancho=document.getElementById('ANCHO').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);

	perimetro= (largo*2)+(ancho*2);

	alambre=perimetro*3;

	alert('Se necesitan '+alambre+' metros de alambre');
*/

/*	var numero1;
	var numero2;
	var resultado;

	numero1=prompt('Ingrese el primer numero');
	numero1=parseInt(numero1);

	numero2= prompt('Ingrese el segundo numero');
	numero2=parseInt(numero2);

	if (numero1 == numero2)
	{
		resultado=numero1*numero2;
	}

	else
		{
			if (numero1>numero2)
			{
				resultado=numero1-numero2;
			}

			else
			{
				resultado=numero1+numero2;
			}
		}


	document.write(resultado);*/

/*
	var dia;


	dia=prompt('Ingrese día');


	switch (dia)
	{
		case 'sabado':
		case 'domingo':
			alert('es fin de semana');
			break;

		default:
			alert('a trabajar!!!!');
			break;


	}
*/

/*	var importe;
	var mayorImporte=0;
	var menorImporte=99999999999;

	var contador=0;

	while (contador<24)
	{
		contador++;

		importe=prompt('Ingrese importe');
		importe=parseInt(importe);

		while(importe<1)
		{
			importe=prompt('Ingrese importe mayor a 0');
			importe=parseInt(importe);
		}

		if (importe>mayorImporte)
		{
			mayorImporte=importe;
		}

		if (importe<menorImporte)
		{
			menorImporte=importe;
		}

	}


	alert('El mayor importe fue: ' + mayorImporte + ' y el menor fue: ' + menorImporte);

	
*/


/*	var nota;
	var sexo;
	var contador=0;
	var promedioNotas;
	var acumulador=0;
	var promedioNotas
	var notaMasBaja;
	var contadorVaronesNotaMayor5=0;

	while(contador<5)
	{
		

		nota=prompt('Ingrese nota');
		nota=parseInt(nota);

		


		while(nota<0 || nota>10 )
		{
			nota=prompt('Ingrese nota entre 0 y 10');
			nota=parseInt(nota);
		}

		sexo=prompt('Ingrese sexo: "f" o "m" ');

		while(!(sexo=='f' || sexo=='m'))
		{
			sexo=prompt('Ingrese sexo: "f" o "m" ')
		}

		acumulador=acumulador+nota;

		if (contador==0)
		{
			notaMasBaja=nota;

		}

		if (nota<notaMasBaja)
		{
			notaMasBaja=nota;
		}

		if (sexo =='m' && nota>5)
		{
			contadorVaronesNotaMayor5++;
		}
		contador++;
		
	}
	

	promedioNotas=acumulador/contador;

	alert('a- El promedio de notas totales es '+ promedioNotas);
	alert('b- La nota más baja es: '+notaMasBaja);
	alert('c- La cantidad de varones que su nota fue mayor o igual a 6 es: '+contadorVaronesNotaMayor5);
*/

	
	var numero;
	var acumulador=0;
	var contador=0;
	var contadorPares=0;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='s';
	var promedio;

	while (respuesta=='s')
	{	
		numero=prompt('Ingrese numero positivo');
		numero=parseInt(numero);

		while(numero<0)
		{
			numero=prompt('Ingrese numero POSITIVO');
			numero=parseInt(numero);
		}
		

		if(numero%2==0)
		{
			contadorPares++;
		}

		if (contador==0)
		{
			numeroMinimo=numero;
			numeroMaximo=numero;
		}

		else
		{
			if (numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}

			if (numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}
		}


		contador++;
		acumulador=acumulador+numero;

		respuesta=prompt('¿Desea seguir agregando números? Ingrese "s" si lo desea');



	}

	promedio=acumulador/contador;

	document.write('La cantidadde números pares es: '+ contadorPares+'<BR>'+
					'El promedio de todos los números ingresados es: '+ promedio+'<BR>'+
					'La suma de todos los números es: '+acumulador+'<BR>'+
					'El número máximo es: '+numeroMaximo+' y el mínimo '+numeroMinimo)

}

