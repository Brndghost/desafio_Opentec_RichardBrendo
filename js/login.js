function logar () {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(email.value == "usuario@teste.com.br" && password.value == "senha123") {
        localStorage.setItem("acesso", true);
        alert("Usuário Autenticado!");
        window.location.href = "register.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}