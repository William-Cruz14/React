import Button from '@mui/material/Button';
import styles from './Button.module.css';

function ButtonJ(props) {

    return (
        <div className={styles.Button}>
             <Button sx={{background: '#3DA35D'}} className={styles.customButton} onClick={props.act} variant="contained">Jogar</Button>
        </div>
       
    );
}

export { ButtonJ };