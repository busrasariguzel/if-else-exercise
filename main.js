function isItLong(str) {
  if (str.length > 20) {
  return "That's a long string!"
  }
  
  // let response = ' ';
  // if (str.length >= 20) {
  // response = "That's a long string!"
  // }
}

function isItMedium(str) {
  if (str.length <= 20 && str.length >= 10) {
    return "That's a regular sized string!";
  }

}

function isItShort(str) {
  if (str.length < 10) {
    return "That's a small string!";
  }
}

function howLongIsMyString(str) {
  let response = ' '
  if (str.length > 20) {
  response = "That's a long string!"
    }
  else if(str.length <= 20 && str.length >= 10) {
  response = "That's a regular sized string!";
  }
  else if (str.length < 10) {
  response = "That's a small string!";}
  return response;
}

function instructorHeight(str) {
  let response = ' '
  if (str === 'Colin') {
  response = 62}
  else if (str === 'Mesuara') {
  response = 67}
  else if (str !== 'Colin' && str !== 'Mesuara'){
  response = "I don\'t know that instructor!"}
  return response;
  }





module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}