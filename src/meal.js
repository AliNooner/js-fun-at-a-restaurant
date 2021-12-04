function nameMenuItem(name) {
  return `Delicious ${name}`

}

function createMenuItem(name,price,type){
  return {
    name,
    price,
    type,
  }
}

function addIngredients(ingredient, ingredients){
  for (var i=0; i<ingredients.length; i++) {
    if (ingredient === ingredients[i]) {
      return
    }
  }
  return  ingredients.push(ingredient)
}

function formatPrice(price){
  return `$${price}`;
}

function decreasePrice(price){
  return (price * .9)
}

function createRecipe(title, ingredients, menuItemType){
    var recipe = {
      title: title,
      ingredients: ingredients,
      type: menuItemType,
    }
      return recipe
  };



module.exports = {
  nameMenuItem,
  createMenuItem, 
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
