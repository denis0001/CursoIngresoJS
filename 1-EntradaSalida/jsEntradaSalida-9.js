/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;
	
	sueldo=document.getElementById('sueldo').value; //tomar importe

	sueldo=parseInt(sueldo); //transformarlo a entero

	aumento=sueldo*10/100; //calculo del aumento

	resultado=sueldo+aumento; //calculo del resultado

	document.getElementById('resultado').value=resultado; //mostrar el importe en el cuadro

}
