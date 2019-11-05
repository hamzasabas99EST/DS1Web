
var joueurActif;
var scores=new Array(0,0);
function init(){
    var init=document.querySelectorAll("#score-0, #courent-0 ,#score-1 ,#courent-1"),i;
    document.querySelector('.panel-joueur-1').classList.remove('actif');
    document.querySelector('.panel-joueur-0').classList.add('actif');

    document.querySelector('.de').style.display='none';
    
    for(i=0;i<init.length;i++){
        init[i].innerText="0";
    }
  
}


