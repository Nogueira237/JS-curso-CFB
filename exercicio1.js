const caixa1 =document.querySelector("#caixa1")
const caixa2 =document.querySelector("#caixa2")
const btnCopiar =document.querySelector("#btn_copiar")
const btnVoltar =document.querySelector("#btn_voltar")
const todosCursos = [...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.classList.add("descelecionado")
})

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{
        const curso=evt.target
        curso.classList.toggle("descelecionado")
        curso.classList.toggle("selecionado")
    })
})
btnCopiar.addEventListener("click",()=>{
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
})
btnVoltar.addEventListener("click",()=>{
    const cursosDes = [...document.querySelectorAll(".descelecionado")]
    cursosDes.map((el)=>{
        caixa1.appendChild(el)
    })
})
