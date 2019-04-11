var num = 1
var botao = [];
var numeroDejogadas = 0;
var cont = 0


// function zerar(){
//     var elementos = document.getElementsByClassName('botao');
//     console.log(elementos)
//     for(var i=0; i < elementos.length; i++){
//         elementos[i].style.backgroundColor = 'rgb(500,500,500)';
//     }
// }

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
        alert("Jogador 1 venceu")
    }else if(elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if(elemento[6].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if (elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if (elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    } else if(elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")'){
        alert("Jogador 1 venceu")
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if (elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")'){
        alert('Jogador 2 venceu')
    }else if( numeroDejogadas == 9) {
        alert('Deu velha')       
    }
}
//     }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage == 'url("Brinc/b.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage == 'url("Brinc/b.png")' && elemento[1].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[2].style.backgroundImage == 'url("Brinc/b.png")' && elemento[3].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[4].style.backgroundImage == 'url("Brinc/b.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[7].style.backgroundImage == 'url("Brinc/b.png")' && elemento[8].style.backgroundImage ==  'url("Brinc/x.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }else if (elemento[0].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[1].style.backgroundImage == 'url("Brinc/b.png")' && elemento[2].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[3].style.backgroundImage == 'url("Brinc/b.png")' && elemento[4].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[5].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[6].style.backgroundImage == 'url("Brinc/b.png")' && elemento[7].style.backgroundImage ==  'url("Brinc/x.png")' && elemento[8].style.backgroundImage == 'url("Brinc/b.png")'){
//         alert('Deu velha')
//         document.getElementById('terror').innerHTML = '<img src ="Brinc/v.jpg">'
//     }
// }







// var num = 1
// var botao = [];

// var numeroDejogadas = 0;
// var cont = 0


// function zerar(){
//     var elementos = document.getElementsByClassName('botao');
//     console.log(elementos)
//     for(var i=0; i < elementos.length; i++){
//         elementos[i].style.backgroundColor = 'rgb(500,500,500)'
//     }
// }

// function marca(id, posicao) {
//     let elemento = document.getElementsByClassName('botao');
//     console.log(numeroDejogadas);
//     if (!botao[posicao] && cont == 0) {
//         if (numeroDejogadas % 2 == 0) {
//             jogo1 = document.getElementById(id);
           
//             jogo1.style.backgroundColor = 'rgb(0, 0, 0)';
//         } else {
//             jogo1 = document.getElementById(id);
//             jogo1.style.backgroundColor = 'rgb(204, 204, 204)';        
//         }
//         botao[posicao] = true;
//         console.log(jogo1.style.backgroundColor)
//         numeroDejogadas++;
//     }
//     if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[1].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[2].style.backgroundColor == 'rgb(0, 0, 0)') {
//         alert("Jogador 1 venceu")
//     }else if(elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if(elemento[6].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if (elemento[1].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if (elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     } else if(elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert("Jogador 1 venceu")
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[2].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[3].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[6].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[3].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[2].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[2].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Jogador 2 venceu')
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[1].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[2].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[3].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[7].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[1].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[2].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[3].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[7].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[5].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[1].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[2].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[3].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[4].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[7].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[8].style.backgroundColor == 'rgb(0, 0, 0)'){
//         alert('Deu velha')
//     }else if (elemento[0].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[1].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[2].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[3].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[4].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[5].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[6].style.backgroundColor == 'rgb(204, 204, 204)' && elemento[7].style.backgroundColor == 'rgb(0, 0, 0)' && elemento[8].style.backgroundColor == 'rgb(204, 204, 204)'){
//         alert('Deu velha')
//     }


// }
