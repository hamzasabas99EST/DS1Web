//Sabas Hame Elfiliali Limam  B17


var tempScore,joueurActif,jeuxActif;
var scores=[0,0];
const SCORE_MAX=10;
function init(){
    tempScore=0;
    joueurActif=0;
    jeuxActif=true;
   

    var init=document.querySelectorAll("#score-0, #courent-0 ,#score-1 ,#courent-1"),i;
    document.querySelector('.panel-joueur-1').classList.remove('actif');
    document.querySelector('.panel-joueur-0').classList.add('actif');
    document.querySelector('.de').style.display='none';
    
    for(i=0;i<init.length;i++){
        init[i].innerText="0";
    }
  
}
//Metrre les valeurs en 0
window.onload=init();
document.querySelector('.btn-new').addEventListener('click', init);


//Lancer
document.querySelector('.btn-lancer').addEventListener('click', function(){
    if(jeuxActif){
    var src=Math.floor(Math.random()*6)+1;
    document.querySelector('.de').style.display='block';
    document.querySelector('.de').src='de-'+src+'.png';
    
    if(src !=1){

        tempScore+=src;
        document.querySelector(" #courent-"+joueurActif).innerText=tempScore; 
        
       
        
    } else{ joueurSuivant();}
    
    }
});
  
function joueurSuivant(){

    if(joueurActif==0){
        joueurActif=1;
    }else joueurActif=0;

    document.querySelector(" #courent-0").innerText=0; 
    document.querySelector(" #courent-1").innerText=0; 
    document.querySelector('.panel-joueur-0').classList.toggle('actif');
    document.querySelector('.panel-joueur-1').classList.toggle('actif');
    document.querySelector('.de').style.display='none';
    tempScore=0;
  
}

//Passer 
document.querySelector('.btn-passe').addEventListener('click', function(){

    if(jeuxActif){
        //total score de joueur
        scores[joueurActif]+= tempScore;
        document.querySelector('#score-'+joueurActif).innerText = scores[joueurActif];
        tempScore=0;
        joueurSuivant();
    }
    
    
}
);



