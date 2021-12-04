
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}


function takeOrder(order, deliveryOrders){
  if(deliveryOrders.length<3){
  deliveryOrders.push(order)
  }
      return takeOrder
  }

function refundOrder(orderNumber, deliveryOrders){
  for (var i = 0; i<deliveryOrders.length; i++){
    if (orderNumber === deliveryOrders[i].orderNumber)
  deliveryOrders.splice(i,1)
}
return deliveryOrders
}


function listItems(order){
  var tempList = []
  for (var i=0; i<order.length; i++){
    tempList.push(order[i].item)
  }
  return tempList.join(", ")
}

function searchOrder (order,orderItem){
  var tempList = [];
  for (var i=0; i<order.length; i++){
    tempList.push(order[i].item)
  }
  if (tempList.includes(orderItem)){
  return true
} else {
  return false
}
}
