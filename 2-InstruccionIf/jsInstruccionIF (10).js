function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var number;
	number=Math.floor(Math.random() * 10) + 1;

	if (number>8)
	{
		alert('Nota:'+number+' EXCELENTE');
	}

	else
	{
		if(number<4)
		{
				alert('Nota:'+number+' Vamos, la proxima se puede');
		}
		else
		{
				alert('Nota:'+number+' APROBÓ');
		}
	}
	

	
	
	



}//FIN DE LA FUNCIÓN