/*
 localStorage.setItem("Nombre", "Poncho");
 localStorage.setItem("ApPyM", "Diaz Gonzalez");
 localStorage.setItem("Edad", "30");
 localStorage.setItem("Sexo", "Hombre");  // Hombre o Mujer	
 localStorage.setItem("Peso", "73");
 localStorage.setItem("Estatura", "1.69");
 localStorage.setItem("Meta", "Fuerza / Musculo / Resistencia");
*/
 
 /*Estos son los valores que se deben actualizar del perfil de usuario*/
 /*
 localStorage.setItem("Nombre", "NombreA");
 localStorage.setItem("ApPyM", "Apellidos");
 localStorage.setItem("Edad", "00");
 localStorage.setItem("Sexo", "Hombre o Mujer");  // Hombre o Mujer	
 localStorage.setItem("Peso", "0.00");
 localStorage.setItem("Estatura", "0.00");
 localStorage.setItem("Meta", "Fuerza o Musculo o Resistencia");
 */
function load(){
		var lstorageNombre = localStorage.getItem('Nombre');
		var lstorageApPyM = localStorage.getItem("ApPyM");
		var lstorageSexo = localStorage.getItem("Sexo");
		var lstorageEdad = localStorage.getItem("Edad");
		var lstoragePeso = localStorage.getItem("Peso");
		var lstorageEstatura = localStorage.getItem("Estatura");
		var lstorageMeta = localStorage.getItem("Meta");
			
 /*Muestra valores en inputs*/			
			//document.getElementById("storageData").innerHTML = " "+lstorageNombre+" <br> "+lstorageSexo+" ";	
		document.getElementById("pNombre").value = " "+lstorageNombre+" "; //
		document.getElementById("pApPyM").value = " "+lstorageApPyM+" ";
		
		//sHombre y sMujer  => checked="checked" o checked="true";
		//document.getElementById("s"+lstorageSexo+"").checked="true";
		//document.getElementById("sHombre").action.checked = true;
		//document.getElementsByName("sexo").item("sHombre").checked= true ;
			// $( "input[type='radio']" ).prop( "checked", true ).checkboxradio( "refresh" );
		
		document.getElementById("pEdad").value = lstorageEdad ; // value = 99;	
		document.getElementById("pPeso").value = lstoragePeso;
		document.getElementById("pEstatura").value = lstorageEstatura;
		document.getElementById("pMeta").value = lstorageMeta;
		//document.getElementById("pMeta").selected =lstorageMeta;
			//.selectedIndex	
		//alert (""+lstorageMeta+"");
		} 
		
	function DoSubmit(){
		//localStorage.setItem("Nombre", ""+pNombre+"");
	
		//alert ("¡has hecho submit!");
		var nombre = document.getElementById("pNombre").value;
			
			var dataStoreNombre = JSON.stringify(nombre);
			//localStorage.setItem("Nombre",dataStoreNombre);
			localStorage["Nombre"] = dataStoreNombre; 
		var localData = JSON.parse(localStorage["Nombre"]);
		//var localData = JSON.parse(localStorage.getItem('Nombre'));
       
//		var appym = document.getElementById("pApPyM").value;
//		var edad = document.getElementById("pEdad").value;
		//var sexo = document.getElementById("pSexo").value; *Configurarlo para el tipo de input
//			var sexo = "Hombre / Mujer";
//		var peso = document.getElementById("pPeso").value;
//		var estatura = document.getElementById("pEstatura").value;
		//var meta = document.getElementById("pMeta").value; *Configurarlo para el tipo de input
//			var meta = document.getElementById("pMeta").value;
		//alert (" "+nombre+", "+appym+", "+edad+", "+sexo+" ,"+peso+", "+estatura+", "+meta+" ");		
		
		alert (localData);	
//		localStorage.removeItem("nombre");
//		localStorage.setItem("Nombre", " "+nombre+" ");
		
		/* listos para guardarlos en localStorage
		localStorage.setItem("Nombre", " "+nombre+" ");
		localStorage.setItem("ApPyM", " "+appym+" ");
		localStorage.setItem("Edad", " "+edad+" ");
		localStorage.setItem("Sexo", " "+sexo+" ");  
		localStorage.setItem("Peso", " "+peso+" ");
		localStorage.setItem("Estatura", " "+estatura+" ");
		localStorage.setItem("Meta", " "+meta+" "); 
		*/	
		console.log (localData);
		window.location="de_ajustes.html"
		}	