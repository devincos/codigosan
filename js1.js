alert ("holaaaaa")


var nombre= document.getElementsByName("nombre");
console.log(nombre);
var fila=
//console.log(nombre[0].value());
/*
    var x = document.getElementsByName("nombre");
    var i;
    for (i = 0; i < x.length; i++) {
		var valor = x[i].value;

    	if(valor != ""){
    		alert('no est vacio')
    	}else{
    		alert('escriba algo')
    	}

    
    }
    */
    function validarvacio(){
    	  var x = document.getElementsByTagName("input");
    var i;
    for (i = 0; i < x.length; i++) {
		var valor = x[i].value;

    	if(valor != ""){
    		alert('no est vacio')
    	}
    	else{
    		alert('escriba algo')
    	}
    }
    }
   
     function mostrar_datos() {
    	var nom=document.getElementById('nombre');
    	var ape=document.getElementById('apellido');
    	var fila= "<tr><td>"+nom+"</td><td>"+ape+"</td></tr>";
    	document.getElementById(cuadro).innerHTML+=fila;
    	// body...
 }