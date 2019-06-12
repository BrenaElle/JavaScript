
document.write("</br> Escolha o seu Pedido: </br>");
document.write("</br> 0 - Sorvete/ 1 - Suco </br>");
document.write("</br> 2- Coca Cola/ 3- agua Gelada </br>");

//switch
function pedir(){

   x = prompt("O que deseja Pedir?");

   switch(x){

       case "0":
            alert("Voce pediu sorvete");
            break;
       case "1":
            alert("Voce pediu Suco");
            break;
       case "2":
            alert("Voce pediu Coca-cola!!");
            break;
       case "3":
            alert("Voce pediu agua gelada!");
            break;
        default:
             alert("Sinto Muito,Nao temos essa Opcao!");
             break;
 
 
   }

}
    


