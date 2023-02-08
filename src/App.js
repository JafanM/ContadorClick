import './App.css';
import Boton from './componentes/boton';
import logo from './img/logo.png';
import Contador from './componentes/contador'; 
import {useState} from 'react';


function App() {

  const [NumClick , setNumClick] = useState(0);

  const manejarClick = () => {
    setNumClick(NumClick + 1 );
  }

  const reiniciarContador = () =>{
    setNumClick(0);
  }





  return (
    
    <div className="App">
      <div className='logo-container'>
        <h1>ClickCounter</h1>
        <img className='logo'
        src={logo}
        alt='logo de mi proyecto'
        
        />

      </div>


      <div className='container-counter'>

      <Contador
      NumClick= {NumClick}
      />


      <Boton 
      texto='Click'
      esBotonDeClick={true}
      manejarClick={manejarClick} //asignando funcion a un prop
      
      
      />
      <Boton 
      texto='Reset'
      esBotonDeClick={false}
      manejarClick={reiniciarContador}
      
      
           
      />


      </div>
        
    </div>
  );
}

export default App;
