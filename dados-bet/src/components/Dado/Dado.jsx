import Alert from '@mui/material/Alert';
import styles from './Dado.module.css';
import { buscarImage, numeroAleatorio } from '../Contador/utils.js';
import { ButtonJ } from '../Button/Button.jsx';
import { useState } from 'react';
import { Contador } from '../Contador/Contador.jsx';
import { Paper } from '@mui/material';

function Dado({ face }) {
    return (
        <div className={styles.Dado}>
            <Paper >
                <img src={face} alt="Imagem de um dado." />
            </Paper>

        </div>

    );
}


function Dados() {

    const [dado1, setDado1] = useState(buscarImage(0));
    const [dado2, setDado2] = useState(buscarImage(0));

    const [vitorias, setVitorias] = useState(0);
    const [jogadas, setJogadas] = useState(0);
    const [showAlert, setShowAlert] = useState(false);

    const rolarDados = () => {
        const face1 = numeroAleatorio();
        const face2 = numeroAleatorio();
        setDado1(buscarImage(face1));
        setDado2(buscarImage(face2));

        const soma = face1 + face2;

        if (soma === 7 || soma === 11) {
            setVitorias(prevVitorias => prevVitorias + 1);
            setShowAlert(true);
        } else {

            setShowAlert(false);
        }

        setJogadas(prevJogadas => prevJogadas + 1);

    };

    const calcularPorcentagem = () => {
        if (jogadas === 0) return 0;
        return ((vitorias / jogadas) * 100).toFixed(2);
    };

    return (
        <div>

            {showAlert && (
                <Alert variant='filled' severity='success'>
                    Parabéns, você ganhou!!
                </Alert>

            )}

            <Contador conteudo={"Total de Jogadas: " + jogadas} />
            <Contador conteudo={"Total de Vitórias: " + vitorias} />
            <Contador conteudo={"Porcentagem de Vitórias: " + calcularPorcentagem() + "% "} />

            <div className={styles.customDiv}>
                <Dado face={dado1} />
                <Dado face={dado2} />
            </div>

            <ButtonJ act={rolarDados} />
        </div>
    );
}

export { Dados };
