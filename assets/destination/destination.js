const btnMoon = document.querySelector('#moon')
const btnMars = document.querySelector('#mars')
const btnEuropa = document.querySelector('#europa')
const btnTitan = document.querySelector('#titan')
const img = document.querySelector('.img-container img')
function planet(name, text, distance, time){
  this.name = name;
  this.text = text;
  this.distance = distance;
  this.time = time
}
const moon = new planet(
  'moon',
  'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
  '384,400 km',
  '3 days'
  )
const mars = new planet(
  'mars',
  'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
  '225 mil. km',
  '9 month'
)
const europa = new planet(
  'europa',
  'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
  '623 mil. km',
  '3 years'
)
const titan = new planet(
  'titan',
  'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
  '1.6 bil. km',
  '7 years'
)
const Moon = document.querySelector('#moon')
const Mars = document.querySelector('#mars')
const Europa = document.querySelector('#europa')
const Titan = document.querySelector('#titan')

function active(planet1, planet2, planet3){
  planet1.classList.remove('list-active')
  planet2.classList.remove('list-active')
  planet3.classList.remove('list-active')
}
for(let elem of document.querySelectorAll('[data-show-info]')){
  const info = elem.dataset.showInfo
btnMoon.addEventListener('click', () =>{
  elem.innerHTML = moon[info]
  img.src = 'assets/destination/image-moon.png'
  active(Mars, Europa, Titan)
  Moon.classList.add('list-active')
})
btnMars.addEventListener('click', () => {
  elem.innerHTML = mars[info]
  img.src = 'assets/destination/image-mars.png'
  Mars.classList.add('list-active')
  active(Moon, Europa, Titan)
})
btnEuropa.addEventListener('click', () => {
  elem.innerHTML = europa[info]
  img.src = 'assets/destination/image-europa.png'
  Europa.classList.add('list-active')
  active(Moon, Mars, Titan)
})
btnTitan.addEventListener('click', () => {
  elem.innerHTML = titan[info]
  img.src = 'assets/destination/image-titan.png'
  Titan.classList.add('list-active')
  active(Moon, Europa, Mars)
})
}

