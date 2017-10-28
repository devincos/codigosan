/*alert ("holaaaaa")*/


var nombre= document.getElementsByName("nombre");
console.log(nombre);
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
    		alert('no esta vacio')
    	}
    	else{
    		alert('escriba algo')
    	}
    }
    }
   
     function mostrar_datos() {
        var cod=document.getElementById('cod').value;
        var ci=document.getElementById('ci').value;
    	var nom=document.getElementById('nombre').value;
    	var apep=document.getElementById('apellidop').value;
        var apem=document.getElementById('apellidom').value;

    	var fila= "<tr><td>"+cod+"</td><td>"+ci+"</td><td>"+nom+"</td><td>"+apep+"</td><td>"+apem+"</td></tr>";
    	document.getElementById("cuadro").innerHTML+=fila;
        document.getElementsByTagName("input")[0].value='';
        document.getElementsByTagName("input")[1].value='';
        document.getElementsByTagName("input")[2].value='';
        document.getElementsByTagName("input")[3].value='';
        document.getElementsByTagName("input")[4].value='';
    	// body...
 }