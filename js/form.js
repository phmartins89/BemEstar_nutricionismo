 // Parte do código para fazer o botão adicionar os valores em uma tabela
                
 let botaoAdicionar = document.querySelector("#adicionar-paciente");
 botaoAdicionar.addEventListener("click", function(event){
         event.preventDefault(); //previne o comportamento padrão de lista a tabela e recarregar a página
         
         let form = document.querySelector("#form-adiciona");

         let nome = form.nome.value; //linha para pegar os valores declarados
         let peso = form.peso.value;
         let altura = form.altura.value;
         let gordura = form.gordura.value;

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
         imcTd.textContent = calculaImc(peso,altura);
       
         pacienteTr.appendChild(nomeTd); // appendchild coloca os valores como filhos, pai TR e filhos TD
         pacienteTr.appendChild(pesoTd);
         pacienteTr.appendChild(alturaTd);
         pacienteTr.appendChild(gorduraTd);
         pacienteTr.appendChild(imcTd);

                         
         let tabela = document.querySelector("#tabela-pacientes");

         tabela.appendChild(pacienteTr);
 });