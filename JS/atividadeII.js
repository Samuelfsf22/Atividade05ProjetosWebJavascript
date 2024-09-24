const inputPreco = document.querySelector("#inputPreco");
const inputTempo = document.querySelector("#inputTempo");

const botao = document.querySelector("#botao");

const lblPreco = document.querySelector(".lblPreco");

botao.addEventListener("click", () =>{
    lblPreco.innerHTML = "";

    let contador = 0;
    let multiplicador = 0;

    if(inputTempo.value <= 15){
        lblPreco.innerHTML = inputPreco.value;
    } else {
        for(let x = 0; x <= inputTempo.value; x++){
            contador++
            if(contador == 15){
                contador = 0;
                multiplicador++;
            }
        }

        lblPreco.innerHTML = "Valor A Pagar R$:" + (inputPreco.value * multiplicador).toFixed(2);
    }
})