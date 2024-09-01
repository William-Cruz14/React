import style from './Body.module.css';

function Body(props) {

    const { children } = props;
    return (
        <div className={style.Body}>
            {children}
        </div>
        );
}

export { Body };
