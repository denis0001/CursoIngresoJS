function Mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;

	/*if(edad<18)
	{
		if(edad>12)
		{
			alert("Usted es adolescente.");
		}
	}*/

	if(edad<18&&edad>12)
	{
		alert("Usted es adolescente.");
	}

}//FIN DE LA FUNCIÓN