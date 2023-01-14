const stage = document.querySelector('.name-stage')
const description = document.querySelector('.description')
const button = document.querySelectorAll('.button-number')
const img = document.querySelector('.container-img img')
let active = document.querySelector('.button-active')
import data from '../../data.json' assert {type: 'json'}
let technology = data['technology']
for(let i = 0; i < button.length; i++){
  function getImg(){
    if(window.innerWidth >= 1000){
      return technology[i]['images']['portrait']
    }
    return technology[i]['images']['landscape']
  }
  let btn = button[i]
  btn.addEventListener('click', () => {
    stage.textContent = technology[i]['name']
    description.textContent = technology[i]['description']
    img.src = getImg()
    active = document.querySelector('.button-active')
    active.classList.remove('button-active')
    btn.classList.add('button-active')
  })

}

