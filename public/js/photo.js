'use strict';
$(document).ready(function() {
 var config = {
  apiKey: "AIzaSyBeKGCxfXl70ZdfQqbxSw_-HE4Nng1o2HU",
  authDomain: "persistent-db.firebaseapp.com",
  databaseURL: "https://persistent-db.firebaseio.com",
  projectId: "persistent-db",
  storageBucket: "persistent-db.appspot.com",
  messagingSenderId: "718366021052"
 };
 firebase.initializeApp(config);
/*subiendo fotos*/ 
 var fichero;
 var storageRef = firebase.storage().ref(); //firebase
 var imagenesFBRef = firebase.database().ref().child("imagenesFB"); 
 var input = $('#image_uploads'); 
 
 input.on('change',false,function() {
     updateImageDisplay(); 
  });

  function updateImageDisplay() {

   var imagenSubir = input[0].files[0];
   var curFiles = input[0].files;
   var uploadTask =  storageRef.child('imagenes/' + imagenSubir.name).put(imagenSubir);//****firebase
       
      uploadTask.on('state_changed',
          function(snapshot){

          },
          function(error){
             alert("subio con url");
          },
          function(){
             var downloadURL = uploadTask.snapshot.downloadURL;
              createNodeDB(imagenSubir.name,downloadURL);         
            setTimeout("location.reload(true);",1000);  
      });

    /*base de datos de fotos*/
     function createNodeDB(nombreImagen,downloadURL){
      imagenesFBRef.push({
        nombre:nombreImagen,     
        url:downloadURL
      }); 
     }
  }

function showimagesFB(){
     imagenesFBRef.on('value',function(snapshot){
       var datos = snapshot.val();
       var areaphotos = $('#arephotosFB');//****
       var result="";
       for(var key in datos){
            result += '<img class="img-responsive" src="'+datos[key].url + '" alt="'+datos[key].nombre + '" />';
            areaphotos.html(result); 
        }
        
      });
  }

  $('#arephotosFB').one('mouseenter',function(){
    $(this).cardify({});  
  });
  showimagesFB();

  
});
