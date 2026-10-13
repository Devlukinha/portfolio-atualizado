async function carregarComponete(id, arquivo) {

    const elemento = document.getElementById(id);

    const resp = await fetch(arquivo);

    const html = await resp.text();

    elemento.innerHTML = html;
}

await carregarComponete ("header", "./components/header.html");