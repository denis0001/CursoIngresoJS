function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;

	/*if(edad>17)
	{
		alert("Usted es mayor de edad.");
	}

	if(edad<13)
	{
		alert("Usted es un niño.");
	}

	if(edad>12&&edad<18)
	{
		alert("Usted es adolescente.");
	}
	*/

	if(edad>17)
	{
		alert("Usted es mayor de edad.");
	}
	else
	{
		if(edad<13)
			alert("Usted es un niño.");
		else
		{
			alert("Usted es adolescente");
		}
	}

}//FIN DE LA FUNCIÓN