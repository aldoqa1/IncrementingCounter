counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";
    updateNumero(counter);
});

function updateNumero(counter){
    numero = Number(counter.getAttribute("data-target"));

    increase = Math.ceil(numero/700);
    valor = +counter.innerText;


    //primera forma updateNumero(argumento) , el counter es el argumento y se pone despues del tiempo
    if(valor<numero){
        counter.innerText = valor + increase;
        setTimeout(updateNumero, 1,counter);
    }else{
        counter.innerText = numero;
    }

    //segunda forma, se realiza una funciona anonima (creo que ese es su nombre) que ejecute la funcion updateNumero
    // if(valor<numero){
    //     counter.innerText = valor + increase;
    //     setTimeout(() => {
    //         updateNumero(counter)
    //     }, 1);
    // }else{
    //     counter.innerText = numero;
    // }

}

