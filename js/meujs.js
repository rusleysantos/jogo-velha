const player1="x";
const player2 = "o";
var PlayerTime = player1;
var GameOver = false;

Atualiza();
Inicio();

function Inicio(){
       
debugger;
    var Espacos = document.getElementsByClassName("espaco");
    
    for(var i = 0; i<Espacos.length;i++){
        Espacos[i].addEventListener("click",function(){
            
           if(GameOver){
               return;
           }
            
            if(this.getElementsByTagName("img").length == 0){
                if(PlayerTime == player1){
                    this.innerHTML = "<img src='./img/x.png' border='0' height='30'>";
                    this.setAttribute("jogada",player1);
                    PlayerTime = player2;
                    
                }
                else{
                    
                    this.innerHTML = "<img src='./img/o.png' border='0' height='30'>";
                    this.setAttribute("jogada",player2);
                    PlayerTime = player1;
                    
                }
                Atualiza();
                Verificar();
            }
            
        });
    }
    
}

function Verificar(){
    var a1 = document.getElementById("a1").getAttribute("jogada");
    var a2 = document.getElementById("a2").getAttribute("jogada");
    var a3 = document.getElementById("a3").getAttribute("jogada");
    
    var b1 = document.getElementById("b1").getAttribute("jogada");
    var b2 = document.getElementById("b2").getAttribute("jogada");
    var b3 = document.getElementById("b3").getAttribute("jogada");
    
    var c1 = document.getElementById("c1").getAttribute("jogada");
    var c2 = document.getElementById("c2").getAttribute("jogada");
    var c3 = document.getElementById("c3").getAttribute("jogada");
    
    var Vencedor = "";
    
    if ((a1 == b1 && a1 == c1 && a1 !="") || (a1 == a2 && a1 == a3 && a1 !="") || (a1 == b2 && a1 == c3 && a1 !=""))
    {
        Vencedor = a1;
        
    }
    else if ((b2 == b1 && b2 == b3 && b2 !="") || (b2 == a2 && b2 == c2 && b2 !="") || (b2 == a3 && b2 == c1 && b2 !=""))
    {
        Vencedor = b2;
    }
    else if (((c3==c2 && c3==c1) || (c3 == a3 && c3)) && c3 != "" )
    {
        Vencedor = c3;
    }
    if (Vencedor != ""){
        GameOver = true;
        alert("O vencedor foi " + Vencedor)
        
    }
    
    
}

function Atualiza(){
    
    if(GameOver){
        return;
                
    }
    if (PlayerTime == player1){
        var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src","./img/x.png");
    }
    else{
         var player = document.querySelectorAll("div#mostrador img")[0];
        player.setAttribute("src","./img/o.png");
    }
    
}