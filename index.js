var recipes = {}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value})
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}

function deleteFromObjectByKey(object, key){
  var newRep = Object.assign({}, object)
  delete newRep[key]
  return newRep


}
