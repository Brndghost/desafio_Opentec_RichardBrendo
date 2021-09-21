function register () {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if(email.value == "usuario@teste.com.br" && password.value == "senha123") {
        localStorage.setItem("acesso", true);
        alert("Usuário Autenticado!");
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
}