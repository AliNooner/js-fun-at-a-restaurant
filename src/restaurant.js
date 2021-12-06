

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

// var menus = {
// breakfast:,
// lunch:,
// dinner:
// }

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
  // for (var i=0; i = typeRestaurant.length; i++)
//
   // return typeRestaurant.menus.lunch.push(food)
// }

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

// function removeMenuItem(createdRestaurant, menuItemRemoved, itemType){
//
// for (var i=0; i<createdRestaurant.menus.length; i++){
//
// if (createdRestaurant.menus.breakfast.inclues(menuItemRemoved)) {
//   createdRestaurant.menus.breakfast.splice([i],1)
// }
// }
// return `No one is eating our ${menuItemRemoved} - it has been removed from our ${itemType} menu`
// }

// fumction RemoveMenuItem(retaurant, food, menu){
//   for (i=0; i<restaurant.menus.length; i++){
//
//     if (restaurant.menus.breakfast  === menu ){
//       for (i=0; i<restaurant.menus.breakfast.length; i++){
//         if (restaurant.menus.breakfast[i].name === food)
//         restaurant.menus.breakfast.splice([i], 1)
//       }
//     }
//   }
// }



function removeMenuItem(type, foodType, foodGroup){
//   if (foodGroup === "breakfast") {
//     for (var i=0; i<type.menus.breakfast.length; i++) {
//       if (foodType === type.menus.breakfast[i].name) {
//         type.menus.breakfast.splice(i,1)
//       }
//       return `No one is eating our ${foodType} - it has been removed from the ${foodType} menu!`
//     }
//     else (foodGroup === "lunch") {
//       for (var i=0; i<type.menus.lunch.length; i++) {
//         if (foodType === type.menus.lunch[i].name) {
//           type.menus.lunch.splice(i,1)
//         }
//         return `No one is eating our ${foodType} - it has been removed from the ${foodType} menu!`
//       }
//       else (foodGroup === "dinner") {
//         for (var i =0; i<type.menus.dinner.length; i++) {
//           if (foodType === type.menus.dinner[i].name) {
//             type.menus.dinner.splice(i,1)
//           }
//           return `No one is eating our ${foodType} - it has been removed from the ${foodType} menu!`
        // }
      }
//     }
//   }
//
// }
