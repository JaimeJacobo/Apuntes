


// EXAMPLE OF A CLASS


class Animal {

    constructor(introducedName, introducedOwner) {
    this.name = introducedName;
    this.owner = introducedOwner;
    }
  }
  
  
  var myAnimal = new Animal('Jordi', 'Jaimes');
  
  
  var anotherAnimal = new Animal('Porko', 'Paularts');
  
  console.log(anotherAnimal);
  console.log(myAnimal.name)

  

//EXAMPLE OF A CLASS


class Item{
    constructor(intName, intPrice){
      this.name = intName;
      this.price = intPrice;
  
    }
  }
  
  let paulartsHeadphones = new Item('Sony headphones', 300);
  
  let jaimesHedphones = new Item('Bose headphones', 350);
  
  console.log(paulartsHeadphones)





//EJEMPLO DE CÓMO METER UNA FUNCIÓN DENTRO DE UNA CLASE, Y POR LO TANTO SERÁ COMPARTIDA POR TODOS LOS OBJETOS CREADOS MEDIANTE new Animal


class Animal {
    constructor(intName, intOwner){
      this.name = intName;
      this.owner = intOwner;
    }
    showOwnerName() {
    return "My owner is " + this.owner;
  };
  }
  
  var myAnimal   = new Animal("Arya", "Josephine");
  var yourAnimal = new Animal("Max",  "Owen");
  
  
  console.log(myAnimal.showOwnerName());
  console.log(yourAnimal.showOwnerName());





//EJEMPLO DE CÓMO AÑADIR UNA FUNCIÓN A UNA CLASE, Y VEMOS CÓMO SE AÑADE PARA CADA OBJETO NUEVO QUE CREAMOS A PARTIR DE new Animal



class Animal {

    constructor(nameInt, ownerInt){
      this.name = nameInt;
      this.owner = ownerInt;
    }
  
    showOwnerName(){
      return "My owner is " + this.owner;
    }
  }
  
  let myAnimal   = new Animal("Arya", "Josephine");
  let yourAnimal = new Animal("Max",  "Owen");
  
  console.log(myAnimal.showOwnerName());
  console.log(yourAnimal.showOwnerName());





//EJEMPLO DE CÓMO USAR PROTOTYPE, QUE SIRVE PARA AÑADIR UNA FUNCIÓN A UNA CLASE. ES BÁSICAMENTE COMO UN PUSH A LA CLASE, QUE LE DICE QUE AÑADA UNA FUNCION A TODOS LOS OBJETOS QUE PASEN POR LA CLASE



class Animal {
    constructor(nameInt, ownerInt){
      this.name = nameInt;
      this.owner = ownerInt;
    };
    
  };
  
  let myAnimal   = new Animal("Arya", "Josephine");
  let yourAnimal = new Animal("Max",  "Owen");
  
  Animal.prototype.showOwnerName = function(){
    return "My owner is " + this.owner;
  }
  
  
  console.log(myAnimal.showOwnerName());
  console.log(yourAnimal.showOwnerName());




  //EJEMPLO DE UNA FUNCION DENTRO DE UNA CLASE, Y UTILIZAMOS UN IF STATEMENTE DENTRO DE LA FUNCIÓN


class Item {

    constructor(nameInt, priceInt){
      this.name = nameInt;
      this.price = priceInt;
    }
  
    calculatePrice(){
      if(this.name === 'fruit'){
        return ((this.price*0.95).toFixed(2));
      } else {
        return this.price;
      }
    }
  }
  
  
  let cascos = new Item('Bosa', 700);
  let compra = new Item('fruit', 3);
  
  console.log(cascos.calculatePrice());
  console.log(compra.calculatePrice());
  


//EJEMPLO DE CÓMO FUNCIONA EL SUPER() EN LAS CLASES


class Animal {

  constructor(nameInt, ownerInt, soundInt){

    this.name = nameInt;
    this.owner = ownerInt;
    this.sound = soundInt;
  }
}

class Dog extends Animal {
  //Este constructor() nos indica qué argumentos tenemos que añadir para agregar al objeto
  constructor(nameInt, ownerInt){
    //Este super() me está diciendo: estos dos valores que se están metiendo, míralos arriba y devuélveme los nombres para ponerlos dentro de la función. Solo va a coger los valores de arriba que se pongan aquí. 
    super(nameInt, ownerInt);
    //Ahora, añádeme estos también.
    this.sound = "Guau Guau";
    this.humanRelation = "love";
  }
}

let myAnimal = new Animal("Arya", "Josephine", "--");
let myDog = new Dog("Max",  "Owen");

console.log(myDog);



//EJEMPLO DE CÓMO, UTILIZANDO super(), LLAMAR A UNA FUNCIÓN QUE ESTÁ DENTRO DE UNA CLASE, DESDE OTRA CLASE.

class Item {

  constructor(nameInt, priceInt){
    this.name = nameInt;
    this.price = priceInt;
  }

  calculatePrice(){
    if(this.name === 'fruit'){
      return ((this.price*0.95).toFixed(2));
    } else {
      return this.price;
    }
  }
}

class Fruit extends Item {
  //aquí van a ir todos los argumentos que hay que escribir en el nuevo objeto
  constructor(nameInt, priceInt, expirationDateInt, brandInt){
    //Este super() nos indica cuáles de los argumentos tenemos que cogerlos de Item
    super(nameInt, priceInt);
    //Estos elementos hay que añadirlos, como de costumbre
    this.expirationDate = expirationDateInt;
    this.brand = brandInt;
  }

  calculatePrice() {
    //Aqui le indicamos que cuando ejecutemos la función, nos ejecute la funcion del "super", es decir, la de Item, y nos devuelva ese valor
    return super.calculatePrice();
  }
}


let cascos = new Item('Bosa', 700);
let compra = new Item('fruit', 3);
let banana = new Fruit('banana', 2, 'march', 'Canarias');

console.log(cascos.calculatePrice());
console.log(compra.calculatePrice());
console.log(banana.calculatePrice());
