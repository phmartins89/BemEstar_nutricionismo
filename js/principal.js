
				
        //console.log(document.querySelector("h1 / titulo"));  DOCUMENT é o link do JS com HTML o QUERYSELECTOR seleciono apenao oq qro dentro do JS
        let titulo = document.querySelector(".titulo"); //declarei o trecho de código como uma variavel
        titulo.textContent = "Bem Estar - Nutrição"
        
        var paciente = document.querySelector("#primeiro-paciente"); // # para buscar ID
        
        var tdPeso = paciente.querySelector(".info-peso"); // .  para buscar class
        var tdAltura = paciente.querySelector(".info-altura");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        /*console.log(paciente); //tr
        console.log(tdPeso); //td que tem o peso
        console.log(peso);  //Obter o peso de Pedro
        console.log(altura); //Obter a altura de Pedro */

       let tdImc = paciente.querySelector(".info-imc"); //peguei o valor do IMC
       
       let pesoEhvalido = true;
       let alturaEhvalida = true;

       if( peso <= 0 || peso >= 1000){
                console.log("Peso invalido")
                pesoEhvalido = false; //condição para não seguir o calculo do IMC com valores incompativeis
                tdImc.textContent = "Peso inválido!"
        }       
       
       if( altura <= 0.30 || altura >= 2.80){
        console.log("Altura invalida")
        alturaEhvalida =false;
        tdImc.textContent = "Altura inválida!"
        }

        if(pesoEhvalido && alturaEhvalida){
                let imc = peso / (altura * altura);
                tdImc.textContent = imc;

        }