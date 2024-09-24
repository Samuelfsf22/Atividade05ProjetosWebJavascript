const inputProd = document.querySelector("#inputProd");
const inputPreco = document.querySelector("#inputPreco");

const botao = document.querySelector("#botao");

const lblPromo = document.querySelector(".lblPromo");
const lblTerceiroProd = document.querySelector(".lblTerceiroProd");

botao.addEventListener("click", () => {
    lblPromo.innerHTML = "";
    lblTerceiroProd.innerHTML = "";

    let terceiroProd = inputPreco.value / 2;

    lblPromo.innerHTML = inputProd.value + "- Promoção: Leve 3 por R$:" + ((inputPreco.value * 2) + terceiroProd).toFixed(2); 
    lblTerceiroProd.innerHTML = "O 3° produto custa apenas R$:" + terceiroProd.toFixed(2);
})