//  Botão para testar a funcionalidade "criar mais uma linha"
    document.getElementById("teste1").addEventListener("click", ()=>{
    document.getElementById("testeBut1").click()
    })

// CRIAR MAIS UMA LINHA
        function addLine(event){
        var ct = event.parentElement
        var inp = ct.querySelector(".inputapaga").cloneNode(true)
        inp.querySelector("input").value=""
        ct.prepend(inp)
    }

//  Permite a edição do input
    function addInput(event){
        event.removeAttribute("readonly")
    }
//  Bloqueia o input novamente
    function removeFocus(event){
        event.readOnly="readonly"
    }
