function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var promedio;
	var numero;
	var negativos=1;

	while (contador<5)
	{
		contador = contador + 1 ;
		numero=prompt("ingrese número");
		numero= parseInt(numero);
		while(numero<-10 || numero>10)
		{
			numero=prompt("error, reingrese número");
			numero=parseInt(numero);
		}//fin while (numero<-10 || numero >10)

		if (numero<0)
		{
			negativo=negativo*numero;
		}
		else
		{
			acumulador=acumulador+numero;
		}

		acumulador=acumulador+numero;



 
	}//fin while(contador>5)
	document.getElementById('suma').value=acumulador;
	promedio=acumulador/5;
	document.getElementById('promedio').value=acumulador/5;



/*document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;*/

}//FIN DE LA FUNCIÓN