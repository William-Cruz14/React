import style from './Videoo.module.css';
import { Card , CardBody} from '@chakra-ui/react';

function Videoo() {
    return (
        <div className={style.Videoo}>
            <Card>
                <CardBody>
                    <video loop autoPlay muted width='500px'>
                        <source src='https://www.w3schools.com/tags/movie.mp4'/>
                    </video>

                </CardBody>
            </Card>
            
        </div>
    );
}

export { Videoo };