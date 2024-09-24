const inputMedicamento = document.querySelector("#inputMedicamento");
const inputPreco = document.querySelector("#inputPreco");

const btn = document.querySelector("#btn");

const lblNomeProd = document.querySelector(".lblNomeProd");
const lblPromo = document.querySelector(".lblPromo");

btn.addEventListener("click", () =>{
    lblNomeProd.innerHTML = "";

    lblNomeProd.innerHTML = "Promoção de " + inputMedicamento.value;
    lblPromo.innerHTML = "Leve 2 por apenas R$:" + (Math.floor(inputPreco.value) * 2);
})