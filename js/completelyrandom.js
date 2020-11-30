const numbers = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
]

const alertNumber = (randomNumber) => {
  alert(randomNumber)
}

const htmlNumber = (randomNumber) => {
  var element = document.getElementById('mainDiv')
  element.innerHTML = randomNumber
}

const buttonNumber = (randomNumber) => {
  var element = document.getElementById('returnButton')
  element.innerHTML = randomNumber
}

const consoleNumber = (randomNumber) => {
  console.log(randomNumber)
}

const locations = [
  alertNumber,
  htmlNumber,
  buttonNumber,
  consoleNumber,
]

function pickRandomNumber() {
  return numbers[Math.round(Math.random() * (numbers.length-1))]
} 

function pickRandomLocation(randomNumber) {
  var randomLocation = locations[Math.round(Math.random() * (locations.length-1))]
  return randomLocation(randomNumber)
}