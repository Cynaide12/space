const toggle = document.querySelector('.nav-toggle')
const inspectorNav = document.querySelector('.inspector-nav')
const closed = document.querySelector('.closed')
const aside = document.querySelector('aside')
const nav = document.querySelector('.nav-side')
const number = document.querySelectorAll('.nav-side .num')
for(let num of number){
toggle.addEventListener('click', () =>{
  aside.style.visibility = 'visible'
  toggle.style.visibility = 'hidden'
  nav.id = 'nav-anim'
  num.style.visibility = 'visible'
  // aside.style.height = '100vh'
})
closed.addEventListener('click', () =>{
  aside.style.visibility = 'hidden'
  toggle.style.visibility = 'visible';
  nav.id = ''
  num.style.visibility = 'hidden'

})}

