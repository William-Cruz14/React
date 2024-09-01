import style from './Contact.module.css';
import { Container } from '@chakra-ui/react';
import Facebook from './images/facebook.svg';
import Email from './images/envelope.svg';
import Linkedin from './images/linkedin.svg';

function Contact() {
  return (
    <div className={style.Contact}>
      <h1>Contato</h1>
      <br />

      <Container maxW='900px'>
        <p>
          Estou sempre aberto a novas oportunidades de trabalho, colaborações em
          projetos e discussões sobre tecnologia. Se você tem uma ideia
          interessante, uma proposta de parceria, ou simplesmente quer trocar
          uma ideia sobre desenvolvimento de software e inovação, ficarei feliz
          em conversar. Você pode me enviar uma mensagem usando o formulário
          abaixo ou, se preferir, entrar em contato diretamente pelo meu e-mail.
          Responderei o mais breve possível!
        </p>
      </Container>

      <br />

      <Container maxW='900px'>
        <h2>Encontre-me</h2>
        <div className={style.Inline}>
            <a href='https://www.facebook.com/liamcruuz' target='_blank'>
              <img src={Facebook} alt='Logo facebook' />
            </a>
            <a href='mailto:cruzwilliam14@gmail.com'>
              <img src={Email} alt='Logo de um envelope' />
            </a>

            <a href='https://www.linkedin.com/in/william-cruz-da-silva-a6a394b9/' target='_blank'>
              <img src={Linkedin} alt='Logo do linkedin' />
            </a>


        </div>
        
      </Container>
    </div>
  );
}

export { Contact };
