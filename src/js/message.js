const enviarMsg = document.getElementById("btnEnviarMsg");

enviarMsg.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const assunto = document.getElementById("assunto").value;

  if (nome !== "" && email !== "" && assunto !== "") {
    Toastify({
      text: "Sua mensagem foi enviada com sucesso!",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "center",
      stopOnFocus: true,
      style: {
        background: "green",
        fontWeight: 700,
        color: "white",
        padding: "12px 20px",
      },
    }).showToast();
  }
});
