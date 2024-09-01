import { Container } from '@chakra-ui/react';
import style from './Paragraph.module.css';

function Paragraph() {
    return (
        <Container maxW='900px'>
             <div className={style.Paragraph}>
        
                    <p>
                        Estou estudando para tirar uma certificação <strong>Microsoft</strong>, então para que isso aconteça
                        estou tendo que organizar minha rotina para que eu possa ter um bom resultado nos estudos.
                        <br />
                        Algumas das coisas que estou fazendo são:
                        <br /><br />

                        <section className={style.List}>
                            <ul >
                                <li><strong>Estipular o melhor horário de estudo.</strong></li>
                                <li><strong>Fazer intervalos durante o estudo.</strong></li>
                                <li><strong>Revisar pontos em que eu não obtive um entendimento sólido.</strong></li>
                                <li><strong>Tentar fazer com que os pontos acima se torne um hábito.</strong></li>
                            </ul>
                        </section>
                    
                    </p>
              
               </div>
        </Container>
       
    );
}

export { Paragraph };