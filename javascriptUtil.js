let i = 0;

function randInt(minimum, maximum, multiplier) {
  return (Math.floor(Math.random() * (maximum-minimum+1)+minimum) * multiplier) //both max and min are inclusive
}

function elementCreate(elementName, id=i, HTML='') {
  if (elementName.charAt(0) !== "'") {
    elementName = "'" + elementName; 
  }
  if (elementName.charAt(elementName.length - 1) !== "'") {
    elementName = elementName + "'";
  } //manipulate input to add quotes (') to both the start and end if they are missing

  let newElement = document.createElement(elementName); //create the specified element
  newElement.setAttribute("id", id); //give id to element
  newElement.innerHTML = (HTML); //add HTML to element
  i++;
}

function toggleClass(id=i, className) {
  id = id.replace(/'/g, ''); //remove quotes from id if present
  
  if (id.charAt(0) !== "\"") {
    className = "'" + className;
  }
  if (className.charAt(className.length - 1) !== "'") {
    className = className + "\"";
  } //manipulate input to add quotes (') to both the start and end if they are missing

  id.classList.toggle(className);
}

function addClass(id=i, ...classes) {
  id = id.replace(/'/g, ''); //remove quotes from id if present
  element = document.getElementById(id); //variable for the element to simplify code

  classes.forEach(className => {
    element.classList.add(className);
  }); //apply all classes to the specified id
}

function roundTo(number, decimal='1') {
  if (decimal == 0) {
    console.log("0 doesn't work lol"); //case if decimal is 0
  } else if (decimal == 1) {
    number = Math.round(number); //normal round() function if decimal is 1
  } else {
    number /= decimal;
    Math.round(number);
    number *= decimal;
  }
  return number;
}
