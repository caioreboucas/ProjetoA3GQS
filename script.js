//Botao de teste
document.getElementById("testeBotao").addEventListener("click", ()=>{
    document.getElementById("user").value="caio"
    document.getElementById("pass").value="123"
    document.getElementById("buttonLogin").click()
})
//
document.getElementById("buttonLogin").addEventListener("click", ()=>{
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    if(user.toLowerCase() == "caio".toLowerCase() & pass == "123"){
        window.location.href="index.html"
    }else{
        alert("senha errada")
    }
})