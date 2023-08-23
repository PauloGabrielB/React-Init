import { useState } from 'react'
import foto1 from './assets/foto1.jpg'
import foto2 from './assets/foto2.jpg'
import foto3 from './assets/foto3.jpg'
import foto4 from './assets/foto4.jpg'
import './app.css'


function App() {
  return (
    <> 
    <h1 className='titulo'> Items mais vendidos</h1>
    <div className='conteiner'>
      <div className='painel'>
        <img src={foto1} alt="foto1" />
        <h1 className='itemName'>Porshe Básica <span>R$ 35,00</span></h1> 
        <p className='cor'>Preto</p>
      </div> 
      <div className='painel'>
        <img src={foto2} alt="foto2" />
        <h1 className='itemName'>Porshe Media <span>R$ 40,00</span></h1> 
        <p className='cor'>Cinza</p>
      </div> 
      <div className='painel'>
        <img src={foto3} alt="foto3" />
        <h1 className='itemName'>Porshe Premium <span>R$ 45,00</span></h1> 
        <p className='cor'>Preto</p>
      </div> 
      <div className='painel'>
        <img src={foto4} alt="foto4" />
        <h1 className='itemName'>Porshe Premium Plus <span>R$ 55,00</span></h1> 
        <p className='cor'>Azul</p>
      </div> 
    </div>
    
    </>
  )
}

export default App
