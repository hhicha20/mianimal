import './App.css'

import perrobonito from './assets/perrobonito.jpg'

function App() {
  return (
    <div>
      <h1>¡Hola, Perrito!</h1>
      <img className='avatar' src={perrobonito} alt="imagen" />
    </div>
  )
}

export default App