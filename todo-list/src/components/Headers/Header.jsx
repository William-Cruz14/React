import style from './Header.module.css';


function Header() {

    return (
        <div className={style.Header}>
            <h1>
                <span>Todo </span>
                List
            </h1>
        </div>
    );
}

export { Header };