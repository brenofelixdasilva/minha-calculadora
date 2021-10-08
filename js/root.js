 /**
  * Definicao de Variaveis
  */

 // special elements
 const resultado = document.getElementById("resultado");
 const btnIqual = document.getElementById("btnIgual");
 const btnAC = document.getElementById("btnAC");

 // buttons
 const buttons = document.getElementsByClassName("btn");

 /**
  * Lógica da Calculadora
  */

 let value1 = 0;
 let operator = null;
 let finish = false;
 const limite = 10;

 // loop de evento click button
 for (let i =0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", () => {
        //verifica se o limitador não foi atingido
        if (resultado.innerHTML.length < limite) {
            //verifica se  numero clicado é um numero
            if (buttons[i].className.includes("btnNumeradores")) {
                //reseta o visor do resultado
                if (finish == true) {
                    resultado.innerHTML = "";
                    finish = false;
                }

            if (resultado.innerHTML == "0") {
                resultado.innerHTML = buttons[i].innerHTML;
            } else {
                resultado.innerHTML += buttons[i].innerHTML;
            }
        }
    }

    // verifica se o numero clicado é um operador matemático
    if (buttons[i].className.includes("btnOperadores")) {
        // salva o primeiro valor e zera o result innerHTML
        value1 = parseInt(resultado.innerHTML);
        resultado.innerHTML = "0";
  
        operator = buttons[i].innerHTML;
    }
   });
 }   

  // evento de click do botao igual
  btnIqual.addEventListener("click", () => {
    finish = true;
    const value2 = parseInt(resultado.innerHTML);
    let resultadoCount = 0;
  
    // multiplicacao
    if (operator == "×") {
      resultadoCount = value1 * value2;
    }
  
    // divisao
    if (operator == "÷") {
      resultadoCount = value1 / value2;
    }
  
    // soma
    if (operator == "+") {
      resultadoCount = value1 + value2;
    }
  
    // subtracao
    if (operator == "-") {
      resultadoCount = value1 - value2;
    }
  
    resultado.innerHTML = resultadoCount;
  });
  
  btnAC.addEventListener("click", () => {
    finish = false;
    resultado.innerHTML = "0";
    value1 = 0;
  });