function ativarLink(){
const links = document.querySelectorAll('.header-bg nav a')
function linkAfter(links){
const href = links.href
const url = location.href

 if(url.includes(href) && window.innerWidth > 800){
  links.classList.add('ativo')
 }
}
links.forEach(linkAfter)
}
ativarLink()

function checkElemento(){
  const parametros = new URLSearchParams(location.search)
  function ativaProduto(parametro){
    const elemento = document.getElementById(parametro)
    if(elemento){
    elemento.checked = true
  }
}
parametros.forEach(ativaProduto)
}

checkElemento()

function mudarPosicaoImagem(){
const secaoBicicletas = document.querySelectorAll('.nimbus-col-1 img')
const bicicletasBlock = document.querySelector('.nimbus-col-1')
function navegarImg(e){
  bicicletasBlock.prepend(e.target)
}
secaoBicicletas.forEach(item =>
    item.addEventListener('click', navegarImg)
  )
}
mudarPosicaoImagem()

function animarEntrada(){
const animaItens = document.querySelectorAll('[data-anime]')
animaItens.forEach(handleAnimarEntrada)

function handleAnimarEntrada(item){
  setTimeout(function(){
    item.classList.add('ativo')
   }, +item.dataset.anime)
   }
  }
animarEntrada()

function animaScroll(){

  const itensScroll = document.querySelectorAll('[data-scroll]')
  function handleAnimaScroll(event){
    itensScroll.forEach((item)=>{
      const distanciaTopo = item.getBoundingClientRect().top - window.innerHeight * 0.7
      distanciaTopo < 0 ? item.classList.add('ativo') : null
    })
  }
  window.addEventListener('scroll', handleAnimaScroll)
}
animaScroll()

function initMenuMobile(){
  const userEvents = ['touchstart', 'click']
  const menuMobile = document.querySelector('.menu-mobile')
  const menuList = document.querySelector('#nav-lista')
  menuMobile.setAttribute('aria-expanded', 'false')

  function handleMenuMobile(event){
    menuMobile.setAttribute('aria-expanded', 'true')
    menuMobile.classList.add('ativo')
    menuList.classList.add('ativo')
    outsideClick(()=>{
      menuMobile.classList.remove('ativo')
      menuList.classList.remove('ativo')

    })
  }
  userEvents.forEach((events)=>{
  menuMobile.addEventListener(events, handleMenuMobile)
  })




function outsideClick(callback){
  const atributo = 'data-outside'
  const html = document.documentElement
  if(!menuList.hasAttribute(atributo)){
   setTimeout(()=>{ userEvents.forEach(evento=> html.addEventListener(evento, handleOutsideClick))})
   menuList.setAttribute(atributo, '')
  }
   function handleOutsideClick(e){
     if(!menuList.contains(e.target)){
     callback()
     userEvents.forEach(evento=>html.removeEventListener(evento, handleOutsideClick))
     menuMobile.setAttribute('aria-expanded', 'false')
     menuList.removeAttribute(atributo)

   }
   }
}
}
initMenuMobile()
