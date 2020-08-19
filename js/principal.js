
				
        //console.log(document.querySelector("h1 / titulo"));  DOCUMENT é o link do JS com HTML o QUERYSELECTOR seleciono apenao oq qro dentro do JS
        let titulo = document.querySelector(".titulo"); //declarei o trecho de código como uma variavel
        titulo.textContent = "Bem Estar - Nutrição"
        
        var pacientes = document.querySelectorAll(".paciente"); // # para buscar ID
        
        for(let i = 0; i < pacientes.length; i++){ //loop FOR usado para transcorrer meu trecho de código
                        
                let paciente = pacientes[i];

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
                                console.log("Peso invalido");
                                pesoEhvalido = false; //condição para não seguir o calculo do IMC com valores incompativeis
                                tdImc.textContent = "Peso inválido!";
                                paciente.classList.add("paciente-invalido");
                                //No JS utilizasse camel case para duas palavras e nao background-color
                        }       
                
                if( altura <= 0.30 || altura >= 2.80){
                        console.log("Altura invalida");
                        alturaEhvalida =false;
                        tdImc.textContent = "Altura inválida!";
                        paciente.classList.add("paciente-invalido");
                        }

                        if(pesoEhvalido && alturaEhvalida){
                                let imc = peso / (altura * altura);
                                tdImc.textContent = imc.toFixed(2); //toFIxed função para mostrar apenas 2 casas decimais
                }
        }

                // Parte do código para fazer o botão adicionar os valores em uma tabela
                
        let botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", function(event){
                event.preventDefault(); //previne o comportamento padrão de lista a tabela e recarregar a página
                
                let form = document.querySelector("#form-adiciona");

                let pacienteTr = document.createElement("tr");

                let nomeTd = document.createElement("td");
                let pesoTd = document.createElement("td");
                let alturaTd = document.createElement("td");
                let gorduraTd = document.createElement("td");
                let imcTd = document.createElement("td");

                nomeTd.textContent = nome;
                pesoTd.textContent = peso;
                alturaTd.textContent = altura;
                gorduraTd.textContent = gordura;
                imcTd.textContent = imc;

                pacienteTr.appendChild(nomeTd); // appendchild coloca os valores como filhos, pai TR e filhos TD
                pacienteTr.appendChild(pesoTd);
                pacienteTr.appendChild(alturaTd);
                pacienteTr.appendChild(gorduraTd);
                pacienteTr.appendChild(imcTd);
                
                let tabela = document.querySelector("#tabela-pacientes");

                tabela.appendChild(pacienteTr);
        });

        //titulo.addEventListener("click", function ()  addEventListener é um escutador de elemento
        //{console.log("Olá eu fui clicado!") });  função anonima colocada dentro de um metodo não precisa nomea la

        