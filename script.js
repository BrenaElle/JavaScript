
// função entrar

function entrar (){

    var area = document.getElementById('Area');
    var texto = prompt('digite seu nome?');

    if(texto == " " || texto == null ){
        alert('digite seu nome novamente!');
        area.innerHTML = 'bem vindo ...';
    }else{
         area.innerHTML = 'bem vindo ' + texto;
    }
  
}
  
function entrar2(nome){

    var area = document.getElementById('Area2');
    var texto = prompt('digite seu sobrenome?');
    area.innerHTML = nome + " "+ texto;

}
      

    