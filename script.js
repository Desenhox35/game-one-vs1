var errado =  document.getElementsByClassName('er')[0]
var certo = document.getElementsByClassName('cer')[0]
var resuntado = document.getElementsByClassName('resun')[0]
certo.addEventListener('click',cer)
errado.addEventListener('click',erro)
function cer(){
    resuntado.innerHTML=`<div class="re">sua resposta está correta!!!!</div>`
}
function erro(){
    resuntado.innerHTML=`<div class="erro">sua resposta está errada!!!!</div>`
    certo.addEventListener('click',nv)
    function nv(){
     alert('não vale trapacear')
     resuntado.innerHTML=`<div class="erro">não vale trapacear</div>`
    }
}