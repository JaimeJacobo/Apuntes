

// para seleccionar todos los h1 en el documento
document.getElementsByTagName('hi');


//para seleccionar todos los elementos que tengan la clase de centered en el CSS
document.getElementByClassName('centered')[0];

//para seleccionar todos los elementos que tengan un id de unique
document.getElementById('unique');

//para seleccionar el primer li
document.querySelector('li');

//para seleccionar el segundo h1 del documento

document.querySelector('hi')[1];

//para seleccionar todos los li
document.querySelectorAll('li');

//**Es mejor utilizar los query selectors, son como una version mejorada de los 'getElementby'**

//Para seleccionar el valor de un atributo
<li random="23">Notebook<li>;

document.querySelector('li').getAttribute('random');
output: '23'



//Esto me esta diciendo: coge el atributo de 'random' del primer li y cambialo por 1000. Luego, dame el valor nuevo del atributo de random dentro del primero li.
<li random="23">Notebook<li>;

document.querySelector('li').getAttribute('random');
output: '23'

document.querySelector('li').setAttribute('random', '1000');

document.querySelector('li').getAttribute('random');
output> '1000'

-------
//Aqui lo que hemos hecho es, crear una variable que guarde el primer h1 del document, y en la siguiente linea lo que hemos hecho es asignarle a ese h1 la clase de 'coolTitle'

let h1 = document.querySelector('h1');

h1.className = 'coolTitle';

-------

//Con el comando de classList, la pantalla te va a mostrar todas las clases que estan afectando al primer h1 del documento
documnet.querySelector('h1').classList;


//Esto lo que va a hacer es añadir la clase de coolTitle a la lista de clases que están afectando al primer h1 del documento
documnet.querySelector('h1').classList.add("coolTitle");

//Esto en cambio lo que va a hacer es eliminar de la lista de clases la clase 'cooltitle' del primer h1 del documento
documnet.querySelector('h1').classList.remove("coolTitle");

//con classlist.toggle, puedes añadir y quitar una clase. Si se ha eliminado una clase y usas toggle, la clase se va a volver a añadir. En cambio, si acabas de añadir una clase y usas toggle, la clase se eliminará. 

//Con esto, estamos diciendo que nos diga el padre del tercer li en el documento
document.querySelector("li")[2].parentElement;
output: <ul>...</ul>

//Con esto, le estamos diciendo que nos diga los hijos que están dentro del primer ul del documento
document.querySelector("ul").children;
output: <li>...</li>, <li>...</li> etc


//Aqui lo que se intenta explicar es que para cada query es mejor guardarlo en una variable y de esta forma llamar a la variable cuando se necesite y no solicitar todo el query otra vez. A estos selectors se les llama CACHE selectors. 

document.querySelector('h1');
document.querySelector('h1');
document.querySelector('h1');
document.querySelector('h1');

This is the same as:

let firstH1 = document.querySelector("h1");

firstH1;
firstH1;
firstH1;
firstH1;

