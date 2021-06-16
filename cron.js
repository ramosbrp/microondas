"use strict"

var mm = 0;
var ss = 0;

var tempo = 1000;//Quantos milésimos valem 1 segundo?
var cron;
var clicou = false

    
function m30 (e){    
   
    if (clicou===false){
        ss = e
        var format = '0'+'0'+':'+ ss
        document.getElementById('counter').innerText = format
        
        clicou = true
       
    }else{
        ss = 60
        format = '0'+'0'+':'+ ss
        document.getElementById('counter').innerText = format}
    
            
}


//Inicia o temporizador
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis
function pause() {
    clearInterval(cron);
}

//Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron);
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00';
}

//Faz a contagem do tempo e exibição
function timer() {
    ss--; //Incrementa +1 na variável ss

    if (ss == 0) { //Verifica se deu 59 segundos
        stop()
        //ss = 0; //Volta os segundos para 0
        //mm++; //Adiciona +1 na variável mm

        if (mm == 59) { //Verifica se deu 59 minutos
            mm = 0;//Volta os minutos para 0
            
        }
    }

    //Cria uma variável com o valor tratado MM:SS
    //var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    var format = '0'+'0'+':'+ (ss < 10 ? '0' + ss: ss)
    
    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}