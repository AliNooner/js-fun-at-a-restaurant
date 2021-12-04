
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


function listItems(orderList){
  var tempList = []
  for (var i=0; i<orderList.length; i++){
    tempList.push(orderList[i].item)
  }
  return tempList.join(", ")
}

function searchOrder() {
  if (deliveryOrders.indexOf(orders) !== -1)
  return ("The order is not in the list!"){
    else (deliveryOrders.indexOf(orders) == >1)
    return ("The order is in the list!")
  }
}
