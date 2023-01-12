const information = document.querySelectorAll('[data-info]')
const button = document.querySelectorAll('.list-button')
const img = document.querySelector('.img-human img')
let active = document.querySelector('.list-active')
function human(rank, name, info, src){
this.rank = rank;
this.name = name;
this.info = info;
this.src = src;
}
const douglas = new human(
'Commander',
'Douglas Hurley', 
'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
'assets/crew/image-douglas-hurley.png'
)
const mark = new human(
'Mission Specialist',
'Mark Shuttleworth',
'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
'assets/crew/image-mark-shuttleworth.png'
)
const victor = new human(
'Pilot',
'Victor Glover',
'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
'assets/crew/image-victor-glover.png'
)
const anousheh = new human(
'flight engineer',
'Anousheh Ansari',
'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
'assets/crew/image-anousheh-ansari.png'
)
let array = [douglas, mark, victor, anousheh]
for(let info of information){
  for(let i = 0;i < button.length; i++){
    let btn = button[i]
    btn.addEventListener('click', () => {
     const elem = info.dataset.info
    let man = array[i]
    info.innerHTML = man[elem]
    img.src = man.src
    active.classList.remove('list-active')
    btn.classList.add('list-active')
    active = document.querySelector('.list-active')
    })
  }}
