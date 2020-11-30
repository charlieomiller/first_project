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

const listMousetrap = [
  'carpet',
  'armor',
  'trashcan',
  'tv',
  'tv stand',
  'drum set',
  'foosball table',
  'ping pong table',
  'clutter',
  'couch',
  'chair',
]

const colors = [
  'red',
  'blue',
  'yellow',
  'green',
  'orange',
  'purple',
  'pink',
  'brown',
  'magenta',
  'baby blue',
]

const thanksgivingFood = [
  'turkey',
  'rolls',
  'mashed potatoes',
  'gravy',
  'broccoli casserole',
  'green beans',
  'apple pie',
  'pumpkin pie',
  'stuffing',
  'pecan pie',
]

function pickNumber() {
  var randomNumber = numbers[Math.round(Math.random() * (numbers.length-1))]
  var mainDiv = document.getElementById('mainDiv')
  mainDiv.innerHTML = randomNumber
}

function pickThing() {
  var randomThing = listMousetrap[Math.round(Math.random() * (listMousetrap.length-1))]
  var mainDiv = document.getElementById('mainDiv')
  mainDiv.innerHTML = randomThing
}

function pickColor() {
  var randomColor = colors[Math.round(Math.random() * (colors.length-1))]
  var mainDiv = document.getElementById('mainDiv')
  mainDiv.innerHTML = randomColor
}

function pickFood() {
  var randomFood = thanksgivingFood[Math.round(Math.random() * (thanksgivingFood.length-1))]
  var mainDiv = document.getElementById('mainDiv')
  mainDiv.innerHTML = randomFood
}