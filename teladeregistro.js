//botões de testes para a area de registro.

//Botão número 1:
//Este botão testa se a a aplicação aceita um usuário sem preenchimento
    document.getElementById("testeRegUser").addEventListener("click", ()=>{
    document.getElementById("userReg").value=""
    document.getElementById("pass1").value="testeuser"
    document.getElementById("pass2").value="testeuser"
    document.getElementById("ButtonRegister").click()
    })
// -------------- //
    document.getElementById("ButtonRegister").addEventListener("click", ()=>{
    var userReg = document.getElementById("userReg").value
    console.log(userReg)
    var pass1 = document.getElementById("pass1").value
    var pass2 = document.getElementById("pass2").value
    if(userReg != ""){
        if(pass1 != "" && pass2 != ""){
            if(pass1 == pass2){
            window.location.href="index.html"
            }else{
                alert("As senhas não correspondem!")
            }
        }else{
            alert("O campo senha não pode estar vazio!")
        }
    }else{
        alert("O campo usuário não pode estar vazio!")
    }
})