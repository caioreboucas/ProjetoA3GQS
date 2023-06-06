//botões de testes para a area de registro.

//Botão número 1:
//Este botão testa se a aplicação aceita um usuário sem preenchimento
    document.getElementById("testeRegUser").addEventListener("click", ()=>{
    document.getElementById("userReg").value=""
    document.getElementById("pass1").value="testeuser"
    document.getElementById("pass2").value="testeuser"
    document.getElementById("ButtonRegister").click()
    })
// -------------- //

//Botao número 2:
//Este botão testa se a aplicação aceita uma senha sem preenchimento
    document.getElementById("testeRegPass").addEventListener("click", ()=>{
    document.getElementById("userReg").value="caio"
    document.getElementById("pass1").value=""
    document.getElementById("pass2").value="testeuser"
    document.getElementById("ButtonRegister").click()
    })
// -------------- //

//Botao número 3:
//Este botão testa se a aplicação está funcional quando todas as exigências são atendidas.
    document.getElementById("testeSucesso").addEventListener("click", ()=>{
    document.getElementById("userReg").value="caio"
    document.getElementById("pass1").value="testesucesso"
    document.getElementById("pass2").value="testesucesso"
    document.getElementById("ButtonRegister").click()
    })
// -------------- //

//Condição para a aplicação funcionar.
//É necessário que o campo user esteja preenchido. As senhas não podem estar vazias e devem ser iguais.
    document.getElementById("ButtonRegister").addEventListener("click", ()=>{
    var userReg = document.getElementById("userReg").value
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