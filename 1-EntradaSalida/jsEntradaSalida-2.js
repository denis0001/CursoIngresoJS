/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	//Esto es un comenario de una línea.
	/*Esto es un
	comentario de 
	varias 
	líneas.
	*/
	//var nombre; //defino variable	
	//nombre = "Franco"; //cargo variable
	//nombre=prompt("Ingrese su nombre","Natalia Natalia"); //prompt: devuelve algo y se usa siempre con una varaible

	//alert("nombre: "+nombre); //concatenar
	//var person = prompt("Ingresá tu nombre", "Natalia Natalia");

/*
	var base;
	var resultado;

	base=document.getElementById('BASE').value;
	base=parseInt(base);

	resultado=base*base;

	Alert('El perimetro es '+resultado);

*/

/*
	var importe;
	var descuento;
	var resultado;

	importe=prompt('Ingrese importe');
	importe=parseInt(importe);

	descuento=(importe*25)/100;

	resultado=importe-descuento;

	alert('El importe final es: '+resultado);

*/
/*
	var precio1;
	var precio2;
	var precio3;
	var acumulador;
	var promedio;

	precio1=document.getElementById('PRECIO1').value;
	precio1=parseInt(precio1);

	precio2=document.getElementById('PRECIO2').value;
	precio2=parseInt(precio2);

	precio3=document.getElementById('PRECIO3').value;
	precio3=parseInt(precio3);


	acumulador=precio1+precio2+precio3;

	promedio=acumulador/3;

	alert('La suma de los precios es: ' + acumulador);
	alert('El promedio de los precios es: '+promedio);

*/
/*
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt('Ingrese el primer numero');
	numero1=parseInt(numero1);
	numero2=prompt('Ingrese el segundo numero');
	numero2=parseInt(numero2);

	resultado=numero1+numero2;

	if (resultado==0)
	{
		document.write('Cero');
	}

	else
	{
		if (resultado>0)
		{
			document.write('Positivo');

		}

		else
		{
			document.write('Negativo')
		}
	}
*/

/*
	var mes;

	mes=prompt('Ingrese mes');

	switch (mes)
	{
		case 'diciembre':
			alert('Se vienen las fiestas');
			break;

		case 'enero':
			alert('Comienza el año');
			break;

		default:
			alert('No es enero, ni diciembre');

	}

*/		

/*
	var peso;
	var masPesado;
	var menosPesado;
	var contador=0;

	while (contador<50)
	{
		peso=prompt('Ingrese peso');
		peso=parseInt(peso);

		while(peso<1)
		{
			peso=prompt('Ingrese peso mayor a 0');
			peso=parseInt(peso);
		}


		if (contador==0)
		{
			masPesado=peso;
			menosPesado=peso;
		}

		else
		{
			if (peso>masPesado)
			{
				masPesado=peso;
			}

			if(peso<menosPesado)
			{
				menosPesado=peso;
			}
		}

		contador++;

	}


	alert('El mas pesado fue '+masPesado);
	alert('El menos pesado fue '+menosPesado);

*/

/*
	var edad;
	var sexo;
	var contador=0;
	var acumulador=0;
	var promedio;
	var edadMasBaja;
	var varonesEdadMayor19=0;

	while (contador<3)
	{
		edad=prompt('Ingrese edad');
		edad=parseInt(edad);

		while (edad<0 && edad>100)
		{
			edad=prompt('Ingrese edad entre 0 a 100');
			edad=parseInt(edad);
		}

		sexo=prompt('Ingrese sexo: "m" o "f"')

		while (!(sexo=='m' || sexo=='f' ))
		{
			sexo=prompt('Ingrese sexo: "m" o "f"')
		}

		if(contador==0)
		{
			edadMasBaja=edad;
		}

		else
		{
			if (edad<edadMasBaja)
			{
				edadMasBaja=edad;
			}
		}

		if(sexo=='m' && edad>19)
		{
			varonesEdadMayor19++;
		}

		contador++;
		acumulador=acumulador+edad;


	}

	promedio=acumulador/contador;

	alert('El promedio de edad es ' + promedio);

	alert('La edad mas baja es '+edadMasBaja);

	alert('La cantidad de varones con edad mayor o igual a 20 es ' +varonesEdadMayor19);

*/

	var numero;
	var numerosPares=0;
	var acumulador=0;
	var contador=0;
	var promedio;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta='s';

	while (respuesta=='s')
	{
		numero=prompt('Ingrese numero');
		numero=parseInt(numero);

		while(numero<0)
		{
			numero=prompt('Ingrese numero POSITIVO');
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
			if (numero>numeroMaximo)
			{
				numeroMaximo=numero;
			}

			if (numero<numeroMinimo)
			{
				numeroMinimo=numero;
			}
		}

		contador++;

		acumulador=acumulador+numero;

		respuesta=prompt('¿Desea seguir agregando numeros? Ingrese "s" si lo desea');

	}

	promedio=acumulador/contador;

	document.write('La cantidad de numeros pares es '+numerosPares+'<BR>'+
				'El promedio de todos los numeros ingresados es: '+ promedio+'<BR>'+
				'La suma de todos los numeros es: '+acumulador+'<BR>'+
				'El numero máximo es '+ numeroMaximo + ' y el numero mínimo '+numeroMinimo)
	



}

