var listOfWeathers = [
  'it\'s looking sunny outside',
  'oh no, it\'s raining acid',
  'how delightful, it\'s raining puppies and kittens',
  'oh god oh no, so many spiders falling from the sky',
  'the sky is no more',
]

function pickRandomWeather() {
  var randomWeather = listOfWeathers[Math.round(Math.random() * (listOfWeathers.length-1))]
  alert(randomWeather)
}

function changeHelloWorld() {
  var world = document.getElementById('world')
  world.innerHTML = 'tricked'
}