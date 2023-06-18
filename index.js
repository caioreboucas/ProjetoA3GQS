//  Botão para testar a funcionalidade "criar mais uma linha"
    document.getElementById("teste1").addEventListener("click", ()=>{
    document.getElementById("testeBut1").click()
    })

    //  Botão para testar a funcionalidade "criar mais uma coluna"
    document.getElementById("teste2").addEventListener("click", ()=>{
    document.getElementById("testeBut2").click()
})

// CRIAR MAIS UMA LINHA
        function addLine(event){
        var ct = event.parentElement
        var inp = ct.querySelector(".inputapaga").cloneNode(true)
        inp.querySelector("input").value=""
        ct.prepend(inp)
    }

//  CRIAR MAIS UMA COLUNA
    function addList(event){
    var list = event
    var addList = document.createElement("div")
    addList.innerHTML='<input class="list-title" onfocus="addInput(this)" onfocusout="removeFocus(this)"></input><img src="imagens/lixeira.png" style="height: 16px;" onclick="removeLinha(this)" id="deletaList"><ul class="list-items"><div class="inputapaga"><input type="text" readonly="readonly" placeholder="Digite aqui..." onfocus="addInput(this)" onfocusout="removeFocus(this)"></input><img src="imagens/lixeira.png" style="height: 16px;" onclick="removeLinha(this)" ></div><button class="add-card-btn btn" onclick="addLine(this)">Add a card</button></ul>'
    addList.className="list"
    list.parentElement.insertBefore(addList, list)
} 
 
//  Permite a edição do input
    function addInput(event){
        event.removeAttribute("readonly")
    }
//  Bloqueia o input novamente
    function removeFocus(event){
        event.readOnly="readonly"
    }
