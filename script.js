const links = document.querySelectorAll('.header-bg nav a')
function linkAfter(links){
const href = links.href
const url = location.href

 if(url.includes(href) && window.innerWidth > 800){
  links.classList.add('ativo')
 }
}
links.forEach(linkAfter)  

const parametros = new URLSearchParams(location.search)
function ativaProduto(parametro){
  const elemento = document.getElementById(parametro)
  if(elemento){
  elemento.checked = true
}
}
parametros.forEach(ativaProduto)

const secaoBicicletas = document.querySelectorAll('.nimbus-col-1 img')
const bicicletasBlock = document.querySelector('.nimbus-col-1')
function navegarImg(e){
  bicicletasBlock.prepend(e.target)
}
secaoBicicletas.forEach(item =>
    item.addEventListener('click', navegarImg)
  )