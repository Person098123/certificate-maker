

function nFunction(){
document.getElementById("certificate-container").style.backgroundImage="url('pics/basic-certificate.png')"; 

}
function sFunction(){
   document.getElementById("certificate-container").style.backgroundImage="url('pics/school-certificate.png')";
   }

   function mFunction(){
      document.getElementById("certificate-container").style.backgroundImage="url('pics/ribbon-certificate.png')";
      }

      function lFunction(){
         document.getElementById("pick-l").style.backgroundImage="url('pics/ze-spy-from-tf2.png')";
         }
   

         function gFunction(){
            document.getElementById("pick-l").style.backgroundImage="url('pics/gulpin.png')";
            
            }
            function cwFunction(){
               document.getElementById("pick-l").style.backgroundImage="url('pics/clovis-west.png')";
               }
               function wFunction(){
                  document.getElementById("pick-l").style.backgroundImage="url('pics/walt.png')";
                  
                  }
                  function bFunction(){
                     document.getElementById("pick-medel").style.backgroundImage="url('pics/blue-removebg-preview.png')"; 
                     
                     }
                     function rFunction(){
                        document.getElementById("pick-medel").style.backgroundImage="url('pics/red-removebg-preview.png')";
                        }
                     
                        function goFunction(){
                           document.getElementById("pick-medel").style.backgroundImage="url('pics/gold-removebg-preview.png')";
                           }

                           function textFunction() {
                              var x = document.getElementById("text").value;
                              document.getElementById("put-text").innerHTML = x;
                            }

                            function forFunction() {
                              var x = document.getElementById("for-value").value;
                              document.getElementById("why").innerHTML = x;

      
                            }
                              function dateFunction() {
                              const d = new Date();
                              document.getElementById("thedate").innerHTML = d.toDateString();
                              }