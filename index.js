function iterativeLog(array){
  array.forEach((element,index) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callbackFunction){
  var tempArray = ["grilled cheese", "pizza", "fondue", "milk"];
  tempArray.forEach(callbackFunction);
  return tempArray;
}

function doToArray(array, callbackFunction){
  array.forEach(callbackFunction)
}
