let ekker= document.getElementById("t1")
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuTitulo").style.color= "#8a7881";
    document.getElementById("meuTitulo").style.left="0px";
  });
  
  let participantes = [document.getElementById("ceo"),document.getElementById("karem"),document.getElementById("genivaldo"),document.getElementById("edward"),document.getElementById("kemilly"),document.getElementById("rodrigo")]
  participantes[0].addEventListener('mouseenter',function(){
    participantes[0].innerText="Eris"
  })
  participantes[1].addEventListener('mouseenter',function(){
    participantes[1].innerText="   karem    "
  })
  participantes[2].addEventListener('mouseenter',function(){
    participantes[2].innerText="genivaldo"
  })
  participantes[3].addEventListener('mouseenter',function(){
    participantes[3].innerText="edward"
  })
  participantes[4].addEventListener('mouseenter',function(){
    participantes[4].innerText="Kemilly"
  })
  participantes[5].addEventListener('mouseenter',function(){
    participantes[5].innerText="rodrigo"
  })

  participantes[0].addEventListener('mouseout',function(){
    participantes[0].innerText="Ceo"
  })
  participantes[1].addEventListener('mouseout',function(){
    participantes[1].innerText="Pesquisa e desenvolvimento"
  })
  participantes[2].addEventListener('mouseout',function(){
    participantes[2].innerText="Recursos Humanos"
  })
  participantes[3].addEventListener('mouseout',function(){
    participantes[3].innerText="adiministração"
  })
  participantes[4].addEventListener('mouseout',function(){
    participantes[4].innerText="Produção"
  })
  participantes[5].addEventListener('mouseout',function(){
    participantes[5].innerText="Marketing"
  })