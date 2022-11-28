// First part
/*
function convertFile(file) {
    const lines = file.split("\n");
    const pizza_eaten = [];
  
    for (let line of lines) {
      console.log("line =>", line);
      const data = line.split(",");
  
      const clear_data = {};
      
      clear_data.name = data[0];
      clear_data.pizza = data[1];
      clear_data.quantity = data[2];
  
      pizza_eaten.push(clear_data);
    }
    return pizza_eaten;
  }
  
  const file = `john, margherita, 3 
  john,marinara,3
  jimmy,margherita,1
  alice,marinara,2
  bob,bianca,4
  luke,bianca,2
  tom,margherita,3
  daniel,marinara,1
  `;
  
  const file_converted = convertFile(file);
  console.log(file_converted); */

  // Part 2 


  /*
  HINTS:
- choose a data structure to represent the pizza_ingredients
- choose a data structure to represent the pizza_eaten
- create a function to convert the pizza_eaten_file (the string that mario gives you) to pizza_eaten (our data structure)
- create the variables to hold the totals
- you have to loop through all the entries of our pizza_eaten
- you have to same the right quantities to the variables holding the totals
- you have to return the totals */

// We need to make a representation of pizza ingredients :

function returnIngredients(file) {
    const wheat = 0;
    const tomatoes = 0;
    const cheese = 0;
    const pizza = [];
  
    file.forEach((object) => {
      for (let key in object) {
        if (key === "pizza") pizza.push(object[key]);
      }
    });
    
    for (const type of pizza) {
      if (type === 'bianca') {
      wheat = wheat + 150;
      }
      else if (type === 'marinara'){
      wheat = wheat + 100;
      tomatoes = tomatoes + 100 ;
        else {
      wheat = wheat + 120;
      tomatoes = tomatoes + 80 ;
      cheese = cheese + 80;
  
        }
      }
    }
  }


  function pizzaIngredients(pizza) {
    let wheat = 0;
    let tomatoes = 0;
    let cheese = 0;
    if (pizza === "bianca") {
      wheat = wheat + 150;
    } else if (pizza === "marinara") {
      wheat = wheat + 100;
      tomatoes = tomatoes + 100;
    } else {
      wheat = wheat + 120;
      tomatoes = tomatoes + 80;
      cheese = cheese + 80;
    }
  
    const Ingredients = {};
    Ingredients.wheat = wheat;
    Ingredients.tomatoes = tomatoes;
    Ingredients.cheese = cheese;
  
    return Ingredients;
  }



  {[],[],[]}

  for (array of object) {
    const ingredients = pizzaIngredients(array[1]);
    const Tot = Ingredients * array[2];
    for (total of Tot) {

        wheat = wheat + wheat;
        tomatoes = tomatoes + tomatoes;
        cheese = cheese + cheese;
    }

    const new = {};
    new.wheat = wheat;
    new.tomatoes = tomatoes;
    new.cheese = cheese ;

    return new *52;

  }
/*/*//**//*/*//*/ */ 