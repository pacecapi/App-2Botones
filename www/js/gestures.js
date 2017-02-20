var app={
  inicio: function(){
  	var botonClaro = document.querySelector('#claro'); 
  	var botonOscuro = document.querySelector('#oscuro');

  	botonClaro.addEventListener('click',this.ponloClaro,false);  // corre la funcion ponloClaro al recibir el click
  	botonOscuro.addEventListener('click',this.ponloOscuro,false);
  }	,

  ponloClaro: function(){
  	document.body.className = 'claro';
  },

  ponloOscuro: function(){
  	document.body.className = 'oscuro';
  },
};

 app.inicio();

