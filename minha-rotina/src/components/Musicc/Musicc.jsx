import style from './Musicc.module.css';

function Musicc() {
  return (
    <div className={style.Musicc}>
      <audio autoplay controls loop muted>
        <source src='https://christianosantos.com/files/cs1/musica01.mp3'/>
      </audio>

    </div>
    
  );
}

export { Musicc };
