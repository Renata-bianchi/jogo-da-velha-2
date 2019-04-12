var num = 1
var botao = [];
var numeroDejogadas = 0;
var cont = 0




function marca(id, posicao) {
    let elemento = document.getElementsByClassName('botao');
    console.log(numeroDejogadas);
    if (!botao[posicao] && cont == 0) {
        if (numeroDejogadas % 2 == 0) {
            jogo1 = document.getElementById(id);           
            jogo1.style.backgroundImage =  "url('Brinc/x.png')";
        } else {
            jogo1 = document.getElementById(id);
            jogo1.style.backgroundImage =  "url('Brinc/b.png')";
        }
        botao[posicao] = true;
        console.log(jogo1.style.backgroundColor)
        numeroDejogadas++;
    }
    
    if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[2].style.backgroundImage ==  'url("Brinc/x.png")') {
       document.getElementById("ganhador").innerHTML = 'X venceu';
       cont == cont++     
    }else if(elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if(elemento[6].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if (elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if (elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    } else if(elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")'){
        document.getElementById("ganhador").innerHTML = 'X venceu';
        cont == cont++
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage == 'url("Brinc/b.png")'){
        document.getElementById("ganhador").innerHTML = 'O venceu';
        cont == cont++
    }else if (elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if (elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")'){
         document.getElementById("ganhador").innerHTML = 'O venceu';
         cont == cont++
    }else if( numeroDejogadas == 9) {
        document.getElementById("ganhador").innerHTML = 'Empate!'; 
        cont == cont++      
    }
}
