let corretas = document.getElementById("resposta");

function enviado() {
    if ((corretas.value === "Hélio") || (corretas.value === "Junico") || (corretas.value === "Helio")) {
        document.getElementById("pensando").style.display = 'none';
        document.getElementById("casal").style.display = 'block';
        document.getElementById("sarrada").style.display = 'none';
        document.getElementById("titulo").style.display = 'none';
        document.getElementById("titulo2").style.display = 'none';
        document.getElementById("titulo3").style.display = 'block';
        document.getElementById("resposta1").style.display = 'none';
        document.getElementById("resposta2").style.display = 'none';
        document.getElementById("resposta3").style.display = 'block';
    } else if ((corretas.value !== "Hélio") || (corretas.value !== "Junico") || (corretas.value === "Helio")) {
        document.getElementById("sarrada").style.display = 'block';
        document.getElementById("pensando").style.display = 'none';
        document.getElementById("casal").style.display = 'none';
        document.getElementById("titulo").style.display = 'none';
        document.getElementById("titulo2").style.display = 'block';
        document.getElementById("titulo3").style.display = 'none';
        document.getElementById("resposta1").style.display = 'none';
        document.getElementById("resposta2").style.display = 'block';
        document.getElementById("resposta3").style.display = 'none';
} else {
}
}