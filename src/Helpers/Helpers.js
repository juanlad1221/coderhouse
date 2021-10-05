/*let array = [
  {id:1, name:'comida perro', quantity:5},
  {id:2, name:'correas gatos', quantity:1},
  {id:3, name:'vestido perros', quantity:3}
]*/


export function existObjectInArray(array, key, value){
  let flag = false

  array.forEach(e => {
    if ( e[key] === value){
      flag = true
    }
  })//end for
  return flag
}

export function sumValuesInObjectArray(array, key){
  let sum = 0
  array.forEach(e => {
    sum = e[key] + sum
  })
  return sum
}

export function deleteObjectInArrayById(array, id){
  let arr = []
  
  array.forEach(e => {
    if(e.id !== id){
       arr.push(e)
    }
  })//end for

  return arr
}

export function TotalBuy(array){
  let ac = 0
  array.forEach(e => {
    ac = (e.price * e.quantity) + ac
  })
  return ac
}

export function sumQuantity(array, key, value, toAdd){

  array.forEach(e => {
    if ( e[key] === value){
      e.quantity = e.quantity + toAdd
    }
  })//end for
  return array
}

export function makeOrder(array, name, phone, mail, total){
  let obj = {}
  obj.buyer = {name,phone,mail}
  obj.items = array
  obj.date = new Date()
  obj.total = total
  return obj
}


