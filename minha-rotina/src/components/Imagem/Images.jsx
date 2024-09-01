import { Image } from '@chakra-ui/react';
import style from './Images.module.css';

function Images() {
    return (
        <div className={style.Images}>
            <Image 
                borderRadius='full'
                borderColor='#8595d3'
                boxSize='200px'
                src='https://christianosantos.com/files/cs1/avatar-homem.jpg'
                alt='Imagem de um homem'
            />

        </div>
        
    );
}

export { Images };