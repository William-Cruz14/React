import style from './Citacao.module.css';
import { Card, CardBody } from '@chakra-ui/react';

function Citacao() {
  return (
    <div className={style.Citacao}>
      <Card>
        <CardBody>
          <p>
            <i>
              "Aquilo que se faz por amor está sempre além do bem e do mal." 
            </i>
              {' '}-<span> Friedrich Nietzsche</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export { Citacao };
