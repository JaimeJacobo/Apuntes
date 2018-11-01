




//HTML

<canvas id="example" width="150" height="150"</canvas>




// CSS

canvas {
    border: 1px solid red;
  }


//JAVASCRIPT

// const canvas = documnet.getElementById('example');
const ctx = document.getElementById('example').getContext('2d');


//Comenta y desconecta cada una de estas opciones para ver el efecto que tienen sobre el rectangulo
ctx.fillRect(25,25,100,100);
ctx.clearRect(45,45,60,60);
ctx.strokeRect(50,50,50,50);
