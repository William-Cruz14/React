import styles from './Contador.module.css';
import Box from '@mui/material/Box';

function Contador(props) {
    
    return (
        <div className={styles.Contador}>
            <Box>
                {props.conteudo}
            </Box>
        </div>
    );
}

export { Contador };