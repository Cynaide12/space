const toggle = document.querySelector('.nav-toggle')
const closed = document.querySelector('.closed')
const aside = document.querySelector('aside')
const nav = document.querySelector('.nav-side')
const number = document.querySelectorAll('.nav-side .num')
for(let num of number){
toggle.addEventListener('click', () =>{
  aside.style.visibility = 'visible'
  toggle.style.visibility = 'hidden'
  nav.id = 'nav-anim'
  nav.style.visibility = 'visible'
  num.style.visibility = 'visible'

})
closed.addEventListener('click', () =>{
  aside.style.visibility = 'hidden'
  toggle.style.visibility = 'visible';
  nav.id = ''
  nav.style.visibility = 'hidden'
  num.style.visibility = 'hidden'
})}
