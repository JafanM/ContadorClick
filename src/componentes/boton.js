
import '../hoja-estilo/boton.css';

function Boton({texto, esBotonDeClick, manejarClick}){ //texto es lo mismo q un props solo q + simplificado
    return(
  //si la clase esboton es verdadera retorneme boton-click sino retorneme btn-reset
      <button className={ esBotonDeClick ? 'boton-click' : 'boton-reset' }
      onClick={manejarClick}>
      
        {texto}
      </button>
    );

}
export default Boton; 