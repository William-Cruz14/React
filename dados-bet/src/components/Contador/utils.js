import img1 from'../Dado/images/dice1.png';
import img2 from '../Dado/images/dice2.png';
import img3 from '../Dado/images/dice3.png';
import img4 from '../Dado/images/dice4.png';
import img5 from '../Dado/images/dice5.png';
import img6 from '../Dado/images/dice6.png';
import inter from '../Dado/images/inter.png';

export let resultado, faceDado, vitorias, jogadas;

export function buscarImage(atribValue) {

    const imagesMap = {
        1: img1,
        2: img2,
        3: img3,
        4: img4,
        5: img5,
        6: img6,
    };

    const resultado = atribValue in imagesMap ? imagesMap[atribValue] : inter;

    return resultado;
}



export function numeroAleatorio() {
    faceDado = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    return faceDado;
}

export function vitoriasJogadas(){

    if(resultado === 7 || resultado === 11) {
        vitorias += 1;
        jogadas += 1;
    
    } else {

        jogadas += 1;
    }
}
