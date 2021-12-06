

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}


function createRestaurant(name){
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
}


function addMenuItem(typeRestaurant, food){

if (food.type === "breakfast" && typeRestaurant.menus.breakfast.includes(food) === false) {
  return typeRestaurant.menus.breakfast.push(food)}
// this is saying if the food type is breakfast
// and the breakfast menu includes the food == false, then push the new item
// to the corresponding menu
 else if (food.type === "lunch" && typeRestaurant.menus.lunch.includes(food) === false){
  return typeRestaurant.menus.lunch.push(food)}

 else if (food.type === "dinner" && typeRestaurant.menus.dinner.includes(food) === false){
    return typeRestaurant.menus.dinner.push(food)
  }
}


function removeMenuItem(typeRestaurant, foodType, foodGroup){
  if (foodGroup === "breakfast") {
    for (var i=0; i<typeRestaurant.menus.breakfast.length; i++) {
      if (foodType === typeRestaurant.menus.breakfast[i].name) {
        typeRestaurant.menus.breakfast.splice(i,1)
      }
      return `No one is eating our ${foodType} - it has been removed from the ${foodGroup} menu!`
    }
  } else if (foodGroup === "lunch") {
      for (var i=0; i<typeRestaurant.menus.lunch.length; i++) {
        if (foodType === typeRestaurant.menus.lunch[i].name) {
          typeRestaurant.menus.lunch.splice(i,1)
        }
        return `No one is eating our ${foodType} - it has been removed from the ${foodGroup} menu!`
    }
  } else if (foodGroup === "dinner") {
        for (var i =0; i<typeRestaurant.menus.dinner.length; i++) {
          if (foodType === typeRestaurant.menus.dinner[i].name) {
            typeRestaurant.menus.dinner.splice(i,1)
    }
          return `No one is eating our ${foodType} - it has been removed from the ${foodGroup} menu!`
        }
      }
}
