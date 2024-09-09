import style from './Footer.module.css';

function Footer(props) {

    const anoAtual = (new Date()).getFullYear();
    return (
        <div className={style.Footer}>
            <footer>
                <span>React Básico - { anoAtual } - { props.criador } </span>

            </footer>

        </div>
        
    );
}

export { Footer };