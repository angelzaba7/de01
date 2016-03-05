var bd;

function iniciar(){
	zonadatos = document.getElementById("zonadatos");
	boton=document.getElementById("grabar");
		boton.addEventListener("click",agregarobjeto, false);
	
	var solicitud = indexedDB.open("mibase");
	solicitud.onsuccess=function(e){
		bd=e.target.result;
		}
	solicitud.onupgradeneeded=function(e){
		bd=e.target.result;
		bd.createObjectStore("gente", {keyPath: "clave"}); //, autoIncrement: true
		}		
	}

function agregarobjeto(){
	var clave=document.getElementById("clave").value;
	var titulo=document.getElementById("texto").value;
	var fecha=document.getElementById("fecha").value;
	
	var transaccion=bd.transaction(["gente"], "readwrite");
	var almacen=transaccion.objectStore("gente");
	var agregar=almacen.add({clave: clave, titulo: titulo, fecha: fecha });  //no ejecuta add
		// https://www.youtube.com/watch?v=B8V4ueikPOg 
		//Curso HTML 5. API IndexedDB II. Almacenando información Vídeo 52
	//document.getElementById("clave").value="";
	}	

window.addEventListener("load", iniciar, false);
